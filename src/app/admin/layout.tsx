import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin">
      <div className="admin_sidebar">
        <Sidebar />
      </div>
      <div className="admin_outlet">
        <Header />
        {children}
      </div>
    </div>
  );
}
