import React from "react";
import styles from "./Layout.module.scss";
import Search from "../common/Search";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="banner" />
      </div>
      <div className={styles.buttons}>
        <Search />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
