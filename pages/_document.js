import { Html, Head, Main, NextScript } from 'next/document'
let kawaii = ['(* ^ ω ^)', '(─‿‿─)', '(っ˘ω˘ς )', '(¬‿¬ )', '(ｏ・_・)ノ”(ノ_<、)', '(」°ロ°)」', '(＞﹏＜)', '( ` ω ´ )', '.･ﾟﾟ･(／ω＼)･ﾟﾟ･.'];
export default function doc() { 
  return (
    <Html>
      <Head>
        <title>{`SLC ${kawaii[Math.floor(Math.random() * kawaii.length)]}`}</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

