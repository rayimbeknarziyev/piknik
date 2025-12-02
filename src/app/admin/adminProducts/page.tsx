"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { ProductType } from "@/app/type";

export default function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [open, setOpen] = useState(false);

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [category, setCategory] = useState("");

  const api = `${process.env.NEXT_PUBLIC_API}/products`;

  function getProducts() {
    axios
      .get(api)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  function handleSave() {
    if (!title || !price || !image1 || !category) {
      return alert("Iltimos, barcha maydonlarni to‘ldiring!");
    }

    const images = [image1, image2, image3, image4].filter((img) => img !== "");

    const newProduct = {
      title,
      description,
      rating,
      price,
      images,
      category,
    };

    axios
      .post(api, newProduct)
      .then(() => {
        resetForm();
        getProducts();
      })
      .catch((err) => console.error(err));
  }

  function handleDelete(id: string) {
    axios
      .delete(`${api}/${id}`)
      .then(() => getProducts())
      .catch((err) => console.error(err));
  }

  function resetForm() {
    setOpen(false);
    setTitle("");
    setDescription("");
    setRating("");
    setPrice("");
    setCategory("");
    setImage1("");
    setImage2("");
    setImage3("");
    setImage4("");
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2>Products</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            resetForm();
            setOpen(true);
          }}
        >
          + Product
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Category</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.rating}</td>
              <td>{product.price}</td>
              <td>{(product as any).category}</td>
              <td>
                <img
                  src={product.images[0]}
                  width={50}
                  height={50}
                  style={{ borderRadius: "4px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  x
                </button>
                <button className="btn btn-warning">edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Rodal
        visible={open}
        onClose={resetForm}
        customStyles={{ height: "max-content", width: "400px" }}
      >
        <h4 className="text-center mt-3">Add Product</h4>

        <input
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
          type="text"
          placeholder="First Image URL"
          className="form-control mb-2 mt-2"
        />
        <input
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
          type="text"
          placeholder="Second Image URL"
          className="form-control mb-2 mt-2"
        />
        <input
          value={image3}
          onChange={(e) => setImage3(e.target.value)}
          type="text"
          placeholder="Third Image URL"
          className="form-control mb-2 mt-2"
        />
        <input
          value={image4}
          onChange={(e) => setImage4(e.target.value)}
          type="text"
          placeholder="Fourth Image URL"
          className="form-control mb-2 mt-2"
        />

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="form-control mb-2"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="form-control mb-2"
        />
        <input
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type="number"
          placeholder="Rating"
          className="form-control mb-2"
        />
        <input
          value={price}
          onChange={(e) =>
            setPrice(e.target.value ? parseFloat(e.target.value) : "")
          }
          type="number"
          placeholder="Price"
          className="form-control mb-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="custom-select mb-2"
        >
          <option value="">Kategoriya tanlang</option>
          <option value="chodir">Chodirlar</option>
          <option value="mebel">Mebel</option>
          <option value="oshxona">Oshxona jihozlari</option>
          <option value="yotoqxona">Yotish uchun sumkalar</option>
        </select>

        <button className="btn btn-primary w-100 mt-2" onClick={handleSave}>
          Save
        </button>
      </Rodal>
    </div>
  );
}
