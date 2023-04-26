import "@/styles/globals.scss";
import Head from "next/head";
import { StateProvider } from "@/libs/StateProvider";
import reducer, { initialState } from "@/libs/reducer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}
