import React from "react";
import styles from "./Layout.module.scss";
import Search from "../common/Search";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();

  console.log(router.asPath);

  const logo = router.asPath === "/scrapyar" ? "logo" : "creative logo";
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {router.asPath === "/scrapyar" ? (
          <img src="/images/logo.svg" alt="logo" className={styles.scrapyar} />
        ) : (
          <img src="/images/creative logo.svg" alt="logo" />
        )}
      </div>
      <div className={styles.buttons}>
        <Search />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
