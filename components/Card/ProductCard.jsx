import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  const name = "MNC USED LAPTOP BRAND NEW CONDITION DELL / HP";
  const handleEllipses = (word) => {
    if (word.length > 30) {
      return word.slice(0, 30) + "...";
    } else {
      return word;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img
          src="https://apollo-singapore.akamaized.net/v1/files/jbzabmua2gl5-IN/image;s=780x0;q=60"
          alt="Image"
        />
        <div className={styles.overlay}>
          <div className={styles.name}>{handleEllipses(name)}</div>
          <div class={styles.price}>₹ 9.99</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
