import { FaTent } from "react-icons/fa6";
import { RiSofaLine } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import Product from "./Product";
import Link from "next/link";

export default function Products() {
  return (
    <div className="products_categories">
      <div className="wrapper_products">
        <h1 className="product_title">Kategoriya va Mahsulotlar</h1>
        <div className="buton_wrapper">
          <button className="categories_button">
            <FaTent />
            Chodirlar
          </button>
          <button className="categories_button">
            <RiSofaLine />
            Mebel
          </button>
          <button className="categories_button_2">
            <FaKitchenSet />
            Oshxona jihozlari
          </button>
          <button className="categories_button">
            <RiSofaLine />
            Mebel
          </button>
          <button className="categories_button_2">
            <RiSofaLine />
            Yotish uchun sumkalar
          </button>
        </div>
      </div>
      <div className="products_wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Link href={"/products"}>
        <button className="see_all_btn">Hammasini ko‘rish</button>
      </Link>
    </div>
  );
}
