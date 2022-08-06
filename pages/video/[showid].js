import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import VideoPlayer from './VideoPlayer';

export default class Video extends React.Component {

  constructor () {
    super();
    this.state = {
      videoJsOptions: {
        autoplay: true,
        controls: true,
        sources: [{
          // src: `https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/${}/episodes/${}.mp4`,
          type: 'video/mp4'
        }]
      }
    }
  }

  render() {
    console.log("PARENT")
    return (
      <div className='video-wrapper'>
        <VideoPlayer {...this.state.videoJsOptions}/>
      </div>
    );
  }
}