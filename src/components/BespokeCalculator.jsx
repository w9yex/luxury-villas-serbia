import React, { useState, useEffect } from "react";
import { Calculator, Sparkles, Check, ArrowRight } from "lucide-react";

export default function BespokeCalculator({ onBookPackage }) {
  const villas = [
    { name: "Сосновый приют (Pine Retreat)", price: 520, location: "Горы Златибор" },
    { name: "Дом у реки (River House)", price: 480, location: "Национальный парк Тара" },
    { name: "Альпийская усадьба (Alpine Estate)", price: 650, location: "Хребет Копаоник" },
    { name: "Винная вилла Лаванда (Lavender Wine Villa)", price: 490, location: "Фрушка-Гора" },
    { name: "Озерный павильон Палич (Palić Lake Pavilion)", price: 580, location: "Озеро Палич" }
  ];

  const services = [
    { id: "chef", name: "Персональный шеф-повар (Michelin)", price: 150, type: "per_day" },
    { id: "concierge", name: "Личный консьерж-хост 24/7", price: 80, type: "per_day" },
    { id: "car", name: "Аренда премиум-авто (G-Class/Porsche)", price: 250, type: "per_day" },
    { id: "helicopter", name: "VIP-трансфер на вертолете", price: 1200, type: "one_time" }
  ];

  const [selectedVillaIdx, setSelectedVillaIdx] = useState(0);
  const [nightsCount, setNightsCount] = useState(5);
  const [selectedServices, setSelectedServices] = useState({
    chef: false,
    concierge: false,
    car: false,
    helicopter: false
  });
  const [totalCost, setTotalCost] = useState(0);
  const [animatedCost, setAnimatedCost] = useState(0);

  const selectedVilla = villas[selectedVillaIdx];

  // Calculate total costs
  useEffect(() => {
    let cost = selectedVilla.price * nightsCount;
    
    services.forEach((service) => {
      if (selectedServices[service.id]) {
        if (service.type === "per_day") {
          cost += service.price * nightsCount;
        } else {
          cost += service.price;
        }
      }
    });

    setTotalCost(cost);
  }, [selectedVillaIdx, nightsCount, selectedServices]);

  // Smooth number counting transition
  useEffect(() => {
    let start = animatedCost;
    const end = totalCost;
    if (start === end) return;

    const duration = 400; // ms
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= steps) {
        setAnimatedCost(end);
        clearInterval(timer);
      } else {
        setAnimatedCost(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalCost]);

  const toggleService = (serviceId) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const handleBookingSubmit = () => {
    if (onBookPackage) {
      // Find corresponding villa object structure to match modal structure
      const mockVillaObj = {
        name: selectedVilla.name,
        price: selectedVilla.price,
        location: selectedVilla.location,
        description: `Индивидуальный пакет проживания на ${nightsCount} ночей с VIP-услугами.`,
        amenities: ["Всё включено", "Индивидуальный трансфер", "VIP-обслуживание"],
        images: [
          selectedVillaIdx === 0 ? "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" :
          selectedVillaIdx === 1 ? "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" :
          selectedVillaIdx === 2 ? "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" :
          selectedVillaIdx === 3 ? "villa-lavender.png" : "villa-palic.png"
        ]
      };
      onBookPackage(mockVillaObj);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#F7F3EC]/40 border-t border-[#E5E1D8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-left mb-16">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#8A8A8A] uppercase block mb-3">
            КОНСЬЕРЖ-ПАКЕТЫ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A]">
            Соберите свой ретрит
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed mt-4 max-w-xl">
            Сформируйте идеальные условия проживания, выбрав одну из пяти элитных вилл и добавив премиальное сопровождение от нашей консьерж-службы.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Input parameters (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBF8F3] border border-[#E5E1D8] rounded-3xl p-6 md:p-10 space-y-8 text-left shadow-sm">
            
            {/* Step 1: Select Villa */}
            <div>
              <label className="font-sans text-[11px] font-bold text-[#1A1A1A] block mb-3.5 uppercase tracking-[0.15em] opacity-80">
                1. Выберите виллу
              </label>
              <div className="relative">
                <select
                  value={selectedVillaIdx}
                  onChange={(e) => setSelectedVillaIdx(parseInt(e.target.value))}
                  className="w-full px-4 py-3.5 text-xs font-sans bg-[#F7F3EC] rounded-xl border border-[#E5E1D8] focus:border-[#C97A4A] focus:outline-none transition-colors duration-300 text-[#1A1A1A] font-medium appearance-none cursor-pointer"
                >
                  {villas.map((villa, idx) => (
                    <option key={idx} value={idx}>
                      {villa.name} — €{villa.price} / сутки ({villa.location})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]">
                  ▼
                </div>
              </div>
            </div>

            {/* Step 2: Slider for Nights */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-sans text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.15em] opacity-80">
                  2. Длительность проживания
                </label>
                <span className="font-sans text-xs font-bold text-[#C97A4A] bg-[#C97A4A]/10 px-2.5 py-1 rounded-full">
                  {nightsCount} {nightsCount === 1 ? "ночь" : nightsCount < 5 ? "ночи" : "ночей"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={nightsCount}
                onChange={(e) => setNightsCount(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#E5E1D8] rounded-lg appearance-none cursor-pointer accent-[#C97A4A]"
              />
              <div className="flex justify-between text-[10px] font-sans text-[#8A8A8A] mt-2 font-medium">
                <span>1 ночь</span>
                <span>10 ночей</span>
                <span>20 ночей</span>
                <span>30 ночей</span>
              </div>
            </div>

            {/* Step 3: Checkboxes for VIP services */}
            <div>
              <label className="font-sans text-[11px] font-bold text-[#1A1A1A] block mb-4 uppercase tracking-[0.15em] opacity-80">
                3. Дополнительные премиум-услуги
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {services.map((service) => {
                  const isChecked = selectedServices[service.id];
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group select-none ${
                        isChecked
                          ? "bg-[#F7F3EC] border-[#C97A4A]"
                          : "bg-[#F7F3EC]/30 border-[#E5E1D8] hover:bg-[#F7F3EC]/60"
                      }`}
                    >
                      <div className="flex flex-col text-left mr-2">
                        <span className="font-sans text-xs font-semibold text-[#1A1A1A] leading-normal">
                          {service.name}
                        </span>
                        <span className="text-[10px] font-sans text-[#8A8A8A] font-light mt-1">
                          +€{service.price} {service.type === "per_day" ? "/ сутки" : "разово"}
                        </span>
                      </div>
                      
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isChecked ? "bg-[#C97A4A] border-[#C97A4A] text-[#FBF8F3]" : "border-[#E5E1D8] bg-white group-hover:border-[#C97A4A]"
                      }`}>
                        {isChecked && <Check size={12} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Bill Invoice Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#FBF8F3] border border-[#E5E1D8] rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            
            {/* Top design background line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C97A4A]"></div>

            <div className="text-left">
              <h3 className="font-sans text-xs font-bold text-[#1A1A1A] mb-6 uppercase tracking-[0.15em] opacity-80 pt-2">
                Детализация пакета
              </h3>

              {/* Bill Details */}
              <div className="space-y-4 text-xs font-sans text-[#8A8A8A] font-light">
                
                {/* Villa Subtotal */}
                <div className="flex justify-between items-end pb-3.5 border-b border-[#E5E1D8]">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#1A1A1A]">{selectedVilla.name}</span>
                    <span className="text-[10px] mt-0.5">€{selectedVilla.price} x {nightsCount} ночей</span>
                  </div>
                  <span className="font-semibold text-[#1A1A1A]">€{selectedVilla.price * nightsCount}</span>
                </div>

                {/* Services Itemization */}
                <div className="space-y-3">
                  {services.map((service) => {
                    if (!selectedServices[service.id]) return null;
                    const calculatedPrice = service.type === "per_day" ? service.price * nightsCount : service.price;
                    return (
                      <div key={service.id} className="flex justify-between items-center text-[11px]">
                        <span>{service.name}</span>
                        <span className="font-medium text-[#1A1A1A]">€{calculatedPrice}</span>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* Total Block */}
            <div className="mt-8 pt-6 border-t border-[#E5E1D8] text-left">
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-xs font-sans font-bold tracking-wider uppercase text-[#8A8A8A]">
                  Оценочная стоимость:
                </span>
                <span className="font-sans text-3xl font-extrabold text-[#1A1A1A]">
                  €{animatedCost.toLocaleString()}
                </span>
              </div>

              {/* CTA Booking Button */}
              <button
                onClick={handleBookingSubmit}
                className="w-full py-4 bg-[#1A1A1A] hover:bg-[#C97A4A] text-[#FBF8F3] text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md border-0"
              >
                Отправить запрос бронирования
                <ArrowRight size={14} />
              </button>

              <span className="text-[10px] font-sans text-[#8A8A8A] font-light block text-center mt-3 leading-relaxed">
                Наш приватный хост свяжется с вами, чтобы согласовать график трансферов, детали меню и подтвердить бронирование.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
