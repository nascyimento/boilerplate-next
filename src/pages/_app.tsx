import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global";

function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Boilerplate - Next</title>
            <meta
               name="description"
               content="Boilerplate to work with TypeScript, React, NextJS and Styled Components"
            />
            <meta name="author" content="Eduardo Melo" />
            <link rel="shortcut icon" href="/assets/icon-512.png" />
            <link rel="apple-touch-icon" href="/assets/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
         </Head>
         <GlobalStyles />
         <Component {...pageProps} />
      </>
   );
}

export default App;
