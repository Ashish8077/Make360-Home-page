import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "About Us",
    submenu: ["Our Story", "Our Work", "Testimonials", "Case Study"],
  },
  {
    name: "Services",
    submenu: ["Web Development", "App Development", "SEO", "Marketing"],
  },
  {
    name: "Industries",
    submenu: ["Real Estate", "Healthcare", "Startups"],
  },
  { name: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-indigo-950 shadow-lg"
          : "bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-xl font-bold text-white">Makes360</h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <div key={i} className="relative group">
              {/* NAV ITEM */}
              <div className="flex items-center gap-1 cursor-pointer align-center">
                <span className="text-white/80 hover:text-white transition font-medium">
                  {item.name}
                </span>

                {/* FIXED ICON (NO ROTATION) */}
                {item.submenu && (
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className="text-white/70 group-hover:text-white transition-all duration-200"
                  />
                )}
              </div>

              {/* DROPDOWN */}
              {item.submenu && (
                <div className="absolute left-0 top-full mt-4 w-56 max-w-[90vw] bg-white text-black rounded-xl shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.submenu.map((sub, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 text-sm"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-5 py-2 rounded-full font-semibold shadow-lg shadow-yellow-300/30 transition-all duration-200"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="inline-flex"
          >
            <Sparkles size={18} />
          </motion.span>
          Start Free Trial
        </motion.button>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-white z-50 shadow-xl p-6 overflow-y-auto"
          >
            {/* MOBILE HEADER */}
            <div className="flex justify-end mb-6">
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* MOBILE LINKS */}
            {navLinks.map((item, i) => (
              <div key={i} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer py-2 text-gray-800 font-medium"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === i ? null : i)
                  }
                >
                  {item.name}

                  {item.submenu && (
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${
                        mobileDropdown === i
                          ? "rotate-180 text-indigo-600"
                          : "text-gray-500"
                      }`}
                    />
                  )}
                </div>

                {/* SMOOTH SUBMENU */}
                <AnimatePresence>
                  {item.submenu && mobileDropdown === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {item.submenu.map((sub, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-indigo-600 transition"
                        >
                          {sub}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* MOBILE CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-orange-400 py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-black shadow-lg shadow-yellow-300/20"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <Sparkles size={16} />
              </motion.span>
              Start Free Trial
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
