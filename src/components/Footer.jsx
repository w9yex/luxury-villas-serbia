import React from "react";

export default function Footer({ transparent }) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={
        transparent
          ? "bg-transparent border-t border-white/10 pt-16 pb-10 text-[#FBF8F3] relative z-20 w-full mt-12"
          : "bg-[#F7F3EC] border-t border-[#E5E1D8] pt-20 pb-12 text-[#1A1A1A] transition-colors duration-500"
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b ${
            transparent ? "border-white/10" : "border-[#E5E1D8]"
          }`}
        >
          {/* Logo & Slogan Column (50% width on desktop) */}
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <a href="#" className="flex items-center gap-3.5 group mb-6">
              <div
                className={`w-10 h-10 flex items-center justify-center ${
                  transparent ? "text-[#FBF8F3]" : "text-[#1A1A1A]"
                }`}
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full"
                >
                  <circle cx="50" cy="50" r="44" className="opacity-20" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="40" className="opacity-80" />
                  <path d="M38 35 V62 H52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 35 L62 62 L74 35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span
                  className={`font-logo text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase ${
                    transparent ? "text-[#FBF8F3]" : "text-[#1A1A1A]"
                  }`}
                >
                  Luxury Villas
                </span>
                <span
                  className={`text-[8px] font-sans font-semibold tracking-[0.3em] uppercase -mt-0.5 ${
                    transparent ? "text-[#FBF8F3]/60" : "text-[#8A8A8A]"
                  }`}
                >
                  Сербия
                </span>
              </div>
            </a>
            <p
              className={`font-sans text-xs md:text-sm font-light leading-relaxed max-w-sm ${
                transparent ? "text-[#FBF8F3]/70" : "text-[#8A8A8A]"
              }`}
            >
              Коллекция уединенных ретритов, созданных для восстановления сил, с захватывающими видами и незаметным персональным консьерж-сервисом.
            </p>
          </div>

          {/* Navigation links columns (50% width on desktop) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 text-left md:pl-20">
            {/* Column 1 */}
            <div>
              <h4
                className={`font-serif text-xs font-bold tracking-wider uppercase mb-5 ${
                  transparent ? "text-[#FBF8F3]" : "text-[#1A1A1A]"
                }`}
              >
                Навигация
              </h4>
              <ul className="space-y-3.5">
                {[
                  { label: "Каталог вилл", id: "catalog" },
                  { label: "Наша философия", id: "philosophy" },
                  { label: "Карта локаций", id: "locations" },
                  { label: "Отзывы гостей", id: "reviews" },
                ].map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`text-xs font-sans hover:text-[#C97A4A] transition-colors duration-300 cursor-pointer border-0 p-0 bg-transparent ${
                        transparent ? "text-[#FBF8F3]/60" : "text-[#8A8A8A]"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4
                className={`font-serif text-xs font-bold tracking-wider uppercase mb-5 ${
                  transparent ? "text-[#FBF8F3]" : "text-[#1A1A1A]"
                }`}
              >
                Услуги
              </h4>
              <ul
                className={`space-y-3.5 text-xs font-sans ${
                  transparent ? "text-[#FBF8F3]/60" : "text-[#8A8A8A]"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-[#C97A4A] transition-colors duration-300">
                    Индивидуальный консьерж
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C97A4A] transition-colors duration-300">
                    Персональный шеф-повар
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C97A4A] transition-colors duration-300">
                    Аренда вертолетов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C97A4A] transition-colors duration-300">
                    Для партнеров
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 gap-6">
          <span
            className={`text-[11px] font-sans font-light ${
              transparent ? "text-[#FBF8F3]/50" : "text-[#8A8A8A]"
            }`}
          >
            © {currentYear} Luxury Villas Serbia. Все права защищены. Создано для взыскательных путешественников.
          </span>

          <div className="flex items-center gap-6">
            {[
              {
                label: "Instagram",
                path: (
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                ),
                paths: [
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />,
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                ]
              },
              {
                label: "YouTube",
                path: (
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                ),
                paths: [<polygon points="10 15 15 12 10 9" />]
              },
              {
                label: "Pinterest",
                path: <circle cx="12" cy="12" r="10" />,
                paths: [<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />]
              }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.label}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  transparent
                    ? "border-white/15 bg-white/5 hover:bg-[#C97A4A] text-[#FBF8F3] hover:text-[#FBF8F3] hover:border-[#C97A4A]"
                    : "border-[#E5E1D8] bg-[#FBF8F3] hover:bg-[#1A1A1A] hover:text-[#FBF8F3] hover:border-[#1A1A1A] text-[#8A8A8A]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {social.path}
                  {social.paths}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
