import React from "react";
import ReactPlayer from "react-player";

function MediaPlayer({ link, ...props }) {
  return (
    <ReactPlayer
      controls="true"
      playing="true"
      width="100%"
      height="100%"
      url={link}
      id="reactPlayer"
      volume="0"
    />
  );
}

export default MediaPlayer;
