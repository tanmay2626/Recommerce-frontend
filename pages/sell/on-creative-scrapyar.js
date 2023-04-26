import React, { useState, useEffect } from "react";
import styles from "@/styles/Sell.module.scss";
import { Button } from "@mui/material";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";
import axios from "axios";

const OnCreativeScrapYar = (props) => {
  const router = useRouter();
  const [uploadData, setUploadData] = useState({
    title: "",
    tagline: "",
    artist: "",
    age: "",
    price: 0,
    category: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUploadData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const currFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", currFile);
    formData.append("upload_preset", "hhfnuhff");
    axios
      .post(`https://api.cloudinary.com/v1_1/dldntxfqv/upload`, formData)
      .then((res) => {
        setFile(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const data = {
      title: uploadData.title,
      tagline: uploadData.tagline,
      artist: uploadData.artist,
      age: uploadData.age,
      price: uploadData.price,
      category: uploadData.category,
      description: uploadData.description,
      image: file,
    };
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/addToCreativeScrapyar`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        router.push("/creative-scrapyar");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
    }
  });
  return (
    <>
      <Header />
      <section className={styles.sell}>
        <h2>Sell with Creative-ScrapYar!</h2>
        <form>
          <div className={styles.form_group}>
            <label for="title">Title:</label>
            <input
              onChange={handleInputChange}
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label for="tagline">Tagline:</label>
            <input
              onChange={handleInputChange}
              type="text"
              id="tagline"
              name="tagline"
              required
            />
          </div>

          <div className={styles.form_group}>
            <div className={styles.input_group}>
              <label for="artist">Artist:</label>
              <input
                onChange={handleInputChange}
                type="text"
                id="artist"
                name="artist"
                required
              />
            </div>
            <div className={styles.input_group}>
              <label for="price">Price:</label>
              <input
                onChange={handleInputChange}
                type="number"
                id="price"
                name="price"
                required
              />
            </div>
          </div>
          <div className={styles.form_group}>
            <div className={styles.input_group}>
              <label for="category">Category:</label>
              <select
                onChange={handleInputChange}
                id="category"
                name="category"
                required
              >
                <option value="">Select a category</option>
                <option value="Painting">Painting</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Jwelleries">Jwelleries</option>
                <option value="Accesories">Accessories</option>
                <option value="Lifestyyle-Men">LifeStyle-Men</option>
                <option value="Lifestyle-Women">LifeStyle-Women</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.input_group}>
              <label for="age">Age:</label>
              <input
                onChange={handleInputChange}
                type="text"
                id="age"
                name="age"
                required
              />
            </div>
          </div>

          <div className={styles.form_group}>
            <label for="description">Description:</label>
            <textarea
              onChange={handleInputChange}
              id="description"
              name="description"
              required
            ></textarea>
          </div>

          <div className={styles.form_group}>
            <label for="image">Image:</label>
            <input
              onChange={handleFileChange}
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
            />
          </div>
          {(!uploadData.title ||
            !uploadData.age ||
            !uploadData.artist ||
            !uploadData.description ||
            !uploadData.category ||
            !uploadData.tagline ||
            !uploadData.price ||
            !file) && (
            <div className="error">
              <p>Please fill all required fields</p>
            </div>
          )}

          <Button
            variant="contained"
            size="large"
            onClick={handleUpload}
            disabled={
              !uploadData.title ||
              !uploadData.age ||
              !uploadData.artist ||
              !uploadData.description ||
              !uploadData.category ||
              !uploadData.tagline ||
              !uploadData.price ||
              !file
            }
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
      <Footer />
    </>
  );
};

export default OnCreativeScrapYar;
