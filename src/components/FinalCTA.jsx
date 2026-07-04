import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const containerRef = useRef(null);

  // Monitor scroll progression specifically for the final CTA area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth, subtle vertical translation and scaling parallax for background photo
  // No layout shifts or container width changes to eliminate motion sickness
  const yBg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden z-20 bg-[#FBF8F3]"
    >
      
      {/* Static Full-Bleed Background Image Wrapper with Gentle Scroll Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <motion.img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&h=800&q=80"
          alt="Luxury Villa Terrace Sunset"
          style={{ y: yBg, scale: scaleBg }}
          className="absolute inset-0 w-full h-full object-cover object-center origin-center"
        />

        {/* Dynamic Dark Dimming Vignette Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/90 z-10 pointer-events-none"
        />

        {/* Heavy Bottom-up Vignette specifically to darken the bright white terrace floor in the photo */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Centered Invitation Card (Natively positioned, fully visible) */}
      <motion.div
        initial={{ opacity: 0.7, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-lg w-full px-6"
      >
        <div className="bg-[#FBF8F3]/95 border border-[#E5E1D8] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          
          {emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-left sm:text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#F7F3EC] flex items-center justify-center mb-4 mx-auto border border-[#C97A4A]">
                <CheckCircle2 size={24} className="text-[#C97A4A]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2">
                Запрос отправлен
              </h3>
              <p className="font-sans text-xs text-[#8A8A8A] font-light leading-relaxed max-w-xs mx-auto">
                Мы отправили нашу брошюру и сезонный каталог на адрес <span className="font-semibold text-[#1A1A1A]">{email}</span>. Наш консьерж свяжется с вами в ближайшее время.
              </p>
            </motion.div>
          ) : (
            <>
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#8A8A8A] uppercase mb-3 block">
                ЛИЧНОЕ ПРИГЛАШЕНИЕ
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[#1A1A1A] leading-tight mb-4">
                Ваш идеальный отдых ждёт
              </h2>
              
              <p className="font-sans text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed mb-8">
                Подпишитесь, чтобы получать сезонные обновления нашего каталога, эксклюзивные предложения от авиапартнеров и доступ к закрытой аренде вилл в Сербии.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш электронный адрес"
                    className="w-full pl-9 pr-4 py-3 text-xs font-sans bg-[#F7F3EC] rounded-full border border-[#E5E1D8] focus:border-[#C97A4A] focus:outline-none transition-colors duration-300 text-[#1A1A1A]"
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-6 bg-[#1A1A1A] hover:bg-[#C97A4A] text-[#FBF8F3] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors duration-300 shadow-md cursor-pointer shrink-0 border-0"
                >
                  Связаться
                </button>
              </form>
            </>
          )}

        </div>
      </motion.div>
    </section>
  );
}
