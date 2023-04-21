import styles from "@/styles/Product.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Divider, Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Product = (props) => {
  return (
    <section className={styles.product_page}>
      <p>Home / Creative Scrapyar / Product</p>
      <section className={styles.product_view}>
        <div>
          <img
            src="https://apollo-singapore.akamaized.net/v1/files/jbzabmua2gl5-IN/image;s=780x0;q=60"
            alt="product-name"
          />
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
          <h1 className={styles.product_name}>
            MNC USED LAPTOP BRAND NEW CONDITION DELL / HP
          </h1>
          <h1 className={styles.product_tagline}>
            Look Like as Brand New Condition Certified Laptops - Fully working
            Big Qty Available
          </h1>
          <Divider />
          <h1 className={styles.product_price}>₹ 16,500</h1>
          <p className={styles.product_description}>
            MODEL NO - DELL LATITUDE E 5470 Configuration Details : - PROCESSOR
            - CORE I5 - 6TH GENERATION - 8 GB RAM ( Support 32 GB RAM ) - 256 GB
            SSD ( Support SSD/1 TB) - Graphics 4 GB - Intel HD - Webcam - Wifi -
            Orginal Adaptor / Charger - Gσσ∂ battery вα¢кυρ - Look like Brand
            New Condition - Win 10 Pro & Ms Office And All Basic Software's. --
            Ready to Use
          </p>
          <Divider />
          <div className={styles.product_checkout}>
            <div>
              <h1>Contact Seller</h1>
              <div className={styles.contact}>
                {" "}
                <div>
                  <h1>951*******</h1>
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
                  backgroundColor: "black",
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
                <td>HP</td>
              </tr>
              <tr>
                <td className={styles.specification}>Category</td>
                <td>Electronics</td>
              </tr>
              <tr>
                <td className={styles.specification}>Usage</td>
                <td>2 year old</td>
              </tr>
              <tr>
                <td className={styles.specification}>City</td>
                <td>Pimpri, Pune</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <Divider sx={{ mt: 2 }}>
        <h3>Related Products</h3>
      </Divider>
      <div>hlle</div>
    </section>
  );
};

export default Product;
