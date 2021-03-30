import React from "react";
import ReactPlayer from "react-player";

function MediaPlayer({ link, ...props }) {
  return (
    <ReactPlayer
      controls="true"
      playing
      width="100%"
      height="100%"
      url={link}
      id="reactPlayer"
    />
  );
}

export default MediaPlayer;
