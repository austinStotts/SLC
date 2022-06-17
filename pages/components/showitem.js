


const ShowItem = ({ show }) => {
  if(show) {
    return (
      <div className={"show-wrapper"}>
        <img src={show.promo} className="show-promo"></img>
        <div className="show-info">
          <div className="show-title">{show.name}</div>
          <div className="show-studio">{show.studio}</div>
          <div className="show-year">{show.year}</div>
        </div>
      </div>
    )
  } else {
    return (<div>internal error</div>)
  }
}

ShowItem.displayName = "ShowItem";
export default ShowItem;