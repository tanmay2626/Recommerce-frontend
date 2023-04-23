import React, { useState } from "react";
import styles from "@/styles/Feed.module.scss";
import NativeSelect from "@mui/material/NativeSelect";
import ProductCard from "@/components/Card/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Divider, IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const CreativeScrapyar = (props) => {
  const categories = [
    "Painting",
    "Home Decor",
    "Jwelleries",
    "Arts",
    "Accessories",
    "LifeStyle-Men",
    "LifeStyle-Women",
    "Other",
  ];
  const [selected, setSelected] = useState("");

  function handleCategory(value) {
    if (value === selected) {
      setSelected("");
      console.log("Heading deselected:", value);
    } else {
      setSelected(value);
      console.log("Heading selected:", value);
    }
  }

  return (
    <section className={styles.feeds_page}>
      <p>Landing Page / Scrapyar</p>
      <img src="/images/Creative Banner.png" alt="banner" />
      <div className={styles.feed_headline}>
        <div>
          <h1>Fresh recommendations</h1>
        </div>
        <div>
          <NativeSelect
            className="native-select"
            inputProps={{
              name: "",
              id: "uncontrolled-native",
              sx: {
                fontWeight: 500,
                fontSize: 20,
              },
            }}
            disableUnderline
          >
            <option value="relevance">Sort By : Relevance</option>
            <option value="Latest">Latest</option>
            <option value="Old">Old</option>
          </NativeSelect>
        </div>
      </div>
      <section className={styles.feed}>
        <div className={styles.filter}>
          <h1>Filters</h1>
          <div>
            <h2>By Categpory : </h2>
            <Divider />
            <div className={styles.categories}>
              {categories.map((heading) => (
                <h3
                  key={heading}
                  onClick={() => handleCategory(heading)}
                  style={{ color: heading === selected ? "black" : "gray" }}
                >
                  {heading}
                </h3>
              ))}
            </div>
          </div>
          <div>
            <h2>By Price : </h2>
            <Divider />
            <input type="range" id="range" min="-" max="100000000" />
            <div className={styles.range}>
              <div>
                <label for="range">0</label>
              </div>
              <div>
                <label for="range">20 Lakh</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product_list}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <div className={styles.sell}>
        <IconButton sx={{ bgcolor: "#088395", p: 2 }}>
          <AddAPhotoIcon sx={{ color: "white", fontSize: 25 }} />
        </IconButton>
      </div>
    </section>
  );
};

export default CreativeScrapyar;

CreativeScrapyar.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};
