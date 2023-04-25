import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import axios from "axios";
import { useStateValue } from "@/libs/StateProvider";
import styles from "@/styles/Auth.module.scss";

const Payment = ({ setIsSuccess }) => {
  const [{ product }] = useStateValue();

  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `http://localhost:8080/api/payment/secret?amount=${
          product.price * 100
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setClientSecret(res.data);
      });
  }, [product.price]);

  const handlePayment = async () => {
    const token = localStorage.getItem("token");
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const successfulTransaction = {
          transactionId: paymentIntent.id,
          status: paymentIntent.status,
          amount: paymentIntent.amount,
          paymentMethod: paymentIntent.payment_method_types[0],
          productId: product._id,
          productName: product.title,
        };
        if (paymentIntent.status === "succeeded") {
          axios
            .post(
              `http://localhost:8080/api/payment/create`,
              { successfulTransaction },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => {
              setIsSuccess(true);
            });
        } else {
          setError("Payment Failed");
        }
      });
  };

  return (
    <>
      <CardElement />
      {error && <p className={styles.error}>{error}</p>}
      <Button
        onClick={handlePayment}
        variant="contained"
        size="small"
        sx={{
          color: "white",
          fontSize: 1 + "rem",
          textTransform: "none",
          mt: 4,
          backgroundColor: "#088395",
        }}
      >
        Pay
      </Button>
    </>
  );
};

export default Payment;
