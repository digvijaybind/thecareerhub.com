import Head from "next/head";
import Script from "next/script";
import HomePage from "./HomePage";
export default function Home() {

  return (
    <>
     
      <Head>
        <title>The Career Hub</title>
        <meta name="description" content="The Career Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     
      <HomePage />
      
    </>
  );
}
