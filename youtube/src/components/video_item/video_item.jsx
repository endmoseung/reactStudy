import React from "react";
import styles from "../video_item/video_item.module.css";

const VideoItem = ({ video }) => {
  //props를 deconstructing하여 결국 snippet으로 바꿔줬다
  const clickHandler = () => {};
  return (
    <div onClick={clickHandler} className={styles.container}>
      <div className={styles.video}>
        <img
          alt="로딩중입니다."
          src={video.snippet.thumbnails.default.url}
          className={styles.thumbnail}
        ></img>
        <div className={styles.videoTextBox}>
          <div className={styles.title}>{video.snippet.title}</div>
          <div className={styles.channel}>{video.snippet.channelTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
