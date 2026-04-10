import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Akanksha Abhishek",
    role: "MD @ The Doctors",
    text: "Makes360 is great to work with, from a customer point of view, it is good that the team is always available. You guys have done a great job on my website",
  },
  {
    name: "Vikash Kumar",
    role: "Founder @ Vikash Institute",
    text: "Makes360 is the best company, I am getting compliments on my new web design. Our site is working and the investment paid for itself in 2-3 months",
  },
  {
    name: "Alok Pandey",
    role: "Bollywood Actor & Writer",
    text: "Even when the team of Makes360 was at their home, they always answered my calls. So I think their service is excellent. Also, their work is awesome",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50 px-6">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* HEADER */}
        <p className="text-sm text-gray-500 mb-2 tracking-wide">
          FIVE STAR RATED ⭐⭐⭐⭐⭐
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-indigo-900">
          Our Clients' Review.
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          See how we’ve made a lasting impact on our client’s lives and businesses.
        </p>

        <p className="mt-3 text-sm text-gray-500">
          ✅ 99.3% Client Satisfaction based on 296 verified reviews
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto mt-14 grid md:grid-cols-3 gap-8">
        
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            {/* USER */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-200"></div>
              <div>
                <h4 className="font-semibold text-indigo-900 text-sm">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* STARS */}
            <div className="flex gap-1 mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* SLIDER DOTS (VISUAL FIX) */}
      <div className="flex justify-center gap-2 mt-10">
        <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
}