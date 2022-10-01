import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends React.Component {

  constructor () {
    super();

    this.state = {
      volume: 0.5
    }
  }

  // Instantiate a Video.js player when the component mounts
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, () => {
      videojs.log('onPlayerReady', this);
    });
    this.player.volume(this.state.volume);
    document.body.addEventListener("keydown",(e) => {
      e.preventDefault()

      if(e.key == "ArrowUp") { // volume up on arrow up
        this.setState({volume: this.state.volume + 0.05}, () => {
          this.player.volume(this.state.volume);
        })
      } else if(e.key == "ArrowDown") { // volume down on arrow down
        this.setState({volume: this.state.volume - 0.05}, () => {
          this.player.volume(this.state.volume);
        })
      } else if(e.key == "f") { // toggle fullscreen
        console.log(this.player.isFullscreen())
        if(!this.player.isFullscreen()) {
          this.player.requestFullscreen()
        } else {
          this.player.exitFullscreen()
        }
      } else if(e.key == " ") { // toggle play / pause
        if(this.player.paused()) {
          this.player.play();
        } else {
          this.player.pause();
        }
      } else if(e.key == "ArrowRight") { // skip + 5 sec
        this.player.currentTime(this.player.currentTime() + 5);
      } else if(e.key == "ArrowLeft") { // skip - 5 sec
        this.player.currentTime(this.player.currentTime() - 5);
      }
    })
  }

  // Dispose the player when the component will unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // Wrap the player in a `div` with a `data-vjs-player` attribute, so Video.js
  // won't create additional wrapper in the DOM.
  //
  // See: https://github.com/videojs/video.js/pull/3856
  render() {
    //console.log("\n- VIDEO PLAYER -\n")
    return (
      <div data-vjs-player>
        <video ref={node => this.videoNode = node} className="video-js"></video>
      </div>
    );
  }
}