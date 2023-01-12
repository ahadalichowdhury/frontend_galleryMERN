import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, postNewImage } from "../redux/reducer/gallerySlice";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const formData = new FormData();
  formData.append("image", file);
  formData.append("category", category);
  const { images, categories } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewImage(formData));
    navigate("/");
  };
  return (
    <div class="container">
      <div class="row ">
        <div align="center">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Image:</label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mt-4">
              <label for="exampleInputEmail1">Category:</label>
              <select
                class="form-control custom-select"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" selected disabled>
                  Please Select
                </option>
                {categories &&
                  categories.map((category) => {
                    return (
                      <option value={category._id}>{category.name}</option>
                    );
                  })}
              </select>
            </div>

            <button type="submit" class="btn btn-primary mt-4">
              Upload
            </button>
          </form>

          <button className="btn btn-primary">Go to Home</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default AddImage;
