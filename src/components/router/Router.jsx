import { Routes, Route } from "react-router-dom";
import React from "react";
import Test from '../TestComponent'
import Test2 from '../TestComponent2'
import ImageFetch from "../datafetch/imagefetch";


export default function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/"/>
        <Route path="images" element={<ImageFetch/>} />
        <Route path="video" element={<Test2/>} />
      </Routes>
    </>
  );
}
