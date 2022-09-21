import { router, useRouter } from "next/router"
import VideoPlayer from "../VideoPlayer"
import { Component } from "react"
import Axios from "axios";

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
      Axios.get('/api/showinfo/isplaying')
      .then(data => {
        let isplaying = JSON.parse(data.data.rows[0].showjson).episodes;
        if(isplaying == "1") {
          Axios.get(`/api/showinfo/${showid}`)
          .then(data => {
            //console.log(data)
            //console.log("got the stuff");
            let show = JSON.parse(data.data.rows[0].showjson);
            //console.log(show)
            this.setState({
              view: "video",
              show: show,
              episode: episode,
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
          }).catch(err => {console.log(err)})
        } else {
          this.setState({view: "notplaying"})
        }
      })
    }


  //   render () {
  //     console.log(this.state)
  //     if(this.state.sources[0] == 'undefined') {
  //       return (<div>loading</div>)
  //     } else {
  render() {
    if(this.state.view == "loading") {
      return (<div>loading</div>)
    } else if (this.state.view == "notplaying") {
      return (
        <div className="notplaying-wrapper">
          <p className="np-p">video playback is not available at this time.</p>
        </div>
      )
    } else {
      return (
        <div className='video-wrapper'>
          <VideoPlayer {...this.state.options} />
          <center><div className="details-wrapper">
            <p className="d title">{this.state.show.name}</p>
            <p className="d episode">Episode: {this.state.episode}</p>
          </div></center>
        </div>
      )
    }
  }
  //}
}

