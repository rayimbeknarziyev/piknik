import Link from "next/link";

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
          <button className="admin_btn">delivers</button>
        </Link>
        <Link href={"/admin/adminPosts"}>
          <button className="admin_btn">posts</button>
        </Link>
      </div>
    </div>
  );
}
