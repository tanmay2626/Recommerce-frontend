import React from "react";
import styles from "@/styles/Auth.module.scss";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import GoogleAuth from "@/components/common/GoogleAuth";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Register = (props) => {
  return (
    <section className={styles.signin}>
      <div className={styles.signin_box}>
        <span>Register</span>
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
                backgroundColor: "#088395",
                ":hover": { backgroundColor: "black" },
              }}
            >
              Submit
            </Button>
          </form>
          <p>OR</p>
          <GoogleAuth />
        </div>
      </div>
    </section>
  );
};

export default Register;

Register.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
