import { Routes, Route } from "react-router-dom";
import React from "react";
import ImageFetch from "../datafetch/imagefetch";
import VideoFetch from "../datafetch/videofetch";




export default function CustomRoutes({search}) {
  return (
    <>
      <Routes>
        <Route path="/"/>
        <Route path="images" element={<ImageFetch query={search}/>} />
        <Route path="video" element={<VideoFetch query={search}/>} />
      </Routes>
    </>
  );
}
