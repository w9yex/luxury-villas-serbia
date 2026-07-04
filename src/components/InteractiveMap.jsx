import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Compass, ArrowRight } from "lucide-react";

export default function InteractiveMap({ onSelectRegion }) {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    {
      id: "palic",
      name: "Озеро Палич",
      description: "Озерный оазис и спа-курорты",
      coords: { x: 50, y: 16 }, // Adjusted to sit inside northern tip
      estates: "5 вилл",
      originalName: "Озеро Палич"
    },
    {
      id: "fruska-gora",
      name: "Фрушка-Гора",
      description: "Виноградники и древние монастыри",
      coords: { x: 48, y: 28 }, // Adjusted to sit near Belgrade/Novi Sad
      estates: "8 вилл",
      originalName: "Фрушка-Гора"
    },
    {
      id: "tara",
      name: "Парк Тара",
      description: "Каньоны и первозданные еловые леса",
      coords: { x: 35, y: 53 },
      estates: "21 вилла",
      originalName: "Национальный парк Тара"
    },
    {
      id: "zlatibor",
      name: "Горы Златибор",
      description: "Сосновые плато и золотые холмы",
      coords: { x: 37, y: 64 },
      estates: "42 виллы",
      originalName: "Горы Златибор"
    },
    {
      id: "kopaonik",
      name: "Хребет Копаоник",
      description: "Высокогорный горнолыжный альпийский хребет",
      coords: { x: 58, y: 74 },
      estates: "15 вилл",
      originalName: "Хребет Копаоник"
    }
  ];

  const handleRegionClick = (region) => {
    // Scroll to locations section
    const el = document.getElementById("locations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    // Callback to open drawer
    if (onSelectRegion) {
      onSelectRegion(region.originalName);
    }
  };

  return (
    <section id="interactive-map" className="py-24 bg-[#FBF8F3] border-t border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#8A8A8A] uppercase block mb-3">
            КАРТА ЛОКАЦИЙ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A]">
            Интерактивный путеводитель
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed mt-4">
            Выберите регион на карте или в списке справа, чтобы исследовать ландшафты, инфраструктуру и доступные резиденции.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Map Container (7 cols) */}
          <div className="lg:col-span-7 flex justify-center relative">
            
            {/* Map Frame/Canvas - changed to aspect-square to match SVG aspect ratio perfectly */}
            <div className="relative w-full max-w-[480px] aspect-square bg-[#F7F3EC]/50 rounded-3xl border border-[#E5E1D8] overflow-hidden p-6 shadow-sm">
              
              {/* Latitude/Longitude Grid lines */}
              <div className="absolute inset-0 grid grid-cols-5 pointer-events-none opacity-40">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#E5E1D8] border-dashed h-full" />
                ))}
              </div>
              <div className="absolute inset-0 grid grid-rows-5 pointer-events-none opacity-40">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-b border-[#E5E1D8] border-dashed w-full" />
                ))}
              </div>

              {/* Compass grid ornament */}
              <div className="absolute bottom-6 right-6 flex flex-col items-center opacity-30 text-[#1A1A1A] pointer-events-none">
                <Compass size={42} strokeWidth={1} />
                <span className="text-[7px] font-sans font-bold tracking-widest mt-1.5">SERBIA GRID</span>
              </div>

              {/* Serbia SVG Outline shape */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[#E5DED0]"
                fill="currentColor"
                stroke="#C5BEB2"
                strokeWidth="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stylized geometric contour path of Serbia */}
                <path d="M 50 10 L 58 13 L 64 12 L 67 18 L 65 24 L 72 26 L 76 34 L 73 40 L 78 45 L 75 52 L 79 58 L 74 65 L 75 74 L 70 80 L 66 84 L 60 81 L 57 85 L 53 87 L 50 83 L 46 86 L 43 82 L 40 85 L 35 78 L 36 71 L 41 68 L 38 62 L 35 59 L 30 57 L 27 52 L 31 46 L 28 40 L 33 37 L 31 30 L 37 25 L 35 18 L 44 17 Z" />
              </svg>

              {/* Crisp HTML City Labels */}
              <div className="absolute inset-0 pointer-events-none select-none">
                {/* Белград */}
                <div style={{ left: "52%", top: "39%" }} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] border border-[#FBF8F3] shadow-sm mb-0.5"></div>
                  <span className="font-sans font-bold text-[9px] tracking-wider uppercase text-[#1A1A1A] bg-[#FBF8F3]/60 px-1 rounded backdrop-blur-xs">Белград</span>
                </div>
                
                {/* Нови-Сад */}
                <div style={{ left: "46%", top: "29%" }} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-1 h-1 rounded-full bg-[#8A8A8A] border border-[#FBF8F3] shadow-sm mb-0.5"></div>
                  <span className="font-sans font-semibold text-[8px] tracking-wide uppercase text-[#8A8A8A] bg-[#FBF8F3]/40 px-1 rounded">Нови-Сад</span>
                </div>
                
                {/* Ниш */}
                <div style={{ left: "68%", top: "72%" }} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-1 h-1 rounded-full bg-[#8A8A8A] border border-[#FBF8F3] shadow-sm mb-0.5"></div>
                  <span className="font-sans font-semibold text-[8px] tracking-wide uppercase text-[#8A8A8A] bg-[#FBF8F3]/40 px-1 rounded">Ниш</span>
                </div>

                {/* Крагуевац */}
                <div style={{ left: "54%", top: "55%" }} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-1 h-1 rounded-full bg-[#8A8A8A] border border-[#FBF8F3] shadow-sm mb-0.5"></div>
                  <span className="font-sans font-semibold text-[8px] tracking-wide uppercase text-[#8A8A8A] bg-[#FBF8F3]/40 px-1 rounded">Крагуевац</span>
                </div>
              </div>

              {/* Active Region Highlights & Markers - now perfectly matches the SVG because container aspect-square matches viewBox 100/100 */}
              {regions.map((region) => {
                const isActive = hoveredRegion === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => handleRegionClick(region)}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    style={{
                      left: `${region.coords.x}%`,
                      top: `${region.coords.y}%`
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer border-0 p-0 bg-transparent flex items-center justify-center z-20 focus:outline-none"
                  >
                    {/* Ring highlight wave */}
                    <div className={`absolute w-10 h-10 rounded-full bg-[#C97A4A]/20 scale-0 transition-transform duration-300 ${
                      isActive ? "scale-100 animate-ping" : "group-hover:scale-100"
                    }`} />
                    
                    {/* Inner glowing core */}
                    <div className={`w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center transition-all duration-300 shadow-md ${
                      isActive ? "bg-[#C97A4A] scale-120" : "bg-[#1A1A1A] group-hover:bg-[#C97A4A]"
                    }`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>

                    {/* Pop-up tooltip indicator on hover */}
                    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#FBF8F3] px-3 py-1.5 rounded-lg text-[10px] font-sans font-medium tracking-wide shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none flex flex-col items-center ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}>
                      <span className="font-bold">{region.name}</span>
                      <span className="text-[#C97A4A] font-semibold text-[8px] uppercase mt-0.5">{region.estates}</span>
                      <div className="w-1.5 h-1.5 bg-[#1A1A1A] transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Region Legend List (5 cols) */}
          <div className="lg:col-span-5 text-left flex flex-col gap-4">
            <h3 className="font-serif text-xl font-medium text-[#1A1A1A] mb-2 border-b border-[#E5E1D8] pb-4">
              Список регионов
            </h3>
            
            <div className="space-y-2">
              {regions.map((region) => {
                const isActive = hoveredRegion === region.id;
                return (
                  <div
                    key={region.id}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionClick(region)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? "bg-[#F7F3EC] border-[#C97A4A] shadow-sm translate-x-2"
                        : "bg-[#F7F3EC]/40 border-[#E5E1D8] hover:bg-[#F7F3EC]/70"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Accent icon container */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isActive ? "bg-[#1A1A1A] text-[#FBF8F3]" : "bg-[#F7F3EC] text-[#8A8A8A]"
                      }`}>
                        <MapPin size={16} className={isActive ? "text-[#C97A4A]" : ""} />
                      </div>

                      <div className="flex flex-col">
                        <span className="font-sans text-sm font-semibold text-[#1A1A1A]">
                          {region.name}
                        </span>
                        <span className="text-xs font-sans text-[#8A8A8A] font-light mt-0.5">
                          {region.description}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-sans font-bold text-[#8A8A8A] uppercase tracking-wide">
                        {region.estates}
                      </span>
                      <ArrowRight
                        size={14}
                        className={`text-[#8A8A8A] transition-all duration-300 ${
                          isActive ? "text-[#C97A4A] translate-x-1.5" : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
