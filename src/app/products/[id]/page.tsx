"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

export default function Page() {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState<ProductType | null>(null);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://690f1e9445e65ab24ac29473.mockapi.io/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        if (res.data.images && res.data.images.length > 0) {
          setMainImage(res.data.images[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <h1>Mahsulot topilmadi</h1>;

  return (
    <div className="single_product_page">
      <div className="left_images">
        <div className="thumbnail_wrapper">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${img === mainImage ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <img src={mainImage} className="big_image" alt={product.title} />
      </div>
      <div className="right_info">
        <h1>{product.title}</h1>
        <div className="rating">⭐ {product.rating}/5</div>
        <div className="price_box">
          <h2>${product.price}</h2>
        </div>
        <p className="description">{product.description}</p>
        <button className="add_to_cart_btn">Add to Cart</button>
        <br />
        <br />
        <Link href={"/"}>
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
}
