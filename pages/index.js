import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Header from "./components/header";
import Footer from './components/footer';
import HomeList from './home/homeList';

const searchHandler = () => {
  console.log("SEARCHING");
}
 
export default function Home() {
  return (
    <div className='ultra-wrapper'>
      <Header showsearch={true} searchHandler={searchHandler}/>
      <HomeList />

      <Footer />
    </div>
    
  )
}
