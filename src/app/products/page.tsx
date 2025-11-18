"use client"

import { FaTent } from "react-icons/fa6";
import { RiSofaLine } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function page() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div>
      <Header />
      <div className="products_categories">
        <div className="wrapper_products">
          <h1 className="product_title">Kategoriya va Mahsulotlar</h1>
          <div className="buton_wrapper">
            <button
              className="categories_button"
              onClick={() => setActiveCategory("chodir")}
            >
              <FaTent /> Chodirlar
            </button>

            <button
              className="categories_button"
              onClick={() => setActiveCategory("mebel")}
            >
              <RiSofaLine /> Mebel
            </button>

            <button
              className="categories_button_2"
              onClick={() => setActiveCategory("oshxona")}
            >
              <FaKitchenSet /> Oshxona jihozlari
            </button>

            <button
              className="categories_button_2"
              onClick={() => setActiveCategory("yotoqxona")}
            >
              <RiSofaLine /> Yotish uchun sumkalar
            </button>
          </div>
        </div>
        <div className="products_wrap">
          <Product category={activeCategory} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
