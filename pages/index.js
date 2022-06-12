import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Show from "./components/show";
import Header from "./components/header";

import shows from "./map.json"


export default function Home() {
  return (
    <div>
      <Header />

      <div className="shows-wrapper">
        {shows.shows.map((show) => {
          return (
            <Show show={show} key={show.name}/>
          )
        })}
      </div>
    </div>
  )
}
