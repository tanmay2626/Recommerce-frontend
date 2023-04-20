import styles from "@/styles/Home.module.scss";
import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          {" "}
          <Link href="/creative-scrapyar">
            <button className={styles.right}>Createive ScrapYar</button>
          </Link>
          <Divider orientation="vertical" flexItem sx={{ fontSize: 15 }}>
            OR
          </Divider>
          <Link href="/scrapyar">
            <button>ScrapYar</button>
          </Link>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
