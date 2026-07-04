import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);

  // Track scroll position within the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transformations for background image
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  // Parallax transformations for typography card
  const yText = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleExploreClick = () => {
    const el = document.getElementById("catalog");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-between items-center overflow-hidden px-6 md:px-12"
    >
      {/* Header gradient podlozhka for menu contrast (top ~160px) */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-black/85 via-black/30 to-transparent pointer-events-none z-20"></div>

      {/* Full-bleed Background Image & Composite Overlays with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/main.png"
          alt="Роскошная вилла в Сербии"
          style={{ y: yBg, scale: scaleBg }}
          className="w-full h-full object-cover object-center origin-center"
        />
        
        {/* Composite Layer 1: Radial gradient (center dark spot) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(10,10,10,0.65)_0%,_rgba(10,10,10,0.45)_60%,_rgba(10,10,10,0.25)_100%)] z-10"></div>
        
        {/* Composite Layer 2: Vertical linear gradient (nav & footer shading) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]/85 z-10"></div>
        
        {/* Theme-adaptive bottom gradient to blend with the stats section */}
        <div className="absolute bottom-0 left-0 w-full h-[25vh] hero-bottom-gradient z-20"></div>
      </div>

      {/* Centered Typography & CTA Box with Parallax Scroll Fading */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-30 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-24"
      >
        {/* Spotlight background behind text for ultimate readability */}
        <div className="absolute inset-0 max-w-3xl mx-auto h-[120%] bg-[radial-gradient(circle,_rgba(10,10,10,0.8)_0%,_transparent_75%)] blur-[90px] -z-10 pointer-events-none transform -translate-y-12"></div>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C97A4A] animate-pulse"></span>
          <span className="text-[11px] font-sans font-bold tracking-widest text-[#FBF8F3] uppercase">
            🏡 Эксклюзивные виллы · Сербия
          </span>
        </div>

        {/* H1 Headline - Huge, Serif/Sans mix in Russian with text shadows */}
        <h1 className="font-serif text-5xl md:text-8xl font-medium tracking-tight text-[#FBF8F3] leading-[1.05] mb-6 hero-title-shadow">
          Скрытая роскошь <br />
          <span 
            className="font-display italic font-normal text-[#C97A4A]"
            style={{ textShadow: "none" }}
          >
            первозданной
          </span>{" "}
          Сербии
        </h1>

        {/* Subtitle in Russian with text shadows for readability */}
        <p className="font-sans text-sm md:text-lg text-[#FBF8F3]/90 font-light max-w-2xl leading-relaxed mb-10 hero-desc-shadow">
          Погрузитесь в атмосферу спокойствия и уединения. Эксклюзивные дизайнерские виллы с собственными бассейнами в окружении реликтовых сосновых лесов Златибора и каньонов Тары.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleExploreClick}
          className="relative inline-flex items-center gap-3 px-8 py-3.5 bg-[#FBF8F3] text-[#1A1A1A] hover:bg-[#C97A4A] hover:text-[#FBF8F3] font-sans text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer border-0"
        >
          Посмотреть виллы
          <span className="transition-transform duration-300">→</span>
        </button>
      </motion.div>

      {/* Spacing element replacing down indicator */}
      <div className="relative z-30 pb-10"></div>
    </section>
  );
}
