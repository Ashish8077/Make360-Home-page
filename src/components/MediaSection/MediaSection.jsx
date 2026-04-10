import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Covered by 100+ top media & tech platforms",
  "Highlighted for innovation and service quality",
  "Recognized with industry awards and titles",
];

export default function 
MediaSection() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Recognized by Leading Media & Tech Outlets
          </h2>

          <p className="text-gray-600 mt-4 max-w-lg">
            Makes360 has earned widespread recognition in both national and
            international media outlets for its innovation, digital excellence,
            and client success.
          </p>

          {/* BULLETS */}
          <div className="mt-6 space-y-3">
            {points.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-indigo-600" size={18} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "99%" }}
                transition={{ duration: 1 }}
                className="h-full bg-indigo-600"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Client Satisfaction Rate: <strong>99.3%</strong>
            </p>
          </div>

          {/* CTA */}
          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            Explore Media Coverage →
          </button>
        </div>

        {/* RIGHT - FEATURED IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-xl">
            <img 
              src="/makes360-featured-in-news.jpg" 
              alt="Makes360 Featured in News" 
              className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
            {/* Optional overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
