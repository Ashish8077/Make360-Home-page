import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Users } from "lucide-react";

const slides = [
  {
    img: "LifeAtMakes360/team-5.png",
    text: "Makes360 receives recognition and an award from Ashneer Grover.",
  },
  {
    img: "LifeAtMakes360/team-3.png",
    text: "Sales Training: Unlocking Potential",
  },
  {
    img: "LifeAtMakes360/team-6.png",
    text: "Press Event: Sharing Our Journey",
  },
  {
    img: "LifeAtMakes360/team-7.png",
    text: "Team Workshops: Empowering Growth",
  },
];

export default function LifeAtMakes360() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Heart size={18} />
            <span>Our Culture</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Life at Makes360
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 max-w-3xl mx-auto"
          >
            Life at Makes360 is all about creativity, growth, and teamwork. We embrace innovation, celebrate achievements, and create an inspiring workplace where talent thrives and people grow together.
          </motion.p>
        </div>

        {/* SLIDER */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* MAIN SLIDER CONTAINER */}
          <div className="relative h-[300px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                {/* IMAGE */}
                <img
                  src={slides[currentIndex].img}
                  alt={slides[currentIndex].text}
                  className="w-full h-full object-cover"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* CAPTION */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8"
                >
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-2 text-white/80 mb-2">
                      <Users size={16} />
                      <span className="text-xs sm:text-sm font-medium">Team Moments</span>
                    </div>
                    <p className="text-white text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                      {slides[currentIndex].text}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION ARROWS - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white text-gray-200 hover:text-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="group-hover:scale-110 transition" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white text-gray-200 hover:text-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Next"
            >
              <ChevronRight size={20} className="group-hover:scale-110 transition" />
            </button>
          </div>

          {/* DOTS NAVIGATION */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-white"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* MOBILE NAVIGATION BUTTONS */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white text-gray-200 hover:text-indigo-600 rounded-full shadow-md hover:shadow-lg transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white text-gray-200 hover:text-indigo-600 rounded-full shadow-md hover:shadow-lg transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* SLIDE COUNTER */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-300 font-medium">
              {currentIndex + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
