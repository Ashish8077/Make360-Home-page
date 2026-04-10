import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Briefcase, Award, Users } from "lucide-react";

const stats = [
  {
    value: 186,
    suffix: "+",
    label: "Projects Done",
    icon: <Briefcase size={28} />,
  },
  {
    value: 8,
    suffix: "+",
    label: "Awards Won",
    icon: <Award size={28} />,
  },
  {
    value: 355,
    suffix: "+",
    label: "Happy Clients",
    icon: <Users size={28} />,
  },
];

export default function Milestones() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      
      {/* WORLD MAP BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <img 
          src="/wm.png" 
          alt="World Map" 
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>

      {/* SUBTLE GRADIENT ORBS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-600 font-semibold">Our Milestones</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
            We have already completed{" "}
            <span className="text-indigo-600">186+</span>{" "}
            projects and more counting...
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by businesses worldwide, delivering excellence across continents with proven results.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition group"
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                  {stat.icon}
                </div>
              </div>

              {/* NUMBER */}
              <h3 className="text-5xl font-bold text-gray-900">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  useEasing={true}
                />
                {stat.suffix}
              </h3>

              {/* LABEL */}
              <p className="mt-3 text-gray-600 font-semibold text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
