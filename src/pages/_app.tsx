import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/globals.css';
import { useState } from "react";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [open,setOpen]=useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        <Component {...pageProps} 
        prop={true}
        // onClick={(e)=>{debugger;console.log(e)}}
        />
    
        </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};