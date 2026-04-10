import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="relative rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 sm:p-10 md:p-16 text-center shadow-lg overflow-hidden">
          
          {/* subtle background shapes */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-200 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-indigo-200 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10">
            
            {/* HEADING */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 leading-tight">
              Let's create big stories together
            </h2>

            {/* SUBTEXT */}
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We don't just build digital things, we create brand. Choosing us will be your best decision
            </p>

            {/* CTA BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="whitespace-nowrap">Start with Free Demo</span>
              <ArrowRight size={18} className="flex-shrink-0" />
            </motion.button>

          </div>
        </div>
      </div>
    </section>
  );
}
