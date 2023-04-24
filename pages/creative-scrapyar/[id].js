import styles from "@/styles/Product.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Divider, Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProductCard from "@/components/Card/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
const Product = (props) => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getCreativeScrapyar/${id}`)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className={styles.product_page}>
      <p>Home / Creative Scrapyar / Product</p>
      <section className={styles.product_view}>
        <div>
          <img src={product?.image} alt="product-name" />
          <IconButton
            aria-label="delete"
            sx={{
              position: "absolute",
              color: "#05BFDB",
              backgroundColor: "gray",
              marginBottom: 4,
              bottom: "0",
              right: "0",
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </div>
        <div>
          <h1 className={styles.product_name}>{product?.title}</h1>
          <h1 className={styles.product_tagline}>{product?.tagline}</h1>
          <Divider />
          <h1 className={styles.product_price}>₹ {product?.price}</h1>
          <p className={styles.product_description}>{product?.description}</p>
          <Divider />
          <div className={styles.product_checkout}>
            <div>
              <h1>Contact Seller</h1>
              <div className={styles.contact}>
                {" "}
                <div>
                  <h1>{product?.contact}</h1>
                </div>
                <div>
                  {" "}
                  <IconButton
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
              <h1>Get Delivery with ScrapYar</h1>
              <Button
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
                <td>{product?.contact}</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <Divider sx={{ mt: 2 }}>
        <h3>Related Products</h3>
      </Divider>
      <div className={styles.related}>
        <p>No related products yet</p>
      </div>
    </section>
  );
};

export default Product;

Product.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};
