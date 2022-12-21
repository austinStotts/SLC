import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';



const ShowItem = ({ show }) => {
  const router = useRouter();
  const toShowPage = () => {
    router.push(`/show/${show.showid}`);
  }


  // console.log(show);
  if(show) {
    return (
      <div key={show.key} className="show-wrapper" onClick={toShowPage}>
        <img src={show.promo} className="show-promo"></img>
        <div className="show-info">
          <div className="show-title">{show.name}</div>
          <div className="show-studio" style={show.studio.length < 12 ? {} :{marginLeft: 15, bottom: 6, fontSize: 15}}>{show.studio}</div>
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