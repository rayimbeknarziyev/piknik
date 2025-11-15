import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="admin_panel">
        <h3>Admin panel</h3>
      </div>
      <div className="link_buttons">
        <Link href={"/admin/adminProducts"}>
          <button className="admin_btn">products</button>
        </Link>
        <Link href={"/admin/adminOrders"}>
          <button className="admin_btn">orders</button>
        </Link>
        <Link href={"/admin/adminDeliver"}>
          <button className="admin_btn">
            <FaTruck /> delivers
          </button>
        </Link>
        <Link href={"/admin/adminPosts"}>
          <button className="admin_btn">posts</button>
        </Link>
        <Link href={"/"}>
          <button className="admin_btn">
            <AiOutlineHome />
            home
          </button>
        </Link>
      </div>
    </div>
  );
}
