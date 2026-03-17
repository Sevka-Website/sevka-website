import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function ClaraDentFooter() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#1B6CA8] flex items-center justify-center">
                <span className="text-white text-sm font-bold">CD</span>
              </div>
              <span className="font-bold text-xl">Clara<span className="text-[#0AAFA0]">Dent</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Caring for smiles across Mumbai since 2009. Where advanced dentistry meets a gentle touch.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1B6CA8] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1B6CA8] transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#0AAFA0] mb-5">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Root Canal', 'Teeth Whitening'].map(s => (
                <li key={s}><Link to="/work/claradent/services" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#0AAFA0] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              {[
                { name: 'About Us', path: '/work/claradent/about' },
                { name: 'Our Team', path: '/work/claradent/about' },
                { name: 'Patient Reviews', path: '/work/claradent' },
                { name: 'Book Appointment', path: '/work/claradent/contact' },
              ].map(l => (
                <li key={l.name}><Link to={l.path} className="hover:text-white transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#0AAFA0] mb-5">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3"><MapPin size={15} className="shrink-0 mt-0.5 text-[#0AAFA0]" />12, Mehta Chambers, Andheri West, Mumbai 400058</li>
              <li className="flex items-center gap-3"><Phone size={15} className="text-[#0AAFA0]" />+91 98200 55432</li>
              <li className="flex items-center gap-3"><Mail size={15} className="text-[#0AAFA0]" />hello@claradent.in</li>
              <li className="flex items-start gap-3"><Clock size={15} className="shrink-0 mt-0.5 text-[#0AAFA0]" />Mon–Sat: 9 AM – 8 PM<br/>Sun: 10 AM – 2 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2025 ClaraDent Dental Clinic. All rights reserved.</p>
          <p>Website by <a href="/work" className="text-[#0AAFA0] hover:underline">Sevka Web Studio</a></p>
        </div>
      </div>
    </footer>
  );
}
