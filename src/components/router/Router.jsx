import { Routes, Route } from "react-router-dom";
import React from "react";
import ImageFetch from "../datafetch/imagefetch";
import VideoFetch from "../datafetch/videofetch";





export default function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/"/>
        <Route path="images" element={<ImageFetch/>} />
        <Route path="video" element={<VideoFetch/>} />

      </Routes>
    </>
  );
}
