"use client";

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin">
      <div className={`admin_sidebar ${open ? "open_sidebar" : ""}`}>
        <Sidebar />
      </div>

      <div className="admin_outlet">
        <button className="sidebar_toggle_btn" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>

        <Header />
        {children}
      </div>
    </div>
  );
}
