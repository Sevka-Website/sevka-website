import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';

export default function NovaFooter() {
  return (
    <footer style={{ background: '#0A1628' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>NA</div>
              <span className="font-black text-xl">Nova<span style={{ color: '#FF6B2B' }}>Academy</span></span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              India's most trusted coaching institute for JEE, NEET, and Foundation courses. Results that speak for themselves.
            </p>
            <div className="flex gap-3">
              {[<Youtube size={16}/>, <Instagram size={16}/>, <Facebook size={16}/>].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#FF6B2B] transition-colors">{icon}</a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-[#FF6B2B] mb-5">Our Courses</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              {['JEE Main & Advanced', 'NEET UG', 'Foundation (Class 8–10)', 'Board Exam Prep', 'Crash Courses', 'Online Batches'].map(c => (
                <li key={c}><Link to="/work/novaacademy/courses" className="hover:text-white transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-[#FF6B2B] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              {[
                { name: 'About Us', path: '/work/novaacademy/about' },
                { name: 'Our Faculty', path: '/work/novaacademy/about' },
                { name: 'Results & Ranks', path: '/work/novaacademy/about' },
                { name: 'Free Demo Class', path: '/work/novaacademy/contact' },
                { name: 'Study Material', path: '/work/novaacademy/contact' },
              ].map(l => (
                <li key={l.name}><Link to={l.path} className="hover:text-white transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-[#FF6B2B] mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3"><MapPin size={15} className="text-[#FF6B2B] shrink-0 mt-0.5" />Nova Tower, 3rd Floor, Sector 18, Noida, UP 201301</li>
              <li className="flex items-center gap-3"><Phone size={15} className="text-[#FF6B2B]" />1800-000-0000 (Toll Free)</li>
              <li className="flex items-center gap-3"><Mail size={15} className="text-[#FF6B2B]" />admissions@novaacademy.in</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© 2025 NovaAcademy. All rights reserved. All exam names are trademarks of their respective owners.</p>
          <p>Website by <a href="/work" className="text-[#FF6B2B] hover:underline">Sevka Web Studio</a></p>
        </div>
      </div>
    </footer>
  );
}
