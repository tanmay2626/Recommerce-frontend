import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.scss";
import Head from "next/head";
import { StateProvider } from "@/libs/StateProvider";
import reducer, { initialState } from "@/libs/reducer";

export default function App({ Component, pageProps }) {
  const currComp = Component.getLayout;
  if (currComp) {
    return currComp(
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    );
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
