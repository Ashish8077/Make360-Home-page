import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white px-6 pt-16 pb-10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* LEFT INFO */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Makes360</h2>

          <p className="text-white/70 text-sm leading-relaxed">
            An ISO 9001:2015 certified company | Best user's choice 2025 (Mohali & Landran By Justdial) | Top Rated In North India
          </p>

          {/* CONTACT */}
          <div className="space-y-3 text-sm text-white/80">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 9132103210
            </p>

            <p>
              Sales / Support <br />
              anish[@]makes360.com
            </p>

            <p>
              Office Hours: 10AM - 6:30 PM, Mon to Fri
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} /> hr[@]makes360.com
            </p>
          </div>

          {/* ADDRESS */}
          <div className="space-y-2 text-sm text-white/70">
            <p className="flex gap-2">
              <MapPin size={16} /> Sector - 112, Landran, PB - 140307
            </p>
            <p className="flex gap-2">
              <MapPin size={16} /> Sector 74, Mohali, PB - 160055
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Website Development</li>
            <li>Web App Development</li>
            <li>Mobile Apps Development</li>
            <li>Branding & Design</li>
            <li>Digital Marketing</li>
            <li>SEO</li>
            <li>ORM</li>
            <li>Download Brochure</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Industries</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Law Firms</li>
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>School & Coaching</li>
            <li>Finance & Insurance</li>
            <li>Travel & Tourism</li>
            <li>Fashion</li>
            <li>Gym & Fitness</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Company Gallery</li>
            <li>Location</li>
            <li>Digital Tools</li>
            <li>Payments</li>
            <li>Downloads</li>
            <li>Press Kit</li>
            <li>Feedback</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Makes360. All rights reserved.
        </p>

        <div className="flex gap-4 text-white/70">
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>
    </footer>
  );
}