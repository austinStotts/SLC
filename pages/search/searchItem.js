export default function SearchItem (props) {
    try{
    return (
        <ul className="search-item-wrapper" onClick={() => props.ts(props.show.showid)}>
            <a><li>
                <img className="search-img" src={props.show.promo}></img>
            </li></a>
            <a><li>
                <div className="search-detail-wrapper">
                    <p className={`search-item-details search-name ${props.show.name.length > 20 ? "long" : ""}`}>{props.show.name}</p>
                    <p className="search-item-details search-native">{props.show.native}</p>
                    <p className="search-item-details search-studio">{props.show.studio}</p>
                </div>
            </li></a>
        </ul>
    )
    } catch {
        return <></>
    }
}