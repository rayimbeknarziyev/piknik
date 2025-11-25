"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");

    if (isAuth !== "true") {
      router.push("/login");
    }
  }, [router]);

  return <div className="admin">Admin panel</div>;
}
 