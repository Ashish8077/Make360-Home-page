import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Rated 4.9+ on Google, Justdial, and Glassdoor",
  "Recognized by Clutch & GoodFirms as top agency",
  "Trusted by thousands of growing businesses",
  "Featured in multiple media outlets",
  "ISO certified for quality & customer satisfaction",
];

export default function AwardsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Awards & Recognition
          </h2>

          <p className="text-gray-300 mt-4 max-w-lg leading-relaxed">
            At Makes360, our commitment to innovation, transparency, and client satisfaction has earned us top ratings from the most trusted platforms worldwide. Whether it’s Google, Clutch, Trustpilot, or GoodFirms – our consistent 5-star service speaks volumes. We believe in delivering excellence every single day, and the world has taken notice.
          </p>

          {/* BULLETS */}
          <div className="mt-6 space-y-3">
            {points.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-yellow-400 mt-1" />
                <p className="text-gray-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - AWARDS IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
            <img 
              src="/awards-certifications-min.png" 
              alt="Awards and Certifications" 
              className="w-full h-auto rounded-xl drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
