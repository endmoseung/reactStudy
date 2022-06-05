import React, { useEffect, useState } from "react";
import Search from "./components/search/search";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        // console.log(selectedVideo);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.appWrapper}>
      <Search onSearch={search}></Search>
      <div className={styles.videoWrapper}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.videoList} v>
          <VideoList
            onVideoClick={selectVideo}
            videos={videos}
            display={selectedVideo ? "list" : "grid"} //selectedvideo가 있따면 list없다면 grid인데 이를 통해서 뒤에 widht를 바꿔준다
          />
        </div>
      </div>
    </div>
  );
};

export default App;
