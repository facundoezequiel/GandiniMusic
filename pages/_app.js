import '../styles/globals.css'
import React from "react";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gandini Music</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />   
        <meta property="og:site_name" content="Gandini Music"></meta>
        <meta property="og:title" content="Gandini Music"/>
        <meta property="og:url" content="https://www.gandinimusic.com/"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" itemprop="image" content="https://www.gandinimusic.com/Images/share.jpg"/>
        <meta property="og:image:secure_url" itemprop="image" content="https://www.gandinimusic.com/Images/share.jpg"/>
        <meta property="og:description" content="Gandini Music Web"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;