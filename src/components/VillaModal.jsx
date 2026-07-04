import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, CheckCircle2, Star, ShieldCheck, Mail, Calendar, User } from "lucide-react";

const getImageUrl = (imgSrc) => {
  if (!imgSrc) return "";
  if (imgSrc.startsWith("http")) return imgSrc;
  return `${import.meta.env.BASE_URL}${imgSrc}`;
};

export default function VillaModal({ villa, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next (slide left), -1 = prev (slide right)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", date: "", guests: "2" });

  if (!villa) return null;

  const nextImage = () => {
    setDirection(1);
    setActiveImageIdx((prev) => (prev + 1) % villa.images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setActiveImageIdx((prev) => (prev - 1 + villa.images.length) % villa.images.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Slider variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative bg-[#FBF8F3] max-w-5xl w-full rounded-2xl md:rounded-3xl shadow-2xl border border-[#E5E1D8] overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#1A1A1A] hover:bg-[#C97A4A] text-[#FBF8F3] flex items-center justify-center transition-colors duration-300 shadow-md cursor-pointer border-0"
          >
            <X size={16} />
          </button>

          {/* Left Side: Photo Slider with smooth slide transitions */}
          <div className="w-full md:w-[55%] relative h-[250px] md:h-auto min-h-[250px] md:min-h-0 bg-[#1A1A1A] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={activeImageIdx}
                src={getImageUrl(villa.images[activeImageIdx])}
                alt={`${villa.name} slide`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>
            
            {/* Dark gradient base overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

            {/* Slider Navigation */}
            {villa.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FBF8F3]/20 hover:bg-[#FBF8F3]/40 text-[#FBF8F3] backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer border-0 z-20"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FBF8F3]/20 hover:bg-[#FBF8F3]/40 text-[#FBF8F3] backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer border-0 z-20"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  {villa.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > activeImageIdx ? 1 : -1);
                        setActiveImageIdx(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 border-0 cursor-pointer ${
                        idx === activeImageIdx ? "w-6 bg-[#C97A4A]" : "w-1.5 bg-[#FBF8F3]/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Side: Details & Form */}
          <div className="w-full md:w-[45%] p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[calc(90vh-250px)] md:max-h-[85vh]">
            
            {/* Success Overlay */}
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#F7F3EC] flex items-center justify-center mb-6 border border-[#C97A4A]">
                  <CheckCircle2 size={32} className="text-[#C97A4A]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">
                  Запрос отправлен
                </h3>
                <p className="font-sans text-sm text-[#8A8A8A] font-light leading-relaxed max-w-xs mb-8">
                  Спасибо, <span className="font-semibold text-[#1A1A1A]">{formData.name}</span>. Наш персональный хост зарезервировал выбранные вами даты и свяжется с вами по адресу <span className="font-semibold text-[#1A1A1A]">{formData.email}</span> в течение 15 минут.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#1A1A1A] text-[#FBF8F3] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#C97A4A] transition-colors duration-300 border-0 cursor-pointer"
                >
                  Закрыть окно
                </button>
              </motion.div>
            ) : (
              <>
                {/* Details Section */}
                <div className="text-left">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Star size={12} className="text-[#C97A4A] fill-[#C97A4A]" />
                    <Star size={12} className="text-[#C97A4A] fill-[#C97A4A]" />
                    <Star size={12} className="text-[#C97A4A] fill-[#C97A4A]" />
                    <Star size={12} className="text-[#C97A4A] fill-[#C97A4A]" />
                    <Star size={12} className="text-[#C97A4A] fill-[#C97A4A]" />
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#8A8A8A] uppercase ml-1">
                      Рейтинг 5.0
                    </span>
                  </div>
                  
                  <h2 className="font-sans text-2xl font-bold tracking-tight text-[#1A1A1A]">
                    {villa.name}
                  </h2>
                  <span className="text-xs font-sans font-medium text-[#8A8A8A] uppercase tracking-widest mt-1 block">
                    {villa.location}
                  </span>

                  <p className="font-sans text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed mt-4 mb-6 border-b border-[#E5E1D8] pb-5">
                    {villa.description}
                  </p>

                  {/* Amenities List */}
                  <h4 className="font-serif text-xs font-bold text-[#1A1A1A] tracking-wider uppercase mb-3">
                    Премиальные удобства
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 border-b border-[#E5E1D8] pb-5">
                    {villa.amenities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-left">
                        <ShieldCheck size={12} className="text-[#C97A4A] shrink-0" />
                        <span className="font-sans text-[11px] md:text-xs text-[#1A1A1A] font-light truncate">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Form */}
                <div className="text-left mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans font-medium text-[#8A8A8A] uppercase tracking-wider">
                      Стоимость проживания
                    </span>
                    <span className="font-sans text-xl font-bold text-[#1A1A1A]">
                      €{villa.price} <span className="text-xs font-light text-[#8A8A8A]">/ сутки</span>
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Guest Name */}
                    <div className="relative">
                      <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше полное имя"
                        className="w-full pl-9 pr-4 py-2.5 text-xs font-sans bg-[#F7F3EC] rounded-lg border border-[#E5E1D8] focus:border-[#C97A4A] focus:outline-none transition-colors duration-300 text-[#1A1A1A]"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Электронная почта"
                        className="w-full pl-9 pr-4 py-2.5 text-xs font-sans bg-[#F7F3EC] rounded-lg border border-[#E5E1D8] focus:border-[#C97A4A] focus:outline-none transition-colors duration-300 text-[#1A1A1A]"
                      />
                    </div>

                    {/* Check-in Date & Guest count */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-3 py-2.5 text-xs font-sans bg-[#F7F3EC] rounded-lg border border-[#E5E1D8] focus:border-[#C97A4A] focus:outline-none transition-colors duration-300 text-[#1A1A1A]"
                        />
                      </div>
                      <div>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-xs font-sans bg-[#F7F3EC] rounded-lg border border-[#E5E1D8] focus:border-[#C97A4A] focus:outline-none transition-colors duration-300 text-[#1A1A1A]"
                        >
                          <option value="2">2 Гостя</option>
                          <option value="4">4 Гостя</option>
                          <option value="6">6 Гостей</option>
                          <option value="8">8 Гостей</option>
                          <option value="10">10 Гостей</option>
                          <option value="12">12 Гостей</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#1A1A1A] hover:bg-[#C97A4A] text-[#FBF8F3] text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300 cursor-pointer shadow-md mt-2 border-0"
                    >
                      Запросить бронирование
                    </button>
                  </form>
                </div>
              </>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
