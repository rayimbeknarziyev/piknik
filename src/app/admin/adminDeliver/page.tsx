"use client";

import { useEffect, useState } from "react";

interface Order {
  name: string;
  phone: string;
  location: string;
  items: any[];
}

export default function AdminDeliver() {
  const [delivered, setDelivered] = useState<Order[]>([]);

  useEffect(() => {
    const savedDelivered = localStorage.getItem("delivered")
      ? JSON.parse(localStorage.getItem("delivered")!)
      : [];
    setDelivered(savedDelivered);
  }, []);

  const removeDelivered = (index: number) => {
    const newDelivered = [...delivered];
    newDelivered.splice(index, 1);
    setDelivered(newDelivered);
    localStorage.setItem("delivered", JSON.stringify(newDelivered));
  };

  return (
    <div className="admin_deliver">
      <h2>Yetkazilgan zakazlar</h2>
      {delivered.length === 0 ? (
        <p>Yetkazilgan zakazlar mavjud emas</p>
      ) : (
        delivered.map((order, idx) => (
          <div key={idx} className="order_card delivered">
            <h3>
              {order.name} | {order.phone} | {order.location}
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
                        onClick={() => removeDelivered(idx)}
                        className="btn btn-danger-2"
                      >
                        Delivered
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
