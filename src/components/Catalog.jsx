import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, ArrowUpRight, Compass, Ruler, User, ChevronLeft, ChevronRight } from "lucide-react";

export const villasData = [
  {
    id: 1,
    name: "Сосновый приют (Pine Retreat)",
    location: "Горы Златибор",
    price: 520,
    category: "в горах",
    mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&h=800&q=80"
    ],
    specs: { beds: "5 спален", guests: "10 человек", size: "450 м²" },
    description: "Скрытый в частном сосновом лесу на склонах Златибора, этот минималистичный шале сочетает современный архитектурный бетон с теплым местным дубом. К услугам гостей подогреваемый инфинити-бассейн со стеклянными стенами, спа-лаунж и величественный вид на закат над горными вершинами.",
    amenities: ["Стеклянный инфинити-бассейн", "Частный спа и сауна", "Персональный шеф-повар", "Вертолетная площадка", "Дровяной камин", "Система «Умный дом»"]
  },
  {
    id: 2,
    name: "Дом у реки (River House)",
    location: "Каньон реки Дрина",
    price: 480,
    category: "у воды",
    mainImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&h=800&q=80"
    ],
    specs: { beds: "4 спальни", guests: "8 человек", size: "320 м²" },
    description: "Парящий над изумрудными водами реки Дрина на границе национального парка Тара. Этот современный архитектурный шедевр оснащен панорамным остеклением от пола до потолка, частным причалом для лодок и просторной деревянной террасой. Просыпайтесь в облаке тумана над великим каньоном.",
    amenities: ["Терраса у реки", "Собственный причал", "Подогреваемый бассейн", "Каменная гриль-зона", "Консьерж 24/7", "Скоростной Starlink Wi-Fi"]
  },
  {
    id: 3,
    name: "Альпийская усадьба (Alpine Estate)",
    location: "Склоны Копаоника",
    price: 650,
    category: "в горах",
    mainImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&h=800&q=80"
    ],
    specs: { beds: "6 спален", guests: "12 человек", size: "580 м²" },
    description: "Монументальное альпийское шале из горного камня и дерева на склонах Копаоника. Идеально подходит как для зимнего горнолыжного отдыха, так и для летних пеших походов. На территории есть крытый-открытый бассейн, профессиональный домашний кинотеатр, винный погреб и открытый костер.",
    amenities: ["Прямой выход к трассам", "Винный погреб", "Крытый/открытый бассейн", "Персональный кинозал", "Костровая зона на улице", "Сауна и тренажерный зал"]
  },
  {
    id: 4,
    name: "Винная вилла Лаванда (Lavender Wine Villa)",
    location: "Фрушка-Гора",
    price: 490,
    category: "винодельни",
    mainImage: "villa-lavender.png",
    images: [
      "villa-lavender.png",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&h=800&q=80"
    ],
    specs: { beds: "4 спальни", guests: "8 человек", size: "320 м²" },
    description: "Современное поместье из камня и бетона, раскинувшееся среди бесконечных лавандовых полей и виноградников Фрушка-Горы. Вилла располагает частным винным погребом с коллекцией редких местных вин, открытой террасой с камином, подогреваемым бассейном и панорамным видом на холмы.",
    amenities: ["Винный погреб", "Лавандовый сад", "Подогреваемый бассейн", "Уличный камин", "Винный сомелье", "Кулинарные мастер-классы"]
  },
  {
    id: 5,
    name: "Озерный павильон Палич (Palić Lake Pavilion)",
    location: "Озеро Палич",
    price: 580,
    category: "у воды",
    mainImage: "villa-palic.png",
    images: [
      "villa-palic.png",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&h=800&q=80"
    ],
    specs: { beds: "5 спален", guests: "10 человек", size: "410 м²" },
    description: "Минималистичный стеклянный павильон на самом берегу озера Палич. Вилла предлагает полную конфиденциальность и гармонию с природой. Включает собственный деревянный причал для лодок, спа-кабинет, открытую террасу с лаунж-шезлонгами и захватывающие дух закаты, отражающиеся в воде.",
    amenities: ["Причал у воды", "Стеклянные стены 360°", "Спа-кабинет", "Подогреваемый джакузи", "Лодка в распоряжении", "Панорамный гриль-бар"]
  }
];

export default function Catalog({ onSelectVilla }) {
  const [selectedCategory, setSelectedCategory] = useState("все");
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: "все", label: "Все виллы" },
    { id: "в горах", label: "В горах" },
    { id: "у воды", label: "У воды" },
    { id: "винодельни", label: "Винодельни" }
  ];

  const filteredVillas = selectedCategory === "все"
    ? villasData
    : villasData.filter((v) => v.category === selectedCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section
      id="catalog"
      className="py-24 bg-[#F7F3EC]/50 border-t border-[#E5E1D8] scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#8A8A8A] uppercase">
              ПОРТФОЛИО
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A] mt-2">
              Наши виллы
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#8A8A8A] font-light max-w-sm mt-3 leading-relaxed">
              Пять исключительных архитектурных концепций в Сербии, созданных для полного уединения и первоклассного сервиса.
            </p>
          </div>
          
          {/* Unified Arrow Navigation (Exactly like Locations.jsx) */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-[#E5E1D8] bg-[#FBF8F3] hover:bg-[#1A1A1A] hover:text-[#FBF8F3] hover:border-[#1A1A1A] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm border-solid"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-[#E5E1D8] bg-[#FBF8F3] hover:bg-[#1A1A1A] hover:text-[#FBF8F3] hover:border-[#1A1A1A] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm border-solid"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Filter Tabs Header */}
        <div className="flex flex-wrap gap-2.5 justify-start mb-16 border-b border-[#E5E1D8] pb-5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                }}
                className="relative px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-colors duration-300 cursor-pointer border-0 bg-transparent p-0"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-[#1A1A1A] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 block px-5 py-2.5 ${
                  isActive ? "text-[#FBF8F3]" : "text-[#8A8A8A] hover:text-[#1A1A1A]"
                }`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Container (Matches Locations.jsx scroll mechanics) */}
        <div
          id="catalog-scroll-container"
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hide Webkit Scrollbars */}
          <style>{`
            #catalog-scroll-container::-webkit-scrollbar {
              display: none !important;
            }
          `}</style>
          
          <AnimatePresence mode="popLayout">
            {filteredVillas.map((villa) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                key={villa.id}
                onClick={() => onSelectVilla(villa)}
                className="w-[290px] md:w-[360px] shrink-0 snap-start flex flex-col group text-left cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-md group-hover:shadow-xl transition-all duration-500 bg-[#FBF8F3]">
                  <img
                    src={villa.mainImage}
                    alt={villa.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  
                  {/* Location badge on top-left of image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A]/85 backdrop-blur-sm border border-[#FBF8F3]/10">
                    <Compass size={12} className="text-[#C97A4A]" />
                    <span className="text-[9px] font-sans font-bold tracking-widest text-[#FBF8F3] uppercase">
                      {villa.location}
                    </span>
                  </div>

                  {/* Micro hover shadow overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>

                {/* Villa Information */}
                <div className="mt-6 flex flex-col">
                  <div className="flex items-start justify-between gap-4 min-h-[64px]">
                    <h3 className="font-sans text-lg md:text-xl font-medium tracking-tight text-[#1A1A1A] group-hover:text-[#C97A4A] transition-colors duration-300 leading-snug">
                      {villa.name}
                    </h3>
                    <div className="flex items-center text-[#1A1A1A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 mt-1.5">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="flex items-center gap-6 mt-3 text-[#8A8A8A]">
                    <div className="flex items-center gap-2">
                      <Bed size={14} />
                      <span className="text-[12px] font-sans font-light">{villa.specs.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span className="text-[12px] font-sans font-light">{villa.specs.guests}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler size={14} />
                      <span className="text-[12px] font-sans font-light">{villa.specs.size}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-[#E5E1D8] my-4"></div>

                  {/* Price tag */}
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] font-sans font-medium text-[#8A8A8A] uppercase tracking-wider">
                      Стоимость от
                    </span>
                    <span className="font-sans text-base font-bold text-[#1A1A1A]">
                      €{villa.price} <span className="text-xs font-light text-[#8A8A8A]">/ сутки</span>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
