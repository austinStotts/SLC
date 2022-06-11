

export default ({ show }) => {
  console.log(show.name)
  return (
    <div className={"show-wrapper"} key={show.name}>
      <div className="show-title">{show.name}</div>
      <div className="show-studio">{show.studio}</div>
      <div className="show-year">{show.year}</div>
      <img src={show.promo} className="show-promo"></img>
    </div>
  )
}