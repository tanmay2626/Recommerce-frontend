import Header from "@/components/layout/Header";
import styles from "@/styles/Home.module.scss";
import { Divider } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.landing}>
          <div className={styles.graphics}>
            <img src="/images/graphics.png" alt="landing-screen" />
          </div>
          <div className={styles.heading}>
            <h2>Hi There!</h2>
            <h1>Start your journey with...</h1>
            <Link href="/creative-scrapyar">
              <button className={styles.right}>Creative ScrapYar</button>
            </Link>
            <Divider orientation="vertical" flexItem sx={{ fontSize: 15 }}>
              OR
            </Divider>
            <Link href="/scrapyar">
              <button>ScrapYar</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
