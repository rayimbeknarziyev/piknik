"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { ProductType } from "@/app/type";

export default function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [open, setOpen] = useState(false);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const api = "https://690f1e9445e65ab24ac29473.mockapi.io/products";

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
    if (!title || !price || !image)
      return alert("Iltimos, barcha maydonlarni to‘ldiring!");

    const newProduct = {
      title,
      description,
      rating,
      price,
      images: image,
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
    setImage("");
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
            <th>Image</th>
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
              <td>
                <img
                  src={(product as any).images || (product as any).image}
                  width={70}
                  alt={product.title}
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
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Image URL"
          className="form-control mb-2 mt-3"
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

        <button className="btn btn-success w-100" onClick={handleSave}>
          Save
        </button>
      </Rodal>
    </div>
  );
}
