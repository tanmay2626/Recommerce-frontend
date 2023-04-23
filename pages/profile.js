import React, { useEffect, useState } from "react";
import styles from "@/styles/UserProfile.module.scss";
import { Button, Divider } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const Profile = (props) => {
  const router = useRouter();

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

  const handleEditClick = () => {
    router.push("/edit-profile");
  };
  return (
    <section className={styles.profile}>
      <div className={styles.profile_header}>
        <div>
          <img src="/images/profile.gif" alt="profile" />
        </div>
        <div>
          <h1>{profile?.name}</h1>
          <Button
            variant="contained"
            size="small"
            onClick={handleEditClick}
            sx={{
              color: "white",
              fontSize: 1 + "rem",
              textTransform: "none",
              backgroundColor: "#088395",
            }}
          >
            Edit
          </Button>
        </div>
      </div>
      <div className={styles.details}>
        <h3>
          @{profile?.username} &#8226; {profile?.email}
        </h3>
      </div>
      <div className={styles.address}>{profile?.address}</div>
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
