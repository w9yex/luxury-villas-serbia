import React from "react";

export default function Stats() {
  const statItems = [
    { number: "15+", label: "Лет селекции", desc: "Создаем премиальный уединенный отдых с 2011 года" },
    { number: "80+", label: "Эксклюзивных вилл", desc: "Проверены нашими экспертами на абсолютную приватность" },
    { number: "5k+", label: "Довольных гостей", desc: "Ценители премиального комфорта со всего мира" },
    { number: "€2M+", label: "Бронирований в год", desc: "Безопасное и надежное управление транзакциями" },
  ];

  return (
    <section className="py-16 md:py-24 border-y border-[#E5E1D8] bg-[#F7F3EC]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-12">
          {statItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                idx !== 0 ? "lg:border-l lg:border-[#E5E1D8] lg:pl-12" : ""
              }`}
            >
              {/* Large light number */}
              <span className="font-sans text-5xl md:text-6xl font-extralight tracking-tighter text-[#1A1A1A]">
                {item.number}
              </span>
              
              {/* Headline Label */}
              <span className="font-serif text-[15px] font-bold text-[#1A1A1A] mt-4 mb-2 tracking-wide uppercase">
                {item.label}
              </span>
              
              {/* Detailed Subtext */}
              <span className="font-sans text-xs md:text-[13px] text-[#8A8A8A] font-light leading-relaxed">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
