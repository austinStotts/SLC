export default function searchList (props) {
    console.log(props)
    if(Array.isArray(props.list)) {
        console.log("TRUE")
        if(props.list == []) {
            return (<></>)
        } else if (props.list.length > 0) {
            return (<div className="search-list-wrapper">{props.list.map((s, i) => {
                console.log("MAP")
                let show = JSON.parse(s.showjson);
                return (<p className="search-item" key={i} onClick={() => {props.ts(show.showid)}}>{show.name}</p>)
            })}</div>)
        } else {
            return (<div className="nothing-here-wrapper">{`:(`}</div>)
        }
    } else {
        return (<></>);
    }
}