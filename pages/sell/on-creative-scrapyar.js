import React, { useState, useEffect } from "react";
import styles from "@/styles/Sell.module.scss";
import { Button } from "@mui/material";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OnCreativeScrapYar = (props) => {
  return (
    <section className={styles.sell}>
      <h2>Sell with Creative-ScrapYar!</h2>
      <form>
        <div className={styles.form_group}>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>

        <div className={styles.form_group}>
          <div className={styles.input_group}>
            <label for="brand">Brand:</label>
            <input type="text" id="brand" name="brand" required />
          </div>
          <div className={styles.input_group}>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" required />
          </div>
        </div>

        <div className={styles.form_group}>
          <div className={styles.input_group}>
            <label for="category">Category:</label>
            <select id="category" name="category" required>
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <div className={styles.input_group}>
            <label for="usage">Usage:</label>
            <input type="text" id="usage" name="usage" required />
          </div>
        </div>

        <div className={styles.form_group}>
          <label for="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>

        <div className={styles.form_group}>
          <label for="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
          />
        </div>

        <Button
          variant="contained"
          size="large"
          type="submit"
          sx={{
            color: "white",
            fontSize: 1 + "rem",
            textTransform: "none",
            backgroundColor: "#088395",
          }}
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default OnCreativeScrapYar;

OnCreativeScrapYar.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};
