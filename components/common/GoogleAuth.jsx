import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useState, useEffect } from "react";

const clientId =
  "73911737589-pet5993a7ellig1aikd1ljlf65ecdopf.apps.googleusercontent.com";
const scopes = "https://www.googleapis.com/auth/userinfo.profile";

function GoogleAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
      gapi.load("auth2", () => {
        gapi.auth2.init({
          client_id: clientId,
          scope: scopes,
        });
      });
    };
    document.body.appendChild(script);
  }, []);

  const handleLoginClick = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        setIsAuthenticated(true);
      });
  };

  const handleLogoutClick = () => {
    gapi.auth2
      .getAuthInstance()
      .signOut()
      .then(() => {
        setIsAuthenticated(false);
      });
  };

  const getUserProfile = async () => {
    const user = gapi.auth2.getAuthInstance().currentUser.get();
    const idToken = user.getAuthResponse().id_token;

    const userEndpoint = "https://www.googleapis.com/userinfo/v2/me";

    const response = await fetch(userEndpoint, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    const userData = await response.json();

    console.log(userData);
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <Button
          variant="contained"
          size="large"
          sx={{
            color: "white",
            fontSize: 1 + "rem",
            textTransform: "none",
            backgroundColor: "#088395",
          }}
          startIcon={<GoogleIcon />}
        >
          Signin With Google
        </Button>
      )}
    </div>
  );
}

export default GoogleAuth;
