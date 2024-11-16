import React, { useEffect,useState} from "react";
import Top from "../layout/top";
import Bottom from "../layout/bottom";
// import noInternet from 'no-internet'
import { Nunito } from '@next/font/google';
import Head from "next/head";
const myNunito = Nunito({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to EMS</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon.ico" />
      </Head>
      
      {<><Top/><main className={myNunito.className}>{children}</main> <Bottom /></>}

    </>
  );
}
 