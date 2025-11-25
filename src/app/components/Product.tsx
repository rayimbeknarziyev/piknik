"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductType } from "../type";
import axios from "axios";
import Image from "next/image";

export default function Product({ category }: { category: string }) {
  const [products, setProducts] = useState<ProductType[]>([]);

  function getProducts() {
    axios
      .get("https://690f1e9445e65ab24ac29473.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Xatolik:", err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  function addToCart(product: ProductType) {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Mahsulot savatga qo‘shildi!");
  }

  return (
    <div className="product_wrapper">
      {filtered.map((product) => (
        <div className="product" key={product.id}>
          <Link href={`/products/${product.id}`}>
            <div className="image_product">
              <Image src={product.images[0]} width={295} height={298} alt=""></Image>
            </div>
          </Link>

          <h1 className="product_name">{product.title}</h1>

          <div className="raiting">
            <p>{product.rating}</p>
          </div>

          <div className="product_icon_price">
            <h3 className="product_price">${product.price}</h3>
            <div
              className="product_icon_wrapper"
              onClick={() => addToCart(product)}
            >
              <MdAddShoppingCart className="product_icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
