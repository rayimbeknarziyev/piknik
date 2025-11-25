"use client";

import { useEffect, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("blogs");
    if (saved) setBlogs(JSON.parse(saved));
  }, []);

  const addBlog = () => {
    if (!title || !image) {
      alert("Iltimos barcha maydonlarni to‘ldiring!");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      image,
      date: new Date().toLocaleDateString(),
    };

    const updated = [...blogs, newBlog];

    localStorage.setItem("blogs", JSON.stringify(updated));
    setBlogs(updated);

    setTitle("");
    setImage("");
    setIsModalOpen(false);
  };

  return (
    <div className="admin_blog_wrapper">
      <h1 className="admin_blog_title">Bloglar</h1>

      <button className="add_blog_btn" onClick={() => setIsModalOpen(true)}>
        + Add Blog
      </button>

      <Rodal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width={400}
        height={250}
      >
        <div>
          <h2>Yangi Blog Qo‘shish</h2>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
          />

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            style={{ marginTop: "10px" }}
          />

          <div
            className="modal_btns"
            style={{ marginTop: "15px", display: "flex", gap: "10px" }}
          >
            <button className="btn btn-primary" onClick={addBlog}>
              Save
            </button>

            <button
              className="btn btn-danger"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Rodal>

      <table className="admin_blog_table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog: any, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>
              <td>
                <img src={blog.image} className="table_img" />
              </td>
              <td>{blog.title}</td>
              <td>{blog.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
