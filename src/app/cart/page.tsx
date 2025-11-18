"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    setCartItems(savedCart);
  }, []);

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
    <div className="cart_page">
      <h2>Savat</h2>
      <div className="cart_content">
        <div className="cart_table_wrapper">
          {cartItems.length === 0 ? (
            <p>Savat bo'sh</p>
          ) : (
            <table className="cart_table">
              <thead>
                <tr>
                  <th>Rasm</th>
                  <th>Nomi</th>
                  <th>Narxi</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <img src={item.images[0]} alt={item.title} width={50} />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
          <button onClick={handleSave}>Save</button>
        </div>
      </div>

      <Link href="/products">
        <button className="btn_back">Mahsulotlarga qaytish</button>
      </Link>
    </div>
  );
}
