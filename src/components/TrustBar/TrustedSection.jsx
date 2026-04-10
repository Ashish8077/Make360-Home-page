import { motion } from "framer-motion";

const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
];

export default function TrustedSection() {
  return (
    <section className="py-20 bg-white px-6 overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-indigo-600 font-semibold mb-4"
        >
          Our Clients
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Trusted by 355+ Industry Leaders
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600"
        >
          We are proud to have partnered with a wide range of clients from various industries. These companies trust us to deliver high-quality digital solutions tailored to their needs.
        </motion.p>
      </div>

      {/* LOGO STRIP */}
      <div className="mt-12 relative">
        
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 w-max"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[140px] h-20 bg-gray-50 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 px-4"
            >
              <img
                src={logo}
                alt={`Client logo ${i + 1}`}
                className="max-h-12 max-w-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}