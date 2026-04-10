import { motion } from "framer-motion";

const logos = [
  "/PartnersSlider/digital-ocean-partner.png",
  "/PartnersSlider/google-cloud-partner.png",
  "/PartnersSlider/hubspot-certified-partner-agency.png",
  "/PartnersSlider/meta-business-partner.png",
  "/PartnersSlider/microsoft-gold-partner.png",
  "/PartnersSlider/rapid-api.png",
];

export default function PartnersSlider() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <p className="text-gray-500 mb-6 text-sm">In Association With</p>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[120px]"
              >
                <img
                  src={logo}
                  alt="partner"
                  className="h-10 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
