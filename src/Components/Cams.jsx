"use client";
import Webcam from "react-webcam";
import React, { useRef, useState } from "react";

function Cams() {
  let img_snap = null;

  const webref = useRef(null);
  // open webcam and hide the demo image
  const openCam = (e) => {
    e.preventDefault();
    document.getElementsByClassName("cam")[0].classList.remove("hidden");
    document.getElementsByClassName("cap-btn")[0].classList.remove("hidden");
    document.getElementsByClassName("open_cam_btn")[0].classList.add("hidden");
    document.getElementsByClassName("demo_image")[0].classList.add("hidden");
    document.getElementsByClassName("submit-btn")[0].classList.add("hidden");

  };
  // Capture the image and show it
  const showImage = (e) => {
    e.preventDefault();
    img_snap = webref.current.getScreenshot();
    document.getElementsByClassName("cam")[0].classList.add("hidden");

    let img = document.createElement("img");
    img.src = img_snap;

    document.getElementById("img-cont").appendChild(img);

    document.getElementsByClassName("cap-btn")[0].classList.add("hidden");
    document.getElementsByClassName("retake-btn")[0].classList.remove("hidden");
    document.getElementsByClassName("submit-btn")[0].classList.remove("hidden");

  };
  // retake the image
  const retakeImage = (e) => {
    e.preventDefault();
    document.getElementsByClassName("demo_image")[0].classList.remove("hidden");
    document.getElementsByClassName("retake-btn")[0].classList.add("hidden");
    document.getElementById("img-cont").removeChild(document.getElementById("img-cont").lastChild);
    document.getElementsByClassName("open_cam_btn")[0].classList.remove("hidden");
    document.getElementsByClassName("submit-btn")[0].classList.add("hidden");

  };

  // On submit have to send the image to the server
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("Image Captured");
  }

  return (
    <>
      <div
        id="img-cont"
        className="bg-blue-200 w-4/6 h-2/4 text-center m-auto mt-10 border-solid border-black rounded-lg border-2"
      >
        <img
          className=" h-full w-full rounded-lg demo_image"
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          alt="image description"
        />

        <Webcam
          ref={webref}
          mirrored
          className="hidden rounded-lg cam w-full h-full"
        />
      </div>
      <div className="w-full text-center m-auto h-full"></div>
      <button
        onClick={openCam}
        className="open_cam_btn mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Open Camera
      </button>

      <button
        onClick={showImage}
        className="cap-btn hidden mt-10 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
      >
        Capture
      </button>
      <button
        onClick={retakeImage}
        className="retake-btn hidden mt-10 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Retake
      </button>
      <button
        onClick={handleOnSubmit}
        className="submit-btn hidden mt-10 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
      >
        Submit
      </button>

      <br />
      <br />
    </>
  );
}
export default Cams;
