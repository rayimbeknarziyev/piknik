import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <div className="header_row">
      <div className="header_line">
        <div>
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="Picture of the author"
          />
        </div>
        <div className="sahifalar">
          <ul>
            <Link className="home_menu" href={"/"}>
              <li>Bosh sahifa</li>
            </Link>
            <Link className="home_menu" href={"/products"}>
              <li>Mahsulotlar</li>
            </Link>
            <Link className="home_menu" href={"/contact"}>
              <li>Aloqa</li>
            </Link>
            <Link className="home_menu" href={"/blog"}>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="input_cart">
          <input
            className="search_inp"
            type="text"
            placeholder="Search for products..."
          />
          <AiOutlineShoppingCart className="cart_icon" />
        </div>
      </div>
      <div className="header_bottom_line"></div>
    </div>
  );
}
