


const Show = ({ show }) => {
  if(show) {
    return (
      <div className={"show-wrapper"}>
        <div className="show-title">{show.name}</div>
        <div className="show-studio">{show.studio}</div>
        <div className="show-year">{show.year}</div>
        <img src={show.promo} className="show-promo"></img>
      </div>
    )
  } else {
    return (<div>no show</div>)
  }
}

Show.displayName = "Show";
export default Show;