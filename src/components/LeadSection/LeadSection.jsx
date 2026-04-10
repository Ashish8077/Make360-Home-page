import { motion } from "framer-motion";
import { Star, Download } from "lucide-react";

export default function LeadSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="order-2 md:order-1">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
          >
            Grab <span className="text-yellow-400">36% OFF</span> <br />
            Start Your Project in 2 Hours!
          </motion.h2>

          <p className="mt-4 sm:mt-5 text-gray-300 max-w-lg text-sm sm:text-base">
            Trusted by 300+ businesses, we deliver high-performance web, app &
            marketing solutions backed by real results.
          </p>

          {/* OUR PARTNERS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 sm:mt-6"
          >
            <img 
              src="/our-partner.png" 
              alt="Our Partners" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </motion.div>

          {/* STATS */}
          <div className="flex items-center gap-2 mt-5 sm:mt-6 text-xs sm:text-sm">
            <Star className="text-yellow-400 flex-shrink-0" size={18} />
            <span className="leading-tight">
              <strong>4.9/5</strong> on Google | 350+ Clients | 100+ Projects
            </span>
          </div>

          {/* CTA */}
          <button className="mt-6 sm:mt-8 flex items-center justify-center gap-2 bg-yellow-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg text-sm sm:text-base w-full sm:w-auto">
            <Download size={18} className="flex-shrink-0" />
            Download Brochure
          </button>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white text-black rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 order-1 md:order-2"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Get free quotations</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
            Fill the form and our team will contact you shortly.
          </p>

          <form className="space-y-4 sm:space-y-5">
            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* PHONE + COUNTRY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Contact Number</label>
                <input 
                  type="tel" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Country</label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white">
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>

            {/* TEXTAREA */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Project Details</label>
              <textarea
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us about your requirement..."
              />
            </div>

            {/* BUTTON */}
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Get Free Quote →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
