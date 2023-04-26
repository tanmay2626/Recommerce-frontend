import React, { useEffect, useState } from "react";
import styles from "@/styles/UserProfile.module.scss";
import { Button, Divider } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";

const Profile = (props) => {
  const router = useRouter();

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data.user.data);
        console.log(res.data.user.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEditClick = () => {
    router.push("/edit-profile");
  };

  const handleSignOut = () => {
    localStorage.clear();
    router.push("/");
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
      <section className={styles.profile}>
        <div className={styles.profile_header}>
          <div>
            <img src="/images/profile.gif" alt="profile" />
          </div>
          <div>
            <h1>{profile?.name}</h1>
            <div className={styles.profile_buttons}>
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
              <Button
                variant="contained"
                size="small"
                onClick={handleSignOut}
                sx={{
                  color: "white",
                  fontSize: 1 + "rem",
                  textTransform: "none",
                  backgroundColor: "#088395",
                }}
              >
                SignOut
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h3>
            @{profile?.username} &#8226; {profile?.email}
          </h3>
        </div>
        <div className={styles.address}>{profile?.address}</div>
        <h1>My Orders</h1>
        <Divider />
        <div className={styles.profile_section}>
          {profile?.orders && profile?.orders.length > 0 ? (
            profile?.orders.map((item, index) => {
              return (
                <div key={index} className={styles.orders}>
                  <div>
                    <h3>
                      <span>{item.productName} - </span>₹
                      {item.amount
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <span>Transaction ID:</span> {item.transactionId}{" "}
                    </h3>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No orders yet</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
