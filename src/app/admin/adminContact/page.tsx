"use client";

import { useEffect, useState } from "react";

export default function AdminContactPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("contactMessages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  return (
    <div className="admin_wrapper">
      <h1 className="admin_title">Xabarlar</h1>

      {messages.length === 0 ? (
        <p className="no_messages">Hozircha xabarlar yo‘q.</p>
      ) : (
        <table className="contact_table">
          <thead className="contact_table_thead">
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((message: any, index) => (
              <tr key={message.id}>
                <td>{index + 1}</td>
                <td>{message.firstName}</td>
                <td>{message.lastName}</td>
                <td>{message.email}</td>
                <td>{message.phone}</td>
                <td>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
