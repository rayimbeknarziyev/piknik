"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Iltimos barcha maydonlarni to'ldiring!");
      return;
    }

    const newMessage = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    const saved = localStorage.getItem("contactMessages");
    const arr = saved ? JSON.parse(saved) : [];

    arr.push(newMessage);
    localStorage.setItem("contactMessages", JSON.stringify(arr));

    alert("Xabar yuborildi!");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <Header />

      <div className="contact_section">
        <div className="left_contact">
          <h1>Keling, biz bilan gaplashaylik</h1>
          <p className="contact_p">
            Savollar, sharhlar yoki takliflar? Shaklni to'ldiring va biz tez
            orada bog'lanamiz.
          </p>
          <div className="location_contact">
            <IoLocationOutline className="contact_icon" />
            <span>
              1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.
            </span>
          </div>
          <div className="location_contact">
            <MdOutlineMail className="contact_icon" />
            <span>Contact@moralizer.com</span>
          </div>
        </div>

        <div className="right_contact">
          <div className="name_inp_wrapper">
            <input
              type="text"
              className="name_contact_inp"
              placeholder="Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="name_contact_inp"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="text"
            className="email_inp_contact"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            className="email_inp_contact"
            placeholder="Phone Number*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            className="email_inp_contact2"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="contact_send_btn" onClick={sendMessage}>
            Send Message
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
