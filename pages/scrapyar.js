import React from "react";
import styles from "@/styles/Feed.module.scss";

const Scrapyar = (props) => {
  return (
    <section className={styles.feeds_page}>
      <p>Landing Page / Scrapyar</p>
      <img src="/images/banner.png" alt="banner" />
      <h1>Fresh recommendations</h1>
      <section className={styles.feed}></section>
    </section>
  );
};

export default Scrapyar;
