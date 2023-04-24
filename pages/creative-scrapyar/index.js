import React, { useEffect, useState } from "react";
import styles from "@/styles/Feed.module.scss";
import NativeSelect from "@mui/material/NativeSelect";
import ProductCard from "@/components/Card/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Divider, IconButton, Button } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useStateValue } from "@/libs/StateProvider";

const CreativeScrapyar = (props) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [{ category, maxRange, search }, dispatch] = useStateValue();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState(2000000);
  const [selected, setSelected] = useState(null);
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

  function handleCategory(value) {
    if (value === selected) {
      setSelected(null);
    } else {
      setSelected(value);
    }
  }

  const handleRange = (e) => {
    setRange(e.target.value);
  };

  const Apply = () => {
    dispatch({
      type: "SET_CATEGORY",
      item: selected,
    });
    dispatch({
      type: "SET_RANGE",
      item: range,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getCreativeScrapyar")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let newFilteredProducts = products;
    if (search) {
      newFilteredProducts = products.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    }
    if (maxRange && maxRange !== null) {
      newFilteredProducts = newFilteredProducts.filter((item) => {
        return item.price <= parseInt(maxRange);
      });
    }
    if (category && category !== null) {
      newFilteredProducts = newFilteredProducts.filter((item) => {
        return item.category === category;
      });
    }
    setFilteredProducts(newFilteredProducts);
  }, [maxRange, category, search, products]);

  return (
    <>
      <Header />
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
              <h2>By MaxPrice : </h2>
              <Divider />
              <input
                onChange={handleRange}
                type="range"
                id="range"
                min="-"
                max="2000000"
                value={range}
              />
              <div className={styles.range}>
                <div>{range}</div>
              </div>
            </div>
            <Button
              onClick={Apply}
              variant="contained"
              size="medium"
              sx={{
                color: "white",
                fontSize: 1 + "rem",
                textTransform: "none",
                backgroundColor: "#088395",
                mt: 2,
              }}
            >
              Apply
            </Button>
          </div>
          <div className={styles.product_list}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(`/creative-scrapyar/${product._id}`);
                    }}
                  >
                    <ProductCard
                      id={product._id}
                      title={product.title}
                      price={product.price}
                      img={product.image}
                    />
                  </div>
                );
              })
            ) : (
              <h2>No products found</h2>
            )}
          </div>
        </section>
        <div className={styles.sell}>
          <Link href="/sell/on-scrapyar">
            <IconButton sx={{ bgcolor: "#088395", p: 2 }}>
              <AddAPhotoIcon sx={{ color: "white", fontSize: 25 }} />
            </IconButton>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreativeScrapyar;
