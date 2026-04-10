import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, Users, MessageCircle, Target } from "lucide-react";

const stats = [
  {
    label: "Boosting Revenue",
    value: 6,
    prefix: "2X to ",
    icon: <TrendingUp />,
  },
  {
    label: "Improved Leads",
    value: 8,
    prefix: "3X to ",
    icon: <Users />,
  },
  {
    label: "Social Engagement",
    value: 8,
    prefix: "4X to ",
    icon: <MessageCircle />,
  },
  {
    label: "Brand Exposure",
    value: 1000,
    prefix: "100 to ",
    suffix: "%",
    icon: <Target />,
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Proven Results with Real Impact
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Our strategies are not just theory—they deliver measurable
          improvements across the board. From doubling revenues to massively
          increasing brand exposure, we help businesses achieve tangible growth
          through smart, data-driven marketing solutions.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 sm:mt-12">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-white/10 text-yellow-400 mb-4">
                {item.icon}
              </div>

              {/* NUMBER */}
              <p className="text-2xl sm:text-3xl font-bold text-yellow-400">
                {item.prefix}
                <CountUp end={item.value} duration={2} />
                {item.suffix}
              </p>

              {/* LABEL */}
              <p className="mt-3 text-gray-300 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
