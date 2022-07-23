import { useRouter } from 'next/router';



const ShowItem = ({ show }) => {
  const router = useRouter();
  const toShowPage = () => {
    router.push(`/show/${show.showid}`);
  }
  console.log(show);
  if(show) {
    return (
      <div className="show-wrapper" onClick={toShowPage}>
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