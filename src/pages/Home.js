import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllImages,
  getAllCategories,
  getSingleImage,
} from "../redux/reducer/gallerySlice";
const Home = () => {
  const Base_URL = "https://backend-gallerymern.onrender.com";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, []);

  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id));
    dispatch(getAllImages());
  };
  return (
    <div className="container my-3">
      <div className="row ">
        <div align="center">
          <button
            onClick={() => dispatch(getAllImages())}
            className="btn btn-primary filter-button"
            data-filter="all"
          >
            All
          </button>

          {categories &&
            categories.map((item) => {
              return (
                <button
                  onClick={() => handleCategories(item._id)}
                  className="btn btn-default filter-button border mx-2"
                  data-filter="hdpe"
                >
                  {item.name}
                </button>
              );
            })}
        </div>

        <br />

        {images &&
          images.map((item, i) => {
            return (
              <div
                key={i}
                className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4"
              >
                <img
                  src={`${Base_URL}/${item.name}`}
                  className="img img-responsive"
                  height="300px"
                  width="300px"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
