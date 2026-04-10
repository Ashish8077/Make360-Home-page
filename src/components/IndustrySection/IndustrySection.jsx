import { motion } from "framer-motion";
import { Trophy, Building2, Store, GraduationCap } from "lucide-react";

export default function IndustrySection() {
  const industries = [
    {
      title: "Political Campaigns",
      desc: "Political party and candidates",
      icon: <Trophy />,
      color: "bg-indigo-500",
    },
    {
      title: "Real State",
      desc: "For real state business",
      icon: <Building2 />,
      color: "bg-green-500",
    },
    {
      title: "Business & Startups",
      desc: "For business & startups",
      icon: <Store />,
      color: "bg-red-500",
    },
    {
      title: "School & Coaching",
      desc: "For educational institutions",
      icon: <GraduationCap />,
      color: "bg-cyan-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white px-6 relative overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img src="/iso.png" alt="iso" className="w-14 h-14" />
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
              ISO 9001:2015
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
            WE THINK TWICE 💡 <br /> CODE ONCE {"</>"}
          </h3>

          <p className="mt-6 text-white/80 max-w-lg leading-relaxed">
            Perfect blend of innovation & ideation of Software for every
            industry. No matter who you are and which industry you belong to,
            Makes360 is here to facilitate your brand’s online venture!
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg">
            View All Industries →
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-5">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-lg hover:bg-white/20 transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}