import React from 'react';

const Video = (props) => {
      

  return(
    <div className="videoBox">
      <img alt='로딩중입니다.' src='https://i.ytimg.com/vi/9ruBLEEqw_c/default.jpg' className="videoThumbnail"></img>
      <div className="videoTextBox">
        <div className="videoTextTitle">12</div>
        <div className="videoTextChannel">34</div>
      </div>
    </div>
  );
  };

export default Video;