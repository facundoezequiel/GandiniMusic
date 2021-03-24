import '../styles/globals.css'
import React from "react";
import Head from "next/head";
import GlobalStyles from "../constants/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gandini Music</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;