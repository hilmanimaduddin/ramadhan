import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { ComponentType } from "react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Madimi One, sans-serif",
    heading: "Georgia, serif",
  },
});

function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType;
  pageProps: any;
}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
