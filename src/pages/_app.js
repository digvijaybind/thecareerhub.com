import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/globals.css";
import { useState } from "react";
import HtmlHeader from "../components/common/HtmlHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Script from "next/script";
const title = "CareerHub";
const description = "description";
export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        setOpen(false);
      }}
    >
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
          <Header open={open} setOpen={(val) => setOpen(val)} />
      <div style={{ minHeight: "1000px" }}>
        <Component {...pageProps} prop={true} />
      </div>
      <Footer />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
