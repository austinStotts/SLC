import SearchItem from "./searchItem";

export default function searchList (props) {
    if(Array.isArray(props.list)) {
        if(props.list == []) {
            return (<></>)
        } else if (props.list.length > 0) {
            return (<div className="search-list-wrapper">{props.list.map((s, i) => {
                let show = s;
                // return (<p className="search-item" key={i} onClick={() => {props.ts(show.showid)}}>{show.name}</p>)
                return (<SearchItem show={show} ts={props.ts} key={i}/>)
            })}</div>)
        } else {
            return (<div className="nothing-here-wrapper">{`:(`}</div>)
        }
    } else {
        return (<></>);
    }
}