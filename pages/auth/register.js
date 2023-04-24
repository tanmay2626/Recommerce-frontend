import React, { useState } from "react";
import styles from "@/styles/Auth.module.scss";
import { Button } from "@mui/material";
import GoogleAuth from "@/components/common/GoogleAuth";
import Header from "@/components/layout/Header";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const Register = (props) => {
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

  const Register = (e) => {
    e.preventDefault();
    const email = credentials.email;
    const password = credentials.password;

    axios
      .post(`http://localhost:8080/api/user/register`, {
        email,
        password,
      })
      .then((res) => {
        router.push("/auth/login");
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
          <span>Register</span>
          <div className={styles.signin_form}>
            <form className={styles.form_wrap}>
              <label>Email</label>
              <br />
              <input name="email" type="email" onChange={handleChange} />
              <br />
              <label>Password</label>
              <br />
              <input name="password" type="password" onChange={handleChange} />
              {error && (
                <div className="error">
                  <p>{error}</p>
                </div>
              )}
              <Button
                onClick={Register}
                variant="contained"
                size="large"
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
    </>
  );
};

export default Register;

Register.getLayout = function PageLayout(page) {
  return (
    <>
      <Head>
        <script src="https://accounts.google.com/gsi/client"></script>
      </Head>
      {page}
    </>
  );
};
