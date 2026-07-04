import React from "react";
import { Trees, Shield, Sparkles } from "lucide-react";

export default function Philosophy() {
  const values = [
    { icon: <Shield size={14} className="text-[#C97A4A]" />, label: "Абсолютное уединение" },
    { icon: <Trees size={14} className="text-[#C97A4A]" />, label: "Альпийская природа" },
    { icon: <Sparkles size={14} className="text-[#C97A4A]" />, label: "Невидимый сервис" },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#FBF8F3] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Metadata / Labels */}
          <div className="lg:col-span-4 flex flex-col justify-between border-l-2 border-[#C97A4A] pl-8">
            <div>
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#8A8A8A] uppercase">
                ОСНОВАНО В 2011 ГОДУ
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[#1A1A1A] mt-2 mb-8">
                Философия тишины
              </h2>
            </div>
            
            {/* Value Tags */}
            <div className="flex flex-col gap-3">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 self-start px-4 py-2 bg-[#F7F3EC] rounded-full border border-[#E5E1D8]"
                >
                  {val.icon}
                  <span className="font-sans text-xs font-semibold tracking-wider text-[#1A1A1A] uppercase">
                    {val.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Manifesto */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            <p className="font-serif text-2xl md:text-[32px] text-[#1A1A1A] font-light leading-relaxed tracking-wide mb-6">
              Мы верим в <span className="font-display italic text-[#C97A4A]">тихую роскошь</span>. В эпоху бесконечного шума мы создаем убежища, возвращающие внутренний покой.
            </p>
            <p className="font-sans text-sm md:text-base text-[#8A8A8A] font-light leading-loose max-w-3xl">
              Мы не занимаемся массовой арендой. Наша команда лично инспектирует каждую виллу, проверяя ее удаленность от скопления туристов, наличие панорамных видов на горы или реки и использование натурального дерева и камня. Каждое бронирование сопровождается персональным хостом, который незаметно координирует трансфер, досуг и работу шеф-повара, полностью уважая ваше личное пространство.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
