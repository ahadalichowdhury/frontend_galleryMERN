import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddImage from "./pages/AddImage";
import AddCategory from "./pages/AddCategory";
import Header from "./pages/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-image" element={<AddImage />} />
        <Route path="/add-category" element={<AddCategory />} />
      </Routes>
    </>
  );
}

export default App;
