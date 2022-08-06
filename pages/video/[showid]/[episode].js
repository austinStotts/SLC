import { useRouter } from "next/router"
import VideoPlayer from "../VideoPlayer"

export default function Player () {
    const router = useRouter()
    console.log(router.query)
    let episode = router.query.episode;
    if(episode.length == 1) {
      episode = `0${episode}`
    }

    let videoJsOptions = {
        autoplay: true,
        controls: true,
        sources: [{
          src: `https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/${router.query.showid}/episodes/${episode}/video.mp4`,
          type: 'video/mp4'
        }]
      }

    
    return (
      <div className='video-wrapper'>
        <VideoPlayer {...videoJsOptions}/>
      </div>
    );
}