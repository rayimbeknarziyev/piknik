"use client";

import { FaTent } from "react-icons/fa6";
import { RiSofaLine } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import Product from "./Product";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="products_categories">
      <div className="wrapper_products">
        <h1 className="product_title">Kategoriya va Mahsulotlar</h1>

        <div className="buton_wrapper">
          <div className="buton_wrapper">
            <button
              className={`categories_button ${
                activeCategory === "" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("")}
            >
              Hammasi
            </button>

            <button
              className={`categories_button ${
                activeCategory === "chodir" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("chodir")}
            >
              <FaTent /> Chodirlar
            </button>

            <button
              className={`categories_button ${
                activeCategory === "mebel" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("mebel")}
            >
              <RiSofaLine /> Mebel
            </button>

            <button
              className={`categories_button_2 ${
                activeCategory === "oshxona" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("oshxona")}
            >
              <FaKitchenSet /> Oshxona jihozlari
            </button>

            <button
              className={`categories_button_2 ${
                activeCategory === "yotoqxona" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("yotoqxona")}
            >
              <RiSofaLine /> Yotish uchun sumkalar
            </button>
          </div>
        </div>
      </div>

      <div className="products_wrap">
        <Product category={activeCategory} />
      </div>

      <Link href={"/products"}>
        <button className="see_all_btn">Hammasini korish</button>
      </Link>
    </div>
  );
}
