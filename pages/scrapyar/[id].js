import styles from "@/styles/Product.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Divider, Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useStateValue } from "@/libs/StateProvider";
const Product = (props) => {
  const [product, setProduct] = useState({});
  const [contactDetails, setContactDetails] = useState(false);
  const [{}, dispatch] = useStateValue();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/getScrapyar/${id}`)
        .then((res) => {
          setProduct(res.data.product);
          console.log(res.data.product);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const checkIfLogged = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setContactDetails(true);
      axios
        .put(`http://localhost:8080/api/user/updateViews`, id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Added to views");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please login to access seller details");
    }
  };

  const makePayment = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({
        type: "SET_PRODUCT",
        item: product,
      });
      router.push("/checkout");
    } else {
      alert("Please login to proceed!");
    }
  };
  return (
    <>
      <Header />
      <section className={styles.product_page}>
        <p>Home / Creative Scrapyar / {product.title}</p>
        <section className={styles.product_view}>
          <div>
            <img src={product?.image} alt="product-name" />
          </div>
          <div>
            <h1 className={styles.product_name}>{product?.title}</h1>
            <h1 className={styles.product_tagline}>{product?.tagline}</h1>
            <Divider />
            <h1 className={styles.product_price}>
              ₹{" "}
              {product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h1>
            <p className={styles.product_description}>{product?.description}</p>
            <Divider />
            <div className={styles.product_checkout}>
              <div>
                <h1>Contact {product.contact?.name}</h1>
                <div className={styles.contact}>
                  {" "}
                  <div>
                    {contactDetails ? (
                      <h1>{product.contact?.mobile}</h1>
                    ) : (
                      <h1>*********</h1>
                    )}
                  </div>
                  <div>
                    {" "}
                    <IconButton
                      onClick={checkIfLogged}
                      aria-label="delete"
                      sx={{
                        mt: 1.5,
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div>
                <h1>Get Delivery</h1>
                <Button
                  onClick={makePayment}
                  variant="contained"
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                  size="medium"
                  type="submit"
                  sx={{
                    fontSize: 1 + "rem",
                    textTransform: "none",
                    backgroundColor: "#088395",
                  }}
                >
                  Proceed to Pay
                </Button>
              </div>
            </div>
            <Divider />
            <div className={styles.product_details}>
              <table>
                <tbody>
                  <tr>
                    <td className={styles.specification}>Brand</td>
                    <td>{product?.brand}</td>
                  </tr>
                  <tr>
                    <td className={styles.specification}>Category</td>
                    <td>{product?.category}</td>
                  </tr>
                  <tr>
                    <td className={styles.specification}>Usage</td>
                    <td>{product?.usage}</td>
                  </tr>
                  <tr>
                    <td className={styles.specification}>City</td>
                    <td>{product?.contact?.city}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Product;
