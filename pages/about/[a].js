import { useRouter } from 'next/router';

import Header from "../components/header";
import Footer from "../components/footer";


export default function About() {
  let router = useRouter();
  const searchHandler = () => {router.push("/search/shows")}

  return (
    <div className="about-wrapper">
      <Header showsearch={"true"} searchHandler={searchHandler}/>
      <div className="about-body">
        <p>{"Hello!"}</p>
        <p>{"I'm steve"}</p>
        <p>{"I love Cartoons"}</p>
        <p>{"This is a hobby project if mine not intended for use by anyone besides myself"}</p>
        <p>{"But since you are here... please have a look around"}</p>
        <p>{"Let me know what you think"}</p>
        <p>{"~steve"}</p>
      </div>
      <Footer/>
    </div>
  )
}