import React, { useCallback, useEffect, useState } from "react";
import Search from "./components/search/search";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

const App = ({ youtube }) => {
  // 여기서 나온 youtube는 index.js애서 클래스 선언하고 props로 받아온 아이
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    //useCallback을 사용한 이유 : 결국 위에 있는 함수들은 props이 전달될떄 마다 새로 불러지는데 무분별한 불러짐을 막기위해 useeffect처럼 초반에 mount됬을때만 불러주기위해 뒤에 빈배열을 추가했다, 무분별한 usecallback남용 하지마라
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          // console.log(selectedVideo);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.appWrapper}>
      <Search onSearch={search}></Search>
      <div className={styles.videoWrapper}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.videoList}>
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
