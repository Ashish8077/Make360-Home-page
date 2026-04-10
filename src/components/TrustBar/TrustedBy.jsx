import { motion } from "framer-motion";

const badges = [
  {
    title: "ISO Certified Company",
    img: "/Trusted/makes360-iso-certified-company.png",
  },
  {
    title: "Supported by NITI Aayog",
    img: "/Trusted/supported-by-niti-aayog.png",
  },
  {
    title: "Supported by ACIC RISE",
    img: "/Trusted/supported-by-acic-rise.png",
  },
  {
    title: "Supported by Startup India",
    img: "Trusted/supported-by-startup-india.png",
  },
];

export default function TrustedBadges() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Top Digital Consulting Company
        </motion.h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Makes360 is a results-driven digital agency founded in 2018,
          empowering 300+ businesses across 10+ countries with web design,
          development, mobile app development, ERP, CRM, and marketing
          solutions. We deliver up to 2600% business growth, backed by a 30-day
          money-back guarantee.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-12">
          {badges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="h-16 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-12 object-contain grayscale group-hover:grayscale-0 transition"
                />
              </div>

              {/* TITLE */}
              <p className="mt-5 font-medium text-gray-700 group-hover:text-black transition">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
