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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;