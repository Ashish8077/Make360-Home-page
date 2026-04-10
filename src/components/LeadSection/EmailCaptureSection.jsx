

import { motion } from "framer-motion";

export default function EmailCaptureSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white px-6 relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Maximize Your Digital Success with Makes360
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-white/80 text-lg">
          Partner with India’s leading digital consulting firm to enhance your online presence and drive growth.
        </p>

        {/* INPUT BOX */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-full overflow-hidden shadow-xl p-2"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-6 py-4 bg-transparent text-white placeholder-white/60 outline-none"
          />

          <button className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-xl sm:rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap">
            Get Started →
          </button>
        </motion.div>
      </div>
    </section>
  );
}