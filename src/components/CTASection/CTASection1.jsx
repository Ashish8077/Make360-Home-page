import { motion } from "framer-motion";
import { Calendar, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-10 md:p-14 overflow-hidden shadow-2xl text-white"
        >
          
          {/* INNER GLOW */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

            {/* LEFT CONTENT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Sparkles size={16} className="text-yellow-300" />
                <span>Let's Get Started</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              >
                Ready to start your first project with Makes360?
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-5 text-white/90 text-base sm:text-lg leading-relaxed"
              >
                Get one step ahead of the digital trends and create a monopoly business in your niche market, we are here to facilitate your brand’s online things!
              </motion.p>

              {/* BENEFITS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 space-y-3"
              >
                {[
                  "Free consultation & project estimation",
                  "Dedicated team of expert developers",
                  "On-time delivery with quality assurance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-yellow-300 flex-shrink-0" />
                    <p className="text-white/90 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA BUTTONS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <button className="flex items-center justify-center gap-2 bg-white text-indigo-600 px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                  <Calendar size={18} />
                   Book Free Consultancy
                </button>

                <button className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 px-6 py-3.5 rounded-xl font-semibold hover:bg-white/30 transition-all">
                  View Our Work
                  <ArrowRight size={18} />
                </button>
              </motion.div>

              {/* TRUST INDICATOR */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 mt-8 pt-6 border-t border-white/30"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {i === 4 ? '300+' : ''}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">300+ Happy Clients</p>
                  <p className="text-sm text-white/80">Join businesses worldwide</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative">
                {/* DECORATIVE ELEMENTS */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-full blur-2xl opacity-40" />
                
                {/* MAIN VISUAL */}
                <div className="relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-2xl">
                  <div className="w-64 h-64 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <div className="text-7xl mb-4">🚀</div>
                      <p className="text-white font-bold text-2xl">Let's Build</p>
                      <p className="text-white/90 text-base mt-2">Something Amazing</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
