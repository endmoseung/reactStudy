import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => (
  <ul className="videoWrapper">
    {props.search.map((search) => (
      <VideoItem key={search.id} video={search} />
    ))}
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
