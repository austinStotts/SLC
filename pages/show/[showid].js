import { useRouter } from 'next/router'
import Header from "../components/header";
import Footer from "../components/footer";
import ShowImage from './showImage';
import shows from "../map.json";
import Axios from "axios";
import { Component, useState } from 'react';

import ShowPage from "./showPage";



let show = 0;
export default function Show (props) {

  const router = useRouter();
  const showid = router.query.showid;

return (
  <ShowPage showid={showid}/>
)


}

//   const router = useRouter();
//   const showid = router.query.showid;

//   Axios.get(`/api/showinfo/${showid}`)
//   .then(data => {
//     console.log("got the stuff");
//     try {
//       show = JSON.parse(data.data.data.rows[0].showjson);
//     } catch (error) {

//     }
//   }).catch(err => {console.log(err)});

//   if(!show) {
//     return (<div>loading</div>)
//   } else {
//     return (
//       <div className='show-page-main-wrapper'>
//       <Header />
//         <div className='showpage-wrapper'>
//           <div className='sp-banner sp-banner-img' style={{backgroundImage: "url("+ show.banner + ")"}}></div>
//           <div className='sp-bellow-wrapper'>
//             <div className='show-details'>
//               <ShowImage url={show.promo}/>
//               <div className='text-deatails-wrapper'>
//                 <div className='text-item sp-title'>
//                 {show.name}
//                 </div>
//                 <div className='text-item sp-year'>
//                 {show.year}
//                 </div>
//                 <div className='text-item sp-studio'>
//                 {show.studio}
//                 </div>
//                 <div className='text-item'>
//                 </div>
//                 <div className='text-item'>
//                 </div>
//               </div>
//             </div>
//             <div className='episode-wrapper'>
//               <div className='episode-list'>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 01</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 02</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 03</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 04</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 05</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 06</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 07</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 08</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 09</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 10</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 11</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 12</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 13</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 14</div></div>
//                 <div className='episode-item-wrapper'><div className="episode">Episode 15</div></div>
//               </div>
//               <div className='extras-list'></div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     )
//   }
// }






// --- --- --- --- --- --- --- --- --- ---
const showdata =     {
  "name": "Bakemonogatari",
  "showid": "bakemonogatari",
  "url": "",
  "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/bakemonogatari/assets/promo.jpeg",
  "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/bakemonogatari/assets/banner.jpeg",
  "year": "2009",
  "studio": "Shaft",
  "episodes": [
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
    {
      "videoURL": "",
      "subtitleURL": ""
    },
  ]
}