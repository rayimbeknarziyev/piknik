import Coment from "./components/Coment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";

export default function page() {
  return (
    <div className="home_page">
      <Header />
      <HeroSection />
      <Products/>
      <Coment/>
      <Footer/>
    </div>
  );
}
