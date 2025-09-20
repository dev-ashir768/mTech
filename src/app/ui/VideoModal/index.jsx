import React from "react";
import { useState } from "react";
import Div from "../Div";

export default function VideoModal({ videoSrc, variant }) {
  return (
    <>
      <Div
        className={`cs-video_block ${
          variant ? variant : "cs-style1"
        } cs-video_open cs-bg`}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          preload="none"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Div>
    </>
  );
}
