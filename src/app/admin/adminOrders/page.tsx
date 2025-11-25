"use client";

import { useEffect, useState } from "react";

interface Order {
  name: string;
  phone: string;
  location: string;
  items: any[];
}

export default function page() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders")!)
      : [];
    setOrders(savedOrders);
  }, []);

  const completeOrder = (index: number) => {
    const order = orders[index];
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
    localStorage.setItem("orders", JSON.stringify(newOrders));

    const savedDelivered = localStorage.getItem("delivered")
      ? JSON.parse(localStorage.getItem("delivered")!)
      : [];
    savedDelivered.push(order);
    localStorage.setItem("delivered", JSON.stringify(savedDelivered));
  };

  return (
    <div className="admin_orders">
      <h2>Barcha zakazlar</h2>
      {orders.length === 0 ? (
        <p>Zakazlar mavjud emas</p>
      ) : (
        orders.map((order, idx) => (
          <div key={idx} className="order_card">
            <h3>
              Ism: {order.name} 
              <br />
              Telefon raqami: {order.phone}
              <br />
               Lokatsiya: {order.location}
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Rasm</th>
                  <th>Nomi</th>
                  <th>Narxi</th>
                  <th>Actions</th>
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
                    <td>
                      <button
                        onClick={() => completeOrder(idx)}
                        className="btn btn-primary"
                      >
                        Completed
                      </button>
                    </td>
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
