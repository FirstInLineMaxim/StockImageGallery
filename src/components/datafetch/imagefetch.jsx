import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import Popup from "./popup";
import domtoimage from "dom-to-image";
import "../popup/Popup.css";
import { saveAs } from "file-saver";

export default function ImageFetch() {
  const [openPopup, setOpenPopup] = useState(false);
  const [imageArray, setimageArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [imageIndex, setImageIndex] = useState();

  useEffect(() => {
    async function fetchData() {
      await fetch("https://api.pexels.com/v1/search?query=nature&per_page=80", {
        headers: {
          Authorization:
            "563492ad6f91700001000001620506b875614302bd8f6e133d82d091",
        },
      })
        .then((res) => res.json())
        .then((data) => setimageArray(data.photos));
    }
    fetchData();
  }, []);
  function popup(e) {
    setOpenPopup(true);
  }

  const saveImgHandler = () => {
    domtoimage.toBlob(document.getElementById("my-node")).then(function (blob) {
      window.saveAs(blob, "image.png");
    });
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = imageArray.slice(firstPostIndex, lastPostIndex);

  const imageMap = currentPosts.map((i, index) => {
    return (
      <>
        <button
          style={{ background: "none", border: "0px" }}
          onClick={() => {
            setOpenPopup(true);
            setImageIndex(i);
            console.log(i);
          }}
        >
          {" "}
          <img src={i.src.tiny} />
        </button>
      </>
    );
  });

  if (imageArray && imageIndex) {
    return (
      <>
        {imageMap}
        <Popup open={openPopup} onClose={() => setOpenPopup(false)}>
          <div
            style={{
              width: "1000px",
              height: "600px",
              background: "white",
              border: "0px",
              paddingLeft: "2em",
            }}
          >
            <div className="popup-info-cont">
              <h2 className="popup-author">{imageIndex.photographer}</h2>
              <button
                className="popup-bttn"
                onClick={() => {
                  saveImgHandler();
                }}
              >
                Free download
              </button>
            </div>
            <div id="my-node">
              <img className="popup-img" src={imageIndex.src.medium} />
            </div>
          </div>
        </Popup>

        <Pagination
          totalPosts={imageArray.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }

  return (
    <>
      {imageMap}
      <Pagination
        totalPosts={imageArray.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
