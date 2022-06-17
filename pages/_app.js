import React from 'react'
import Head from 'next/head'
import styles from '../styles/shows.css'
import pagestyles from '../styles/showpage.css'

let kawaii = ['(^=◕ᴥ◕=^)', '(* ^ ω ^)', '(─‿‿─)', '(っ˘ω˘ς )', '(¬‿¬ )', '(ｏ・_・)ノ”(ノ_<、)', '(」°ロ°)」', '(＞﹏＜)', '( ` ω ´ )', '.･ﾟﾟ･(／ω＼)･ﾟﾟ･.', '┐(‘～` )┌', 'ᕕ( ᐛ )ᕗ'];


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`SLC ${kawaii[Math.floor(Math.random() * kawaii.length)]}`}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
