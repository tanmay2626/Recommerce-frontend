import React, { useState } from "react";
import styles from "@/styles/Auth.module.scss";
import { Button } from "@mui/material";
import Header from "@/components/layout/Header";
import axios from "axios";

const Edit = (props) => {
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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
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
            <Button
              variant="contained"
              size="large"
              onClick={updateProfile}
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

export default Edit;

Edit.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
