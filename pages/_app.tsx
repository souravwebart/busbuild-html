import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../Components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Busibud Html Assignment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <Navbar />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
