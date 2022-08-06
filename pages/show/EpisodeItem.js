import { useRouter } from "next/router"

export default function EpisodeItem (props) {
    const router = useRouter()
    return (
        <div className="episode-item-wrapper" key={props.i}>
            <p className="episode-button" onClick={() => {router.push(`/video/${props.showid}/${props.episode}`)}}>{`Episode: ${props.episode}`}</p>
        </div>
    )
}  