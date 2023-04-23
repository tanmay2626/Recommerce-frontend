import React, { useEffect, useState } from "react";
import styles from "@/styles/UserProfile.module.scss";
import { Divider } from "@mui/material";
import axios from "axios";

const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/user/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data.user.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className={styles.profile}>
      <img src="/images/profile.gif" alt="profile" />
      <div className={styles.details}>
        <h3>
          @{profile.username} &#8226; {profile.email}
        </h3>
      </div>
      <div className={styles.address}>{profile.address}</div>
      <h1>My views</h1>
      <Divider />
      <div className={styles.profile_section}>No Views yet</div>
      <h1>My Products</h1>
      <Divider />
      <div className={styles.profile_section}>No Products yet</div>
    </section>
  );
};

export default Profile;
