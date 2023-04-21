import React from "react";
import styles from "@/styles/Auth.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Login = (props) => {
  return (
    <section className={styles.signin}>
      <div className={styles.signin_box}>
        <div className={styles.signin_form}>
          <form className={styles.form_wrap}>
            <label>Username</label>
            <br />
            <input name="username" type="text" />
            <br />
            <label>Name</label>
            <br />
            <input name="name" type="text" />
            <label for="description">Address</label>
            <br />
            <textarea id="description" name="description" required></textarea>
            <div className={styles.address_details}>
              <div>
                <label>City</label>
                <br />
                <input name="city" type="text" />
              </div>
              <div>
                <label>Pin Code</label>
                <br />
                <input name="pincode" type="text" />
              </div>
            </div>
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
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
