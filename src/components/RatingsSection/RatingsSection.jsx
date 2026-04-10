import { motion } from "framer-motion";

const platforms = [
  { name: "Google", rating: "4.9", img: "Rating/google.png" },
  { name: "Trustpilot", rating: "4.5", img: "Rating/trustpilot.png" },
  { name: "Justdial", rating: "4.9", img: "Rating/justdial.png" },
  { name: "Glassdoor", rating: "4.9", img: "Rating/glassdoor.png" },
  { name: "Clutch", rating: "5.0", img: "Rating/clutch.png" },
  { name: "GoodFirms", rating: "5.0", img: "Rating/goodfirm.png" },
];

export default function RatingsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Rated & Trusted by Top Platforms
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Recognized for excellence, we’re a top-rated choice across leading platforms. See why businesses and users trust us for quality and innovation.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {platforms.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl text-center hover:bg-white/20 transition"
            >
              {/* LOGO */}
              <img
                src={item.img}
                alt={item.name}
                className="h-8 mx-auto mb-3 object-contain"
              />

              {/* RATING */}
              <p className="text-xl font-bold">{item.rating}</p>

              {/* STARS */}
              <div className="text-yellow-400 text-sm mt-1">⭐⭐⭐⭐⭐</div>

              {/* NAME */}
              <p className="text-xs text-gray-300 mt-1">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
