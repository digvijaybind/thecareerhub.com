import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/globals.css";
import { useState } from "react";
import HtmlHeader from "../components/common/HtmlHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const title = "CareerHub";
const description = "description";
export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [open,setOpen]=useState(false);
  
  return (
    <div onClick={(e)=>{
      // e.preventDefault();
      // e.stopPropagation();
     setOpen(false);
   }}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <HtmlHeader title={title} description={description} />
      <Header open={open} setOpen={(val)=>setOpen(val)}/>
      <div style={{minHeight:"1000px"}}>
      <Component {...pageProps} prop={true} /></div>
      <Footer />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
