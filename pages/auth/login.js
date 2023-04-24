import React, { useEffect, useState } from "react";
import styles from "@/styles/Auth.module.scss";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import GoogleAuth from "@/components/common/GoogleAuth";
import Header from "@/components/layout/Header";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const Login = (props) => {
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  });

  const Login = (e) => {
    e.preventDefault();
    const email = credentials.email;
    const password = credentials.password;

    axios
      .post(`http://localhost:8080/api/user/signin`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        const user = res.data.user;
        if (!user.name || !user.mobile || !user.address) {
          router.push("/edit-profile");
        } else {
          router.push("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setError(error.response.data.message);
          console.log(error.response.data.message);
        } else {
          console.log(error);
        }
      });
  };
  return (
    <>
      <Header />
      <section className={styles.signin}>
        <div className={styles.signin_box}>
          <span>Login</span>
          <div className={styles.signin_form}>
            <form className={styles.form_wrap}>
              <label>Email</label>
              <br />
              <input onChange={handleChange} name="email" type="email" />
              <br />
              <label>Password</label>
              <br />
              <input onChange={handleChange} name="password" type="password" />
              {error && (
                <div className="error">
                  <p>{error}</p>
                </div>
              )}
              <Button
                onClick={Login}
                variant="contained"
                size="large"
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
            <p>OR</p>
            <GoogleAuth />
          </div>
          <Divider sx={{ marginTop: 2, fontSize: 0.9 + "rem", color: "gray" }}>
            New to ScrapYar?
          </Divider>
          <Link className={styles.link} href="/auth/register">
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
    </>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return (
    <>
      <Head>
        <script src="https://accounts.google.com/gsi/client"></script>
      </Head>
      {page}
    </>
  );
};
