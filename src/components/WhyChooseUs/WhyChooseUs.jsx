import { motion } from "framer-motion";
import { Rocket, Cpu, Megaphone, Trophy, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Rocket size={22} />,
    title: "Brand Building",
    desc: "We help to build an identity and establish a trustworthy brand presence",
  },
  {
    icon: <Cpu size={22} />,
    title: "IT Services",
    desc: "We build and develop online solutions for your guaranteed success on the Internet",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Marketing & Scaling",
    desc: "Get expert advice to streamline operations, improve efficiency, and achieve success",
  },
  {
    icon: <Trophy size={22} />,
    title: "Business Consulting",
    desc: "Offers a range of consulting services to help clients across all industries",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT - FEATURES GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 border rounded-2xl hover:shadow-lg transition group bg-gray-50"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                {item.icon}
              </div>

              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>

              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <p className="text-sm text-indigo-600 font-medium">Why Makes360?</p>

          <h2 className="text-4xl font-bold mt-2 leading-tight">
            Get the results first, <br /> then pay with confidence
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Makes360 believes in doing quality work and building lifelong relationships, and we will not charge you money if you are not completely satisfied with our services. That's our promise to you! Proudly offering a 30-day money-back guarantee!
          </p>

          {/* CTA */}
          <div className="flex items-center gap-6 mt-8">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md flex items-center gap-2">
              <Sparkles size={16} />
              Free Trial
            </button>

            <a href="#" className="text-indigo-600 font-medium hover:underline">
              Talk with us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
