import Image from "next/image";
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
            <li>Bosh sahifa</li>
            <li>Mahsulotlar</li>
            <li>Aloqa</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="input_cart">
          <input className="search_inp" type="text" placeholder="Search for products..." />
          <AiOutlineShoppingCart className="cart_icon"/>
        </div>
      </div>
      <div className="header_bottom_line"></div>
    </div>
  );
}
