import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="ul_wrapper">
        <ul className="first_ul">
          <li>
            <Image alt="" src="/logo_footer.png" width={100} height={100} />
          </li>
          <li>
            <div className="logo_wrap">
              <Image alt="" src="/twitter.png" width={28} height={28} />
              <Image alt="" src="/2.png" width={28} height={28} />
              <Image alt="" src="/3.png" width={28} height={28} />
              <Image alt="" src="/4.png" width={28} height={28} />
            </div>
          </li>
        </ul>
        <ul className="first_ul">
          <p className="footer_title">Kompaniya</p>
          <li className="footer_l">Biz haqimizda</li>
          <li className="footer_l">Xususiyatlar</li>
          <li className="footer_l">Ishlash jarayoni</li>
          <li className="footer_l">Karyera imkoniyatlari</li>
        </ul>
        <ul className="first_ul">
          <p className="footer_title">Yordam</p>
          <li className="footer_l">Mijozlarni qo‘llab-quvvatlash</li>
          <li className="footer_l">Yetkazib berish tafsilotlari</li>
          <li className="footer_l">Shartlar va qoidalar</li>
          <li className="footer_l">Maxfiylik siyosati</li>
        </ul>
        <ul className="first_ul">
          <p className="footer_title">Savollar</p>
          <li className="footer_l">Hisob</li>
          <li className="footer_l">Yetkazib berishni boshqarish</li>
          <li className="footer_l">Buyurtmalar</li>
          <li className="footer_l">To‘lovlar</li>
        </ul>
        <ul className="first_ul">
          <p className="footer_title">Resurslar</p>
          <li className="footer_l">Bepul e-kitoblar</li>
          <li className="footer_l">Dasturlash bo‘yicha qo‘llanmalar</li>
          <li className="footer_l">Qanday foydalanish - Blog</li>
          <li className="footer_l">YouTube pleylist</li>
        </ul>
      </div>
      <div className="footer_bootom_sec">
        <p className="p_footer">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="logo_images">
          <Image alt="" src="/Badge.png" width={46} height={30} />
          <Image alt="" src="/Badge (1).png" width={46} height={30} />
          <Image alt="" src="/Badge (2).png" width={46} height={30} />
          <Image alt="" src="/Badge (3).png" width={46} height={30} />
          <Image alt="" src="/Badge (4).png" width={46} height={30} />
        </div>
      </div>
    </div>
  );
}
