import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Award } from "lucide-react";

const data = [
  {
    title: "DPIIT Recognition (2024)",
    desc: `We are proud to announce that "Makes360" is a registered trademark under the Government of India since February 2023.This official recognition affirms our commitment to building a trusted, original, and legally protected brand in the digital and software services industry.`,
    img: "RecognitionSlider/trademark.png",
  },

  {
    title: "Recognized by DPIIT – Government of India (2024)",
    desc: `In 2024, Makes360 was officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Government of India.This recognition strengthens our position as an innovative and scalable startup, contributing to the digital transformation of businesses across the nation.`,
    img: "RecognitionSlider/dpiit-certified.png",
  },
  {
    title: "Best Entrepreneur Award 2024 – Presented by Ashneer Grover",
    desc: "Our Founder & CEO, Anish Kumar, was honored with the Best Entrepreneur Award in 2024, presented by renowned business leader Ashneer Grover.This award recognizes his outstanding leadership, innovation, and contribution to building Makes360 into a fast-growing, tech-driven brand.",
    img: "RecognitionSlider/best-entrepreneur.png",
  },
  {
    title: "Once again, we’re on top! 🏆",
    desc: "After our success in Mohali, Makes360 (AGI Innovation Makes360 Pvt. Ltd.) has once again been honoured with the Best User Choice Award 2025 by Justdial — this time in Landran! This achievement reinforces our commitment to delivering excellence, innovation, and unmatched client satisfaction. A heartfelt thank you to all our amazing clients who continues to trust, support, and grow with us. 🙌",
    img: "RecognitionSlider/mohali-best-user-choice.png",
  },
];







export default function RecognitionSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // AUTO SLIDE
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full blur-3xl"
        />
      </div>

      {/* HEADER */}
      <div className="relative text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          <Award size={18} />
          <span>Awards & Recognition</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Our Proud Moments & Recognition
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We've been building trust (and awesome tech) since 2018 — here's a glimpse of the love we've earned!
        </motion.p>
      </div>

      {/* SLIDER CONTAINER */}
      <div 
        className="relative mt-8 sm:mt-14 max-w-6xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* MAIN SLIDER */}
        <div className="relative min-h-[500px] sm:min-h-[450px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start md:items-center bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100 backdrop-blur-sm">
                
                {/* IMAGE */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-2 order-1"
                >
                  <img
                    src={data[index].img}
                    alt={data[index].title}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-contain rounded-lg sm:rounded-xl hover:scale-105 transition duration-700"
                  />
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="order-2 max-h-[280px] sm:max-h-[320px] md:max-h-none overflow-y-auto md:overflow-visible scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-gray-100"
                >
                  <div className="flex items-center gap-2 text-indigo-600 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-indigo-100 rounded-lg flex-shrink-0">
                      <BadgeCheck size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                      Verified Achievement
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight pr-2">
                    {data[index].title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed pr-2">
                    {data[index].desc}
                  </p>

                  {/* PROGRESS BAR */}
                  <div className="mt-4 sm:mt-6 flex items-center gap-3 pr-2">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        key={`progress-${index}`}
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "0%" : "100%" }}
                        transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium flex-shrink-0">
                      {index + 1}/{data.length}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* NAVIGATION ARROWS - Desktop */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-full justify-between -mx-16 pointer-events-none">
          <button
            onClick={handlePrev}
            className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-white hover:bg-indigo-600 text-gray-700 hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition" />
          </button>
          
          <button
            onClick={handleNext}
            className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-white hover:bg-indigo-600 text-gray-700 hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Next"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition" />
          </button>
        </div>

        {/* DOTS NAVIGATION */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 flex-wrap">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-indigo-600 to-purple-600"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* MOBILE/TABLET NAVIGATION BUTTONS */}
        <div className="flex lg:hidden justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white hover:bg-indigo-600 text-gray-700 hover:text-white rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white hover:bg-indigo-600 text-gray-700 hover:text-white rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="Next"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
