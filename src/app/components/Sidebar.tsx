import Link from "next/link";
import { FaTruck } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="admin_panel">
        <h3>Admin panel</h3>
      </div>
      <div className="link_buttons">
        <Link href={"/admin/adminProducts"}>
          <button className="admin_btn">
            <AiFillProduct />
            products
          </button>
        </Link>
        <Link href={"/admin/adminOrders"}>
          <button className="admin_btn">
            <FaBagShopping /> orders
          </button>
        </Link>
        <Link href={"/admin/adminDeliver"}>
          <button className="admin_btn">
            <FaTruck /> delivers
          </button>
        </Link>
        <Link href={"/admin/adminPosts"}>
          <button className="admin_btn">posts</button>
        </Link>
        <Link href={"/admin/adminContact"}>
          <button className="admin_btn">
            <FaPhone />
            contact
          </button>
        </Link>
      </div>
    </div>
  );
}
