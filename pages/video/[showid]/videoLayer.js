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
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    //console.log("MOUNTED");
    let showid = window.location.pathname.split("/")[2];
    let episode = window.location.pathname.split("/")[3];
    if (episode.length == 1) { episode = `0${episode}` };
    Axios.get('/api/showinfo/isplaying')
      .then(data => {
        let isplaying = JSON.parse(data.data.rows[0].showjson).episodes;
        if (isplaying == "1") {
          Axios.get(`/api/showinfo/${showid}`)
            .then(data => {
              let show = JSON.parse(data.data.rows[0].showjson);
              this.setState({
                view: "video",
                show: show,
                episode: episode,
                options: {
                  autoplay: true,
                  controls: true,
                  width: document.body.clientWidth < 800 ? 450 : 640,
                  height: document.body.clientWidth < 800 ? 300 : 360,
                  sources: [{
                    src: `https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/${showid}/episodes/${episode}/video.mp4`,
                    type: 'video/mp4'
                  }]
                }
              });
            }).catch(err => { console.log(err) })
        } else {
          this.setState({ view: "notplaying" })
        }
      })
  }

  favorite (e) {
    if(e.target.className.includes("vp-favorite")) {
      e.target.className = "vp-fav-fill material-symbols-outlined";
    } else {
      e.target.className = "vp-favorite material-symbols-outlined";
    }
    
  }


  // ~steve here
  // i am going to attemp to help out future steve
  // today i updated the ui to be not so shit
  // the giant block of commented out code should end up being the comment section
  // should probably be its own component
  // - 
  // also favorite button
  // yeah i think i do want to add users to this
  // i still think ill let anyone use the site without signing in
  // but signing in will be required for favorites and comments

  // this first block checks for data and will switch to the main view once the getter is back from the db
  // an animated spinner would be nice
  // also checks if video playback is turned on in the db
  render() {
    if (this.state.view == "loading") {
      return (<div>loading</div>)
    } else if (this.state.view == "notplaying") {
      return (
        <div className="notplaying-wrapper">
          <p className="np-p">video playback is not available at this time.</p>
        </div>
      )
    } else {
      return (
        <div className="video-player-ultra">
          <div className="vp-wrapper-main">
            <div className="vp-video-wrapper">
              <div className="vp-video">
                <VideoPlayer {...this.state.options} />
              </div>
            </div>
            <div className="vp-details-wrapper">
              <div className="vp-title">{this.state.show.name}</div>
              <span id="vp-favorite" className="vp-favorite material-symbols-outlined" onClick={this.favorite}>favorite</span>
              <div className="vp-episode">{`Episode: ${this.state.episode}`}</div>
            </div>
            <div className="vp-comments-wrapper">
              <div className="vp-post-wrapper">
                <div className="vp-input-wrapper">
                  <textarea className="vp-comment-input"></textarea>
                </div>
                <div className="vp-control-wrapper">
                  <button className="vp-submit">sumbit</button>
                </div>
              </div>
              <center><div className="vp-break"></div></center>
              {/* <div className="vp-comment">
                <p className="vp-user" style="color: #e879f9;">steve</p>
                <p className="vp-timestamp">09-27-2022 | 01:02PM</p>
                <p className="vp-comment-data">this show is so mid it makes my head hurt</p>
              </div>
              <div className="vp-comment">
                <p className="vp-user" style="color: #2dd4bf;">paul</p>
                <p className="vp-timestamp">09-02-2022 | 11:53AM</p>
                <p className="vp-comment-data">i liked that a lot! i hope the main character isnt actually 💀 well maybe that would be okay... i didnt really like him anyway. at least i think its a him? never really seen the face LOL</p>
              </div>
              <div className="vp-comment">
                <p className="vp-user" style="color: #a78bfa;">rexx</p>
                <p className="vp-timestamp">9-27-2021 | 01:22PM</p>
                <p className="vp-comment-data">when is the next episode going to be out??</p>
              </div>
              <div className="vp-comment">
                <p className="vp-user" style="color: #facc15;">praxis</p>
                <p className="vp-timestamp">9-27-2022 | 01:02PM</p>
                <p className="vp-comment-data">watching that made me almost fall asleep! zzzzzzz</p>
              </div> */}
            </div>
          </div>
        </div>
      )
    }
  }
  //}
}

