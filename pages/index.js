import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ShowItem from "./components/showitem";
import Header from "./components/header";

import shows from "./map.json"


export default function Home() {
  return (
    <div>
      <Header />

      <div className="shows-wrapper">
        {shows.shows.map((show) => {
          if(show.name) {
            return (
              <ShowItem show={show} key={show.name}/>
            )
          } else {
            return
          }
        })}
      </div>
    </div>
  )
}
