import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Header from "./components/header";
import Footer from './components/footer';
import HomeList from './home/homeList';
import { useRouter } from 'next/router';


 
export default function Home() {
  let router = useRouter();
  const searchHandler = () => {router.push("/search/shows")}

  return (
    <div className='ultra-wrapper'>
      <Header showsearch={true} searchHandler={searchHandler}/>
      <HomeList />

      <Footer />
    </div>
    
  )
}
