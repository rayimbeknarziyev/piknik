"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && pass === "admin1234") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin/adminProducts");
    } else {
      setError("Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-box">
      <div className="login_wrapper">
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="parol"
          value={pass}
          className="form-control"
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">
          Kirish
        </button>
      </div>
    </form>
  );
}
