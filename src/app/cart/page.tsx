"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoTrashSharp } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Order {
  name: string;
  phone: string;
  location: string;
  items: any[];
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];

    const fixedCart = savedCart.map((item: any) => ({
      ...item,
      qty: item.qty ? item.qty : 1,
    }));

    setCartItems(fixedCart);
    localStorage.setItem("cart", JSON.stringify(fixedCart));
  }, []);

  function increaseQty(id: number) {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function decreaseQty(id: number) {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.qty - 1;
        return { ...item, qty: newQty < 1 ? 1 : newQty };
      }
      return item;
    });

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function deleteItem(id: number) {
    const updated = cartItems.filter((item) => item.id !== id);

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function handleSave() {
    if (!name || !phone || !location)
      return alert("Iltimos, barcha maydonlarni to‘ldiring!");

    const orders = localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders")!)
      : [];

    const newOrder: Order = {
      name,
      phone,
      location,
      items: cartItems,
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");
    setCartItems([]);
    setName("");
    setPhone("");
    setLocation("");

    alert("Zakaz saqlandi!");
  }

  return (
    <div>
      <Header />
      <div className="cart_page">
        <h2>Savat</h2>

        <div className="cart_content">
          <div className="cart_products_wrapper">
            {cartItems.map((item, index) => (
              <div className="cart_product" key={index}>
                <img
                  src={item.images ? item.images[0] : item.img}
                  alt={item.title || item.name}
                  className="cart_img"
                />

                <div className="cart_info">
                  <p className="cart_title">{item.title || item.name}</p>
                  <p className="cart_price">${item.price}</p>
                </div>

                <div className="cart_actions">
                  <button
                    className="qty_btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>
                  <span className="qty_value">{item.qty}</span>
                  <button
                    className="qty_btn"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete_btn"
                  onClick={() => deleteItem(item.id)}
                >
                  <IoTrashSharp />
                </button>
              </div>
            ))}
          </div>

          <div className="cart_form_wrapper">
            <h3>Buyurtma ma'lumotlari</h3>
            <input
              type="text"
              placeholder="Ism va Familiya"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Telefon raqam"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Manzil"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <div className="order_btn_cart" onClick={handleSave}>
              Save
            </div>
          </div>
        </div>

        <Link href="/products">
          <button className="btn_back">Mahsulotlarga qaytish</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
