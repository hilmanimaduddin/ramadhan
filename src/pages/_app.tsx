import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { ComponentType } from "react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType;
  pageProps: any;
}) {
  return (
    <ChakraProvider>
      <Head>
        <title>Ramadhan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
