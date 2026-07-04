import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviewsData = [
    {
      initials: "МА",
      name: "Марк Аврелий",
      details: "Провел 10 ночей в Сосновом приюте · Сентябрь 2025",
      quote: "Абсолютное убежище. Интеграция архитектуры в сосновый склон выполнена мастерски. Мы провели десять дней в полной тишине, нарушаемой только шелестом хвои. Персональный хост был практически невидим, но при этом предугадывал любые наши пожелания.",
      stars: 5,
    },
    {
      initials: "ЕВ",
      name: "Елена Власова",
      details: "Провела 5 ночей в Доме у реки · Июль 2025",
      quote: "Парить над изумрудными водами реки Дрина, когда утренний туман лениво плывет по каньону — это воспоминание, которое останется со мной навсегда. Концепция остекления от пола до потолка создает полное ощущение сна посреди дикой природы при абсолютном комфорте.",
      stars: 5,
    },
    {
      initials: "ГЛ",
      name: "Генри Лорт",
      details: "Провел 14 ночей в Альпийской усадьбе · Январь 2026",
      quote: "Потрясающе. Прямой выход к горнолыжным трассам делает зимний спорт невероятно удобным, а возвращение в теплый бассейн — это просто магия. Наш любимый вечерний ритуал — наблюдать за заснеженным закатом у каменного костра. Обязательно вернемся.",
      stars: 5,
    },
  ];

  const nextReview = () => {
    setActiveIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setActiveIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#F7F3EC]/50 border-t border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#8A8A8A] uppercase">
          ОТЗЫВЫ ГОСТЕЙ
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A] mt-2 mb-16">
          Впечатления об отдыхе
        </h2>

        {/* Testimonial Active Display */}
        <div className="relative min-h-[320px] md:min-h-[260px] flex flex-col items-center justify-center">
          
          {/* Large Quote Mark */}
          <div className="absolute top-0 left-0 text-[#C97A4A]/10 -translate-y-8 -translate-x-4">
            <Quote size={120} className="fill-[#C97A4A]/10" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(reviewsData[activeIdx].stars)].map((_, i) => (
                <Star key={i} size={14} className="text-[#C97A4A] fill-[#C97A4A]" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="font-serif text-lg md:text-2xl text-[#1A1A1A] font-light leading-relaxed tracking-wide mb-8 max-w-3xl">
              "{reviewsData[activeIdx].quote}"
            </blockquote>

            {/* Initials & Details */}
            <div className="flex items-center gap-4 text-left">
              {/* Initials Box */}
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#E5E1D8]">
                <span className="font-serif text-sm font-semibold tracking-tighter text-[#FBF8F3]">
                  {reviewsData[activeIdx].initials}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-bold text-[#1A1A1A]">
                  {reviewsData[activeIdx].name}
                </span>
                <span className="font-sans text-[11px] text-[#8A8A8A] font-light tracking-wide mt-0.5">
                  {reviewsData[activeIdx].details}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide navigation controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prevReview}
            className="w-10 h-10 rounded-full border border-[#E5E1D8] bg-[#FBF8F3] hover:bg-[#1A1A1A] hover:text-[#FBF8F3] hover:border-[#1A1A1A] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="font-sans text-[11px] font-bold tracking-widest text-[#8A8A8A]">
            {activeIdx + 1} / {reviewsData.length}
          </span>
          <button
            onClick={nextReview}
            className="w-10 h-10 rounded-full border border-[#E5E1D8] bg-[#FBF8F3] hover:bg-[#1A1A1A] hover:text-[#FBF8F3] hover:border-[#1A1A1A] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
