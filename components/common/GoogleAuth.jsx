import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useRouter } from "next/router";

function GoogleAuth() {
  const router = useRouter();
  const handleCallbackResponse = (res) => {
    const cred = jwt_decode(res.credential);
    const email = cred.email;
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/oauth/signin`, {
        email,
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
        console.log(error);
      });
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize(
      {
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse,
      },
      []
    );

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });

    const element = document.getElementsByClassName(
      "nsm7Bb-HzV7m-LgbsSe-Bz112c"
    )[0];
    element.style.display = "none";
  }, []);

  return (
    <div className="App">
      <button>
        <div id="signIn"></div>
      </button>
    </div>
  );
}

export default GoogleAuth;
