import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

const tabs = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "CMS",
  "Design",
];

const techData = {
  Frontend: [
    { name: "React.js", img: "TechStack/react.png" },
    { name: "Angular", img: "TechStack/angular.png" },
    { name: "Vue.js", img: "TechStack/vue.png" },
    { name: "HTML5", img: "TechStack/html.png" },
  ],
  Backend: [
    { name: "Node.js", img: "TechStack/node.png" },
    { name: "Express", img: "TechStack/express.png" },
    { name: "Python", img: "TechStack/python.png" },
    { name: "PHP", img: "TechStack/php.png" },
  ],
  Mobile: [
    { name: "React Native", img: "TechStack/react.png" },
    { name: "Flutter", img: "TechStack/flutter.png" },
    { name: "Swift", img: "TechStack/swift.png" },
    { name: "Kotlin", img: "TechStack/kotlin.png" },
  ],
  Database: [
    { name: "MongoDB", img: "TechStack/mongodb.png" },
    { name: "MySQL", img: "TechStack/mysql.png" },
    { name: "PostgreSQL", img: "TechStack/postgresql.png" },
    { name: "Firebase", img: "TechStack/firebase.png" },
  ],
  CMS: [
    { name: "WordPress", img: "TechStack/wordpress.png" },
    { name: "Shopify", img: "TechStack/shopify.png" },
    { name: "Magento", img: "TechStack/magento.png" },
    { name: "Wix", img: "TechStack/wix.png" },
  ],
  Design: [
    { name: "Figma", img: "TechStack/figma.png" },
    { name: "Adobe XD", img: "TechStack/adobe-xd.png" },
    { name: "Adobe Illustrator", img: "TechStack/adobe-illustrator.png" },
    { name: "Adobe Photoshop", img: "TechStack/adobe-photoshop.png" },
  ],
};

export default function TechStack() {
  const [active, setActive] = useState("Frontend");

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Code2 size={18} />
            <span>Our Tech Stack</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Cutting-Edge Technologies We Master
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
          >
            We leverage the latest and most powerful technologies to build scalable, high-performance solutions that drive your business forward.
          </motion.p>
        </div>

        {/* TABS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === tab
                  ? "bg-white text-indigo-600 shadow-lg scale-105"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {techData[active].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                {/* IMAGE CONTAINER - LARGER */}
                <div className="bg-white rounded-xl p-6 mb-4 group-hover:shadow-lg transition-all h-24 flex items-center justify-center">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                {/* TECH NAME */}
                <p className="font-semibold text-white text-center text-base">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 rounded-2xl">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-yellow-400" />
              <span className="font-semibold text-lg">
                Ready to build something amazing?
              </span>
            </div>
            <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              Let's Talk Tech →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
