import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero_section">
      <div className="left">
        <h1 className="title">
          Zo'r jihozlar bilan sarguzashtlarni kashf eting
        </h1>
        <p className="description">
          Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli
          jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager
          anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.
        </p>
        <Link href={"/products"}>
          <button className="button">Xarid qiling</button>
        </Link>
        <div className="percent_wrapper">
          <div className="percents">
            <div className="top_percent">
              200 <span className="percent_plus">+</span>
            </div>
            <div className="bottom_percent">Xalqaro brendlar</div>
          </div>
          <div className="percent_line"></div>
          <div className="percents">
            <div className="top_percent">
              2,000 <span className="percent_plus">+</span>
            </div>
            <div className="bottom_percent">Yuqori Sifatli Mahsulotlar</div>
          </div>
          <div className="percent_line"></div>
          <div className="percents">
            <div className="top_percent">
              30,000 <span className="percent_plus">+</span>
            </div>
            <div className="bottom_percent">Baxtli mijozlar</div>
          </div>
        </div>
      </div>
      <div className="right">
        <Image
          className="hero_image"
          src="/hero_image.png"
          width={614}
          height={463}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
