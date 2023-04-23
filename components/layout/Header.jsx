import React, { useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import Search from "../common/Search";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Header = ({ current }) => {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/auth/login");
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {current === "creative" ? (
          <img src="/images/creative logo.svg" alt="logo" />
        ) : (
          <img src="/images/logo.svg" alt="logo" className={styles.scrapyar} />
        )}
      </div>
      <div className={styles.features}>
        <Search />
        <div className={styles.login__button}>
          <Button
            onClick={redirectToLogin}
            variant="contained"
            size="large"
            type="submit"
            sx={{
              color: "white",
              fontSize: 1 + "rem",
              textTransform: "none",
              bgcolor: "#088395",
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
