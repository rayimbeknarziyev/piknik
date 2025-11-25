import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function page() {
  return (
    <div className="blog_page">
      <Header />
      <div className="title_side">
        <h1 className="blog_title">Sayohat va Lager Blogi</h1>
        <p className="blog_p">
          Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar
          va lager hayoti haqida ko‘rsatmalar. Tabiatga yaqin bo‘lish va
          sayohatlaringizni unutilmas qilish uchun o‘z bilimlaringizni boyiting!
        </p>
      </div>
      {/* Bloglar uchun */}
      <div className="blogs_wrapper">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}
