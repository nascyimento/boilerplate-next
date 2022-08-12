import { Component } from "react";
import "../styles/globals.css";

type MyAppProps = {
   Component: new () => Component<any, any>;
   pageProps: object;
};

function MyApp({ Component, pageProps }: MyAppProps) {
   return <Component {...pageProps} />;
}

export default MyApp;
