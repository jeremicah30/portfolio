import "../styles/main.scss";
import { Layout } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
