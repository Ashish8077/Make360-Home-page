import { motion } from "framer-motion";
import { Download, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white px-4 sm:px-6 relative overflow-hidden">
      {/* BACKGROUND SHAPES (SAFE) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center relative z-10">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
            Idea • Development • Branding
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Increase Your <br />
            Business Growth <br />
            <span className="text-yellow-400">By 2600%</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-lg mx-auto md:mx-0">
            Makes360 is one of the best digital consulting companies in India
            since 2018. We offer full-stack digital services that cover
            everything your business needs.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 sm:mt-8 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 sm:px-7 py-3 rounded-full font-semibold shadow-2xl shadow-yellow-300/30 transition-all duration-200 text-sm sm:text-base"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="inline-flex"
              >
                <Sparkles size={18} />
              </motion.span>
              Start Free Trial
            </motion.button>

            <button className="flex items-center justify-center gap-2 border border-white/30 px-6 sm:px-7 py-3 rounded-full hover:bg-white hover:text-black transition backdrop-blur-sm text-sm sm:text-base">
              <Download size={18} />
              Download Brochure
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-end gap-2 sm:gap-3 overflow-hidden mt-8 md:mt-0">
          {[
            "/hero/hero1.png",
            "/hero/hero2.png",
            "/hero/hero3.png",
            "/hero/hero4.png",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className={`w-16 sm:w-20 md:w-24 lg:w-32 h-40 sm:h-48 md:h-60 lg:h-80 overflow-hidden rounded-lg sm:rounded-xl shadow-2xl ${
                i % 2 === 0 ? "rotate-[-6deg]" : "rotate-[6deg]"
              }`}
            >
              <img
                src={img}
                alt="showcase"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
