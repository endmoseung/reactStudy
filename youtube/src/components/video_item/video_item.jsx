import React from "react";

const VideoItem = (props) => {
  return (
    <div className="videoBox">
      <img
        alt="로딩중입니다."
        src={props.video.snippet.thumbnails.default.url}
        className="videoThumbnail"
      ></img>
      <div className="videoTextBox">
        <div className="videoTextTitle">{props.video.snippet.title}</div>
        <div className="videoTextChannel">
          {props.video.snippet.channelTitle}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
