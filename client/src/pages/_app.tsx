import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";



const client = new ApolloClient({
  uri: 'http://localhost:8888/graphql',
  cache: new InMemoryCache()
})


const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

export default function App({
  Component,
  pageProps
}
  : AppProps
) {
  return <ApolloProvider client={client} >
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </ThemeProvider>
  </ApolloProvider>

}
