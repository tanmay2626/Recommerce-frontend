import React from "react";
import styles from "@/styles/Auth.module.scss";
import { Container } from "@mui/material";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import GoogleAuth from "@/components/common/GoogleAuth";
import Head from "next/head";

const Login = (props) => {
  //   const navigate = useNavigate();
  //   const [credentials, setCredentials] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const [error, setError] = useState({
  //     status: true,
  //     message: "",
  //   });

  //   const HandleCredentials = (e) => {
  //     const { value, name } = e.target;

  //     setCredentials((prev) => {
  //       return {
  //         ...prev,
  //         [name]: value,
  //       };
  //     });
  //   };

  //   const HandleSubmit = (e) => {
  //     e.preventDefault();

  //     const email = credentials.email;
  //     const password = credentials.password;

  //     axios.post("http://localhost:8000/login", { email, password }).then((res) => {
  //       if (!res.data.status) {
  //         setError({
  //           status: res.data.status,
  //           message: res.data.message,
  //         });
  //       } else {
  //         dispatch({
  //           type: "SET_USER",
  //           item: res.data.user,
  //         });
  //         localStorage.setItem("AUTH_TOKEN" , JSON.stringify(res.data.user));
  //         navigate("/");
  //       }
  //     });
  //   };
  //

  return (
    <Container className={styles.signin}>
      <div className={styles.signin_box}>
        <div className={styles.signin_form}>
          <span>Login</span>
          <div className={styles.form_wrap}>
            <form>
              <label>Email</label>
              <br />
              <input name="email" type="email" />
              <br />
              <label>Password</label>
              <br />
              <input name="password" type="password" />
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  color: "white",
                  textTransform: "none",
                  width: 100 + "%",
                  backgroundColor: "#205E61",
                  marginTop: 2,
                  ":hover": { backgroundColor: "#205E61" },
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <Divider sx={{ marginTop: 2, fontSize: 2, color: "gray" }}>
          New to ScrapYar?
        </Divider>
        <GoogleAuth />
        <Link className={styles.link} href="/register">
          <Button
            variant="contained"
            size="small"
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
    </Container>
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
