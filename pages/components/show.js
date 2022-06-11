

export default function Show({ show, key }) {
  console.log(show.name)
  return (
    <div key={key} className={"show-wrapper"} key={show.name}>
      <div className="show-title">{show.name}</div>
      <div className="show-studio">{show.studio}</div>
      <div className="show-year">{show.year}</div>
      <img src={show.promo} className="show-promo"></img>
    </div>
  )
}