import React, { useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import Search from "../common/Search";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Header = () => {
  const [token, setToken] = useState(false);
  const [site, setSite] = useState(false);
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/auth/login");
  };

  const redirectToProfile = () => {
    router.push("/profile");
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("token")) {
      setToken(true);
    } else {
      setToken(false);
    }
    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem("current") === "creative") setSite(true);
    } else {
      setSite(false);
    }
  }, [token, site]);
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {site ? (
          <img
            onClick={() => {
              router.push("/creative-scrapyar");
            }}
            src="/images/creative logo.svg"
            alt="logo"
          />
        ) : (
          <img
            onClick={() => {
              router.push("/scrapyar");
            }}
            src="/images/logo.svg"
            alt="logo"
            className={styles.scrapyar}
          />
        )}
      </div>
      <div className={styles.features}>
        <Search />
        <div className={styles.login__button}>
          {token ? (
            <img
              onClick={redirectToProfile}
              className={styles.profile_img}
              src="/images/profile.gif"
              alt="profile"
            />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
