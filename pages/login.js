import React from "react";
import styles from "@/styles/Auth.module.scss";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import GoogleAuth from "@/components/common/GoogleAuth";

const Login = (props) => {
  return (
    <section className={styles.signin}>
      <div className={styles.signin_box}>
        <span>Login</span>
        <div className={styles.signin_form}>
          <form className={styles.form_wrap}>
            <label>Email</label>
            <br />
            <input name="email" type="email" />
            <br />
            <label>Password</label>
            <br />
            <input name="password" type="password" />
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                color: "white",
                fontSize: 1 + "rem",
                textTransform: "none",
                width: 310 + "px",
                mt: 2,
                backgroundColor: "black",
                ":hover": { backgroundColor: "black" },
              }}
            >
              Submit
            </Button>
          </form>
          <p>OR</p>
          <GoogleAuth />
        </div>
        <Divider sx={{ marginTop: 2, fontSize: 0.9 + "rem", color: "gray" }}>
          New to ScrapYar?
        </Divider>
        <Link className={styles.link} href="/register">
          <Button
            variant="contained"
            size="large"
            sx={{
              color: "black",
              textTransform: "none",
              width: 100 + "%",
              backgroundColor: "#EEEEEE",
              marginTop: 2,
              ":hover": { backgroundColor: "#EFEFEF" },
            }}
          >
            Create your ScrapYar account
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
