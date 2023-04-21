import React from "react";
import styles from "@/styles/UserProfile.module.scss";
import { Divider } from "@mui/material";

const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <img src="/images/profile.gif" alt="profile" />
      <div className={styles.details}>
        <h3>@twaykar8 &#8226; tanmaywaykar17@gmail.com</h3>
      </div>
      <div className={styles.address}>
        Flat-46, Plot-71, Shri Samarth Housing Society, Near Mahabali Mandir,
        Shahunagar, Chinchwad, Pune, 411019
      </div>
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
