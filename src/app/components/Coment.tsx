"use client";

import { useState } from "react";

export default function Coment() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const answer_question = [
    {
      q: "Mahsulotlarni qanday buyurtma qilsa bo‘ladi?",
      a: "Mahsulotni savatchaga qo‘shib, to‘lov jarayonidan o‘tish orqali buyurtma berishingiz mumkin.",
    },
    {
      q: "To‘lov usullari qanday?",
      a: "Naqd pul, karta orqali yoki yetkazib beruvchiga to‘lov qilish mumkin.",
    },
    {
      q: "Yetkazib berish qancha vaqt oladi?",
      a: "Yetkazib berish odatda 1–3 ish kuni davom etadi.",
    },
    {
      q: "Mahsulotlarni qaytarish mumkinmi?",
      a: "Ha, mahsulotni 7 kun ichida qaytarishingiz mumkin.",
    },
    {
      q: "Mahsulotlar kafolatlanganmi?",
      a: "Har bir mahsulotga rasmiy kafolat beriladi.",
    },
    {
      q: "Sayohat mahsulotlarini tanlashda yordam bera olasizmi?",
      a: "Albatta, sizga mos bo‘lgan sayohat jihozlarini tavsiya qilib beramiz.",
    },
    {
      q: "Yetkazib berish narxi qancha turadi?",
      a: "Buyurtma manziliga qarab narx 10,000 - 25,000 so‘m bo‘lishi mumkin.",
    },
    {
      q: "Agar buyurtma noto‘g‘ri kelsa, nima qilish kerak?",
      a: "Biz bilan bog‘laning, bepul almashtirib beramiz.",
    },
    {
      q: "Mahsulotlarni ko‘rish uchun oflayn do‘koningiz bormi?",
      a: "Hozircha yo‘q, ammo barcha mahsulotlar saytimizda mavjud.",
    },
  ];

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="coment_section">
      <h1 className="coment_title">Tez-tez beriladigan savollar</h1>

      <div className="questions">
        {answer_question.map((item, i) => (
          <div key={i} className="accordion_item">
            <div className="question" onClick={() => toggle(i)}>
              <p className="question_title">{item.q}</p>
              <p className="question_plus">+</p>
            </div>

            <div className={`answer ${openIndex === i ? "open" : ""}`}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
