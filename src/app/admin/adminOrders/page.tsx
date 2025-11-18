"use client";

import { useEffect, useState } from "react";

interface Order {
  name: string;
  phone: string;
  location: string;
  items: any[];
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders")!)
      : [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="admin_orders">
      <h2>Barcha zakazlar</h2>
      {orders.length === 0 ? (
        <p>Zakazlar mavjud emas</p>
      ) : (
        orders.map((order, idx) => (
          <div key={idx} className="order_card">
            <h3>
              {order.name} | {order.phone} | {order.location}
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Rasm</th>
                  <th>Nomi</th>
                  <th>Narxi</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <img src={item.images[0]} alt={item.title} width={50} />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
