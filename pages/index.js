import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          {" "}
          <Link href="/scrapyar">
            <button>ScrapYar</button>
          </Link>
          <Link href="/creative-scrapyar">
            <button className={styles.right}>Createive ScrapYar</button>
          </Link>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
