import { useRouter } from "next/router";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  const handleEllipses = (word) => {
    if (word?.length > 30) {
      return word.slice(0, 30) + "...";
    } else {
      return word;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img src={props?.img} alt={props?.title} />
        <div className={styles.overlay}>
          <div className={styles.name}>{handleEllipses(props?.title)}</div>
          <div class={styles.price}>
            ₹ {props.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
