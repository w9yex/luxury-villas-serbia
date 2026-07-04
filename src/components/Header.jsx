import React, { useState, useEffect } from "react";

export default function Header({ onBookClick, isDarkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      // Triggers transparency when scrolling into the FinalCTA area (bottom 1150px range of the document)
      const isAtBottom = winHeight + window.scrollY >= docHeight - 1150;
      if (window.scrollY > 50 && !isAtBottom) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out border-b ${
        isScrolled
          ? "bg-[#FBF8F3]/90 backdrop-blur-md border-[#E5E1D8] py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Modern Minimalist SVG Monogram Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div
            className={`w-10 h-10 flex items-center justify-center transition-colors duration-500 ${
              isScrolled ? "text-[#1A1A1A]" : "text-[#FBF8F3]"
            }`}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full"
            >
              {/* Outer delicate circle */}
              <circle cx="50" cy="50" r="44" className="opacity-20" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="40" className="opacity-80" />
              {/* Modern geometric L and V */}
              <path d="M38 35 V62 H52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 35 L62 62 L74 35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <div className="flex flex-col text-left">
            <span
              className={`font-logo text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-500 ${
                isScrolled ? "text-[#1A1A1A]" : "text-[#FBF8F3]"
              }`}
            >
              Luxury Villas
            </span>
            <span
              className={`text-[8px] font-sans font-semibold tracking-[0.3em] uppercase -mt-0.5 transition-colors duration-500 ${
                isScrolled ? "text-[#8A8A8A]" : "text-[#FBF8F3]/60"
              }`}
            >
              Сербия
            </span>
          </div>
        </a>

        {/* Center: Navigation Menu in Russian */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Виллы", id: "catalog" },
            { label: "Философия", id: "philosophy" },
            { label: "Локации", id: "locations" },
            { label: "Отзывы", id: "reviews" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[13px] font-sans font-medium tracking-widest uppercase transition-colors duration-500 cursor-pointer ${
                isScrolled
                  ? "text-[#1A1A1A] hover:text-[#C97A4A]"
                  : "text-[#FBF8F3] hover:text-[#C97A4A]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Theme Toggle & Adaptive CTA Button */}
        <div className="flex items-center">
          {/* Sun / Moon Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 mr-4 cursor-pointer focus:outline-none ${
              isScrolled
                ? "border-[#E5E1D8] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FBF8F3] hover:border-transparent"
                : "border-white/20 text-[#FBF8F3] hover:bg-white/15 hover:border-transparent"
            }`}
            title="Переключить тему"
          >
            {isDarkMode ? (
              // Sun icon for dark mode (revert to light)
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              // Moon icon for light mode (revert to dark)
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Adaptive CTA Button */}
          <button
            onClick={onBookClick}
            className={`relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-sans text-xs font-semibold tracking-widest uppercase rounded-full group cursor-pointer border transition-all duration-500 ${
              isScrolled
                ? "bg-[#1A1A1A] text-[#FBF8F3] border-transparent hover:shadow-lg"
                : "bg-[#FBF8F3] text-[#1A1A1A] border-transparent hover:shadow-lg"
            }`}
          >
            <span
              className={`absolute inset-0 w-full h-full transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                isScrolled ? "bg-[#C97A4A]" : "bg-[#C97A4A]"
              }`}
            ></span>
            <span
              className={`relative z-10 transition-colors duration-500 uppercase ${
                isScrolled
                  ? "group-hover:text-[#FBF8F3]"
                  : "group-hover:text-[#FBF8F3]"
              }`}
            >
              Забронировать
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
