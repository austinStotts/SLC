import EpisodeItem from "./EpisodeItem";

export default function EpisodeList (props) {
  let e = [];
  try {
    e = [...Array(parseInt(props.showobj.episodes)).keys()];
  } catch {
    e = [];
  } 
  return (
    <div className="episode-list-wrapper">
      {e.map((episode, i) => {
        return (<EpisodeItem episode={i+1} showid={props.showobj.showid} key={i}/>)
      })}
    </div>
  )
}