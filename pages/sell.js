import React, { useState, useEffect } from "react";
import styles from "@/styles/Sell.module.scss";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

const Sell = (props) => {
  return (
    <Container className="sell">
      <div className="sell-box">
        <div className="sell-form">
          <span>Start Selling!</span>
          <div className="form-wrap">
            <form>
              <label>Title</label>
              <input name="title" type="text" required />
              <div className="brand-price">
                <div className="price">
                  <label>Price</label>
                  <input name="price" type="number" required />
                </div>
                <div className="brand">
                  <label>Brand</label>
                  <input
                    name="brand"
                    placeholder="eg. Apple"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="brand-price">
                <div className="brand">
                  <label>Category</label>
                  <br />
                  <select name="category" required>
                    <option value="Mobile">Mobile</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Cars">Cars</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </div>
                <div className="price">
                  <label>Usage</label>
                  <input
                    name="usage"
                    placeholder=" months / years / km"
                    type="text"
                    required
                  />
                </div>
              </div>
              <label>Description</label>
              <br />
              <textarea name="description" required />
              <label>Photo ( .jpg/ .jpeg/ .png )</label>
              <input type="file" accept="image/" name="img" />
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  color: "color",
                  textTransform: "none",
                  width: 100 + "%",
                  backgroundColor: "#205E61",
                  marginTop: 3,
                  ":hover": { backgroundColor: "#205E61" },
                }}
              >
                Upload
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sell;
