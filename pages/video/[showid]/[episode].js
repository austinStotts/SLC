import { useRouter } from "next/router";
import { useEffect } from "react";
import VideoLayer from "./videoLayer"

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Player () {
  // let router = useRouter()
  // let showid = "";
  // let episode = "";
  // useEffect(()=>{
  //   if(!router.isReady) return;

  //   console.log("router READY")
  //   showid = router.query.showid;
  //   episode = router.query.episode;
  //   console.log(showid, episode);
  //   }, [router.isReady]);

  // //if (episode.length == 1) {episode = `0${episode}`};

  return (
    <div className="video-main-wrapper">
      <Header ss="video-page"/>
      <div className="video-sep">
        <VideoLayer/>
      </div>      
      <Footer /> 
    </div>
    )
}