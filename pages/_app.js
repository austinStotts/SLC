import React from 'react'
import Head from 'next/head'
import styles from '../styles/shows.css'
import pagestyles from '../styles/showpage.css'
import headerstyle from '../styles/header.css'
import playerstyle from '../styles/player.css'
import aboutStyles from '../styles/about.css'
import video from '../styles/video.css'

let kawaii = ['(^=◕ᴥ◕=^)', '(* ^ ω ^)', '(─‿‿─)', '(っ˘ω˘ς )', '(¬‿¬ )', '(ｏ・_・)ノ”(ノ_<、)', '(」°ロ°)」', '(＞﹏＜)', '( ` ω ´ )', '.･ﾟﾟ･(／ω＼)･ﾟﾟ･.', '┐(‘～` )┌', 'ᕕ( ᐛ )ᕗ'];


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`SLC . ${kawaii[Math.floor(Math.random() * kawaii.length)]}`}</title>
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
