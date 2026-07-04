import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ onBookClick, isDarkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const finalCta = document.getElementById("final-cta");
      let isAtFinalCta = false;
      if (finalCta) {
        const rect = finalCta.getBoundingClientRect();
        isAtFinalCta = rect.top <= 80;
      }
      if (window.scrollY > 50 && !isAtFinalCta) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock document body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out border-b ${
          isMobileMenuOpen
            ? "bg-[#FBF8F3] dark:bg-[#0B0A0A] border-[#E5E1D8] dark:border-[#282624] py-4"
            : isScrolled
            ? "bg-[#FBF8F3]/90 backdrop-blur-md border-[#E5E1D8] py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Modern Minimalist SVG Monogram Logo */}
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3.5 group relative z-50"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center transition-colors duration-500 ${
                isMobileMenuOpen || isScrolled
                  ? "text-[#1A1A1A] dark:text-[#FBF8F3]"
                  : "text-[#FBF8F3]"
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
                  isMobileMenuOpen || isScrolled
                    ? "text-[#1A1A1A] dark:text-[#FBF8F3]"
                    : "text-[#FBF8F3]"
                }`}
              >
                Luxury Villas
              </span>
              <span
                className={`text-[8px] font-sans font-semibold tracking-[0.3em] uppercase -mt-0.5 transition-colors duration-500 ${
                  isMobileMenuOpen || isScrolled
                    ? "text-[#8A8A8A] dark:text-[#C5BFB7]"
                    : "text-[#FBF8F3]/60"
                }`}
              >
                Сербия
              </span>
            </div>
          </a>

          {/* Center: Navigation Menu in Russian (Desktop Only) */}
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

          {/* Right: Theme Toggle & Mobile Hamburger / Desktop CTA Button */}
          <div className="flex items-center relative z-50">
            {/* Sun / Moon Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 mr-4 cursor-pointer focus:outline-none ${
                isMobileMenuOpen || isScrolled
                  ? "border-[#E5E1D8] dark:border-[#282624] text-[#1A1A1A] dark:text-[#FBF8F3] hover:bg-[#1A1A1A] dark:hover:bg-[#FBF8F3] hover:text-[#FBF8F3] dark:hover:text-[#1A1A1A] hover:border-transparent"
                  : "border-white/20 text-[#FBF8F3] hover:bg-white/15 hover:border-transparent"
              }`}
              title="Переключить тему"
            >
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Desktop CTA Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className={`hidden sm:inline-flex relative items-center justify-center px-6 py-2.5 overflow-hidden font-sans text-xs font-semibold tracking-widest uppercase rounded-full group cursor-pointer border transition-all duration-500 ${
                isMobileMenuOpen || isScrolled
                  ? "bg-[#1A1A1A] dark:bg-[#F7F3EC] text-[#FBF8F3] dark:text-[#0B0A0A] border-transparent hover:shadow-lg"
                  : "bg-[#FBF8F3] text-[#1A1A1A] border-transparent hover:shadow-lg"
              }`}
            >
              <span className="absolute inset-0 w-full h-full transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 bg-[#C97A4A]"></span>
              <span className="relative z-10 transition-colors duration-500 uppercase group-hover:text-[#FBF8F3]">
                Забронировать
              </span>
            </button>

            {/* Mobile Menu Hamburger Trigger (Only on screens < 768px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 focus:outline-none cursor-pointer ${
                isMobileMenuOpen || isScrolled
                  ? "border-[#E5E1D8] dark:border-[#282624] text-[#1A1A1A] dark:text-[#FBF8F3] hover:bg-[#1A1A1A] dark:hover:bg-[#FBF8F3] hover:text-[#FBF8F3] dark:hover:text-[#1A1A1A] hover:border-transparent"
                  : "border-white/20 text-[#FBF8F3] hover:bg-white/15 hover:border-transparent"
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-4 h-3 flex flex-col justify-between items-center">
                <span
                  className={`w-full h-[1.5px] bg-current transition-all duration-300 transform origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-current transition-all duration-300 transform origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-[#FBF8F3] dark:bg-[#0B0A0A] z-30 flex flex-col items-center justify-center px-8"
          >
            {/* Elegant Grid Lines overlay on mobile menu background */}
            <div className="absolute inset-0 grid grid-cols-5 pointer-events-none opacity-20 dark:opacity-10">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-r border-[#C97A4A] border-dashed h-full" />
              ))}
            </div>

            <nav className="flex flex-col items-center gap-10 relative z-10">
              {[
                { label: "Виллы", id: "catalog" },
                { label: "Философия", id: "philosophy" },
                { label: "Локации", id: "locations" },
                { label: "Отзывы", id: "reviews" },
              ].map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.45, ease: "easeOut" }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Add slight delay to allow overlay exit transition to run first
                    setTimeout(() => {
                      scrollToSection(item.id);
                    }, 300);
                  }}
                  className="text-3xl font-serif font-medium tracking-[0.1em] text-[#1A1A1A] dark:text-[#FBF8F3] hover:text-[#C97A4A] dark:hover:text-[#C97A4A] transition-colors uppercase cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile CTA inside menu */}
              <motion.button
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.45, ease: "easeOut" }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    onBookClick();
                  }, 300);
                }}
                className="mt-8 px-10 py-4 bg-[#C97A4A] text-[#FBF8F3] text-sm font-semibold tracking-widest uppercase rounded-full shadow-lg cursor-pointer border-0 active:scale-95 transition-transform"
              >
                Забронировать отдых
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
