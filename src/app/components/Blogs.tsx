"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("blogs");
    if (saved) setBlogs(JSON.parse(saved));
  }, []);

  return (
    <div className="blogs_wrapper">
      {blogs.map((blog: any) => (
        <div className="blog_card" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog_image" />
          <h1 className="blog_name">{blog.title}</h1>
          <div className="blog_date">{blog.date}</div>
        </div>
      ))}
    </div>
  );
}
