"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductType } from "../type";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);

  function getProducts() {
    axios
      .get("https://690f1e9445e65ab24ac29473.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Xatolik:", err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product_wrapper">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="image_product">
                <img
                  className="product_image"
                  src={product.images[0]}
                  alt={product.title}
                />
              </div>
            </Link>
            <h1 className="product_name">{product.title}</h1>
            <div className="raiting">
              <p>{product.rating}</p>
            </div>
            <div className="product_icon_price">
              <h3 className="product_price">${product.price}</h3>
              <div>
                <MdAddShoppingCart className="product_icon" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
