import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./reducer/gallerySlice";

const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});

export default store;
