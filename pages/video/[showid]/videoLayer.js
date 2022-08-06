import { router, useRouter } from "next/router"
import VideoPlayer from "../VideoPlayer"
import { Component } from "react"

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      view: "loading",
      options: {
        autoplay: true,
        controls: true,
        sources: [{
          src: '/path/to/video.mp4',
          type: 'video/mp4'
        }]
      }
    }
  }

    componentDidMount () {
      //console.log("MOUNTED");
      let showid = window.location.pathname.split("/")[2];
      let episode = window.location.pathname.split("/")[3];
      if (episode.length == 1) {episode = `0${episode}`};
      this.setState({
        view: "video",
        options: {
          autoplay: true,
          controls: true,
          sources: [{
            src: `https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/${showid}/episodes/${episode}/video.mp4`,
            type: 'video/mp4'
          }]
        }
      }, () => {
        //console.log(this.state)
      });
    }


  //   render () {
  //     console.log(this.state)
  //     if(this.state.sources[0] == 'undefined') {
  //       return (<div>loading</div>)
  //     } else {
  render() {
    if(this.state.view == "loading") {
      return (<div>loading</div>)
    } else {
      return (
        <div className='video-wrapper'>
          <VideoPlayer {...this.state.options} />
        </div>
      )
    }
  }
  //}
}

