import React, { useState } from "react";
import styles from "@/styles/Auth.module.scss";
import { Button } from "@mui/material";
import Header from "@/components/layout/Header";
import axios from "axios";
import { useRouter } from "next/router";

const Edit = (props) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    mobile: 0,
    address: "",
    city: "",
    pincode: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateProfile = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .put("http://localhost:8080/api/user/updateUser", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        router.push("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
    }
  });
  return (
    <>
      <Header />
      <section className={styles.signin}>
        <div className={styles.signin_box}>
          <div className={styles.signin_form}>
            <form className={styles.form_wrap}>
              <label>Username</label>
              <br />
              <input onChange={handleChange} name="username" type="text" />
              <br />
              <label>Name</label>
              <br />
              <input onChange={handleChange} name="name" type="text" />
              <label>Mobile Number</label>
              <br />
              <input onChange={handleChange} name="mobile" type="tel" />
              <br />
              <label>Address</label>
              <br />
              <textarea onChange={handleChange} name="address"></textarea>
              <div className={styles.address_details}>
                <div>
                  <label>City</label>
                  <br />
                  <input onChange={handleChange} name="city" type="text" />
                </div>
                <div>
                  <label>Pin Code</label>
                  <br />
                  <input onChange={handleChange} name="pincode" type="tel" />
                </div>
              </div>
              {error && (
                <div className="error">
                  <p>{error}</p>
                </div>
              )}
              {(!userData.username ||
                !userData.mobile ||
                !userData.name ||
                !userData.address ||
                !userData.city ||
                !userData.pincode) && (
                <div className="error">
                  <p>Please fill all required fields</p>
                </div>
              )}
              <Button
                variant="contained"
                size="large"
                onClick={updateProfile}
                disabled={
                  !userData.username ||
                  !userData.mobile ||
                  !userData.name ||
                  !userData.address ||
                  !userData.city ||
                  !userData.pincode
                }
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
    </>
  );
};

export default Edit;
