import { motion } from "framer-motion";
import { Calculator, Download } from "lucide-react";

export default function CostCalculatorCTA() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img src="/bg.jpg" alt="bg" className="w-full h-full object-cover" />

        {/* PURPLE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-800/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* LEFT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
          >
            Get an Instant Estimate <br />
            for Your Project Cost
          </motion.h2>

          <p className="mt-4 sm:mt-5 text-gray-200 max-w-lg text-sm sm:text-base">
            Use our free cost calculator to quickly understand your project
            cost.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
            {/* PRIMARY */}
            <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg text-sm sm:text-base w-full sm:w-auto">
              <Calculator size={18} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Calculate Cost</span>
            </button>

            {/* SECONDARY */}
            <button className="flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base w-full sm:w-auto">
              <Download size={18} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Download Brochure</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <img
            src="/cost-calculator.png"
            alt="illustration"
            className="max-w-xs sm:max-w-sm w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
