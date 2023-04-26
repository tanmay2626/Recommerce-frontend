import Payment from "@/components/common/Payment";
import Header from "@/components/layout/Header";
import { useStateValue } from "@/libs/StateProvider";
import styles from "@/styles/Checkout.module.scss";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Checkout = (props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [{ product }] = useStateValue();
  const router = useRouter();
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && product === null) {
      router.push("/");
    }
  });

  if (isSuccess) {
    return (
      <>
        <Header />
        <div className={styles.success}>
          {" "}
          <img src="/images/success.gif" alt="logo" />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className={styles.signin}>
        <div className={styles.signin_box}>
          <h1>Checkout</h1>
          <div className={styles.summary}>
            <h3>Summary</h3>
            <table className={styles.product_table}>
              <tbody>
                <tr>
                  <td className={styles.summary_label}>{product.title}</td>
                  <td>
                    ₹{" "}
                    {product.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                </tr>
                <tr>
                  <td className={styles.summary_label}>Delivery Charge</td>
                  <td>₹ 50</td>
                </tr>
                <tr style={{ borderTop: "1px solid gray" }}>
                  <td className={styles.summary_label}>Total</td>
                  <td>
                    ₹{" "}
                    {(product.price + 50)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.payment}>
            <h3>Payment</h3>
            <Elements stripe={stripePromise}>
              <Payment setIsSuccess={setIsSuccess} />
            </Elements>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
