import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const currComp = Component.getLayout;
  if (currComp) {
    return currComp(<Component {...pageProps} />);
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
