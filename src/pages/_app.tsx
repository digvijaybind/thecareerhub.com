import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from './createEmotionCache';
import DrawerAppBar from '@/libs/material-ui/components/header';
import '../styles/globals.css';
import { useState } from "react";
import ModalComp from '@/libs/material-ui/ModalComp/ModalComp';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [open,setOpen]=useState(false);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DrawerAppBar toggleModal={()=>setOpen(true)} />
        <Component {...pageProps} 
        prop={true}
        // onClick={(e)=>{debugger;console.log(e)}}
        />
    <ModalComp open={open} toggleModal={()=>setOpen(!open)}/>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};