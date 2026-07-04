import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Compass, X, MapPin } from "lucide-react";

export const locationsData = [
  {
    name: "Горы Златибор",
    estatesCount: "42 виллы",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&h=1000&q=80",
    description: "Плавные живописные склоны, бескрайние сосновые плато и потрясающие золотые рассветы."
  },
  {
    name: "Национальный парк Тара",
    estatesCount: "21 вилла",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&h=1000&q=80",
    description: "Захватывающие дух вертикальные каньоны, густые еловые леса и изумрудные воды реки Дрина."
  },
  {
    name: "Хребет Копаоник",
    estatesCount: "15 вилл",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=800&h=1000&q=80",
    description: "Высокогорные вершины, зимние горнолыжные трассы и прохладные летние альпийские луга."
  },
  {
    name: "Фрушка-Гора",
    estatesCount: "8 вилл",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&h=1000&q=80",
    description: "Исторические виноградники, тихие холмы и уединенные усадьбы с винодельнями."
  },
  {
    name: "Озеро Палич",
    estatesCount: "5 вилл",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&h=1000&q=80",
    description: "Тихий величественный озерный оазис, спа-курорты в стиле модерн и премиальные резиденции у самой воды."
  }
];

const getImageUrl = (imgSrc) => {
  if (!imgSrc) return "";
  if (imgSrc.startsWith("http")) return imgSrc;
  return `${import.meta.env.BASE_URL}${imgSrc}`;
};

export default function Locations({ selectedLoc, setSelectedLoc }) {
  const scrollContainerRef = useRef(null);

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

  const getVillasForLoc = (locName) => {
    if (locName.includes("Златибор")) {
      return [
        {
          name: "Сосновый приют (Pine Retreat)",
          price: "€520 / сутки",
          specs: "5 спален · спа-лаунж · инфинити-бассейн",
          img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=150&h=150&q=80"
        }
      ];
    } else if (locName.includes("Тара")) {
      return [
        {
          name: "Дом у реки (River House)",
          price: "€480 / сутки",
          specs: "4 спальни · причал · терраса",
          img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=150&h=150&q=80"
        }
      ];
    } else if (locName.includes("Копаоник")) {
      return [
        {
          name: "Альпийская усадьба (Alpine Estate)",
          price: "€650 / сутки",
          specs: "6 спален · ski-in трассы · винотека",
          img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=150&h=150&q=80"
        }
      ];
    } else if (locName.includes("Фрушка-Гора")) {
      return [
        {
          name: "Винная вилла Лаванда (Lavender Wine Villa)",
          price: "€490 / сутки",
          specs: "4 спальни · виноградники · дегустационный зал",
          img: "villa-lavender.png"
        }
      ];
    } else {
      return [
        {
          name: "Озерный павильон Палич (Palić Lake Pavilion)",
          price: "€580 / сутки",
          specs: "5 спален · собственный причал · спа-кабинет",
          img: "villa-palic.png"
        }
      ];
    }
  };

  return (
    <section id="locations" className="py-24 bg-[#FBF8F3] border-t border-[#E5E1D8] scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#8A8A8A] uppercase">
              РЕГИОНЫ
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A] mt-2">
              Заповедные локации
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
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

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 select-none"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE
          }}
        >
          {/* Hide Webkit Scrollbars */}
          <style>{`
            #locations ::-webkit-scrollbar {
              display: none !important;
            }
          `}</style>

          {locationsData.map((loc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedLoc(loc)}
              className="w-[290px] md:w-[360px] shrink-0 snap-start flex flex-col group text-left cursor-pointer"
            >
              {/* Image box */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-sm mb-6 bg-[#F7F3EC]">
                <img
                  src={getImageUrl(loc.image)}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                
                {/* Dark gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-[#1A1A1A]/10 to-transparent pointer-events-none" />

                {/* Bottom title inside image */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#FBF8F3]">
                  <div className="flex flex-col">
                    <span className="font-sans text-base md:text-lg font-semibold tracking-wide uppercase leading-tight">
                      {loc.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF8F3]/15 backdrop-blur-sm border border-[#FBF8F3]/10">
                    <Compass size={11} className="text-[#C97A4A]" />
                    <span className="text-[9px] font-sans font-bold tracking-widest uppercase">
                      {loc.estatesCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtext description */}
              <p className="font-sans text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed px-1">
                {loc.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Side slide-over drawer (Шторка) */}
      <AnimatePresence>
        {selectedLoc && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLoc(null)}
              className="fixed inset-0 z-50 bg-[#1A1A1A]/40 backdrop-blur-xs"
            />

            {/* Sidebar drawer body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 240 }}
              className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-[#FBF8F3] z-50 shadow-2xl border-l border-[#E5E1D8] flex flex-col overflow-y-auto"
            >
              {/* Close Button floating */}
              <button
                onClick={() => setSelectedLoc(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#1A1A1A] text-[#FBF8F3] hover:bg-[#C97A4A] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer border-0"
              >
                <X size={16} />
              </button>

              {/* Full-bleed Header landscape image background */}
              <div className="h-[240px] relative w-full shrink-0 flex items-end p-8 bg-[#1A1A1A]">
                <img
                  src={getImageUrl(selectedLoc.image)}
                  alt={selectedLoc.name}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent z-10" />

                <div className="relative z-20">
                  <div className="flex items-center gap-1.5 text-[#C97A4A] mb-1">
                    <MapPin size={11} />
                    <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em]">Регион Сербии</span>
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-[#FBF8F3] leading-tight tracking-tight uppercase">
                    {selectedLoc.name}
                  </h3>
                </div>
              </div>

              {/* Drawer Content Body */}
              <div className="p-8 flex-1 flex flex-col gap-8 text-left">
                {/* Region Description */}
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#1A1A1A] tracking-wider uppercase mb-3">
                    О регионе
                  </h4>
                  <p className="font-sans text-sm text-[#8A8A8A] font-light leading-relaxed">
                    {selectedLoc.description}
                  </p>
                </div>

                {/* Available Villas */}
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#1A1A1A] tracking-wider uppercase mb-4">
                    Доступные резиденции ({selectedLoc.estatesCount})
                  </h4>
                  <div className="space-y-4">
                    {getVillasForLoc(selectedLoc.name).map((v, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 rounded-xl border border-[#E5E1D8] bg-[#F7F3EC]/50 hover:bg-[#F7F3EC] transition-colors duration-300 group"
                      >
                        <img
                          src={getImageUrl(v.img)}
                          alt={v.name}
                          className="w-16 h-16 object-cover rounded-lg shrink-0 border border-[#E5E1D8]"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-sans text-sm font-semibold text-[#1A1A1A] leading-tight group-hover:text-[#C97A4A] transition-colors duration-300">
                              {v.name}
                            </span>
                          </div>
                          <span className="text-[11px] font-sans text-[#8A8A8A] font-light mt-1">
                            {v.specs}
                          </span>
                          <span className="text-[11px] font-sans font-bold text-[#1A1A1A] mt-2 block">
                            {v.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Note */}
                <div className="mt-auto pt-6 border-t border-[#E5E1D8] text-[11px] font-sans text-[#8A8A8A] font-light leading-relaxed">
                  Пожалуйста, обратитесь к нашему персональному консьержу, чтобы организовать трансфер и забронировать виллу в данной локации.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
