import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-void border-t border-gold/15 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#D4A843 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

          <div className="md:col-span-1 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-1 group w-fit">
              <span className="font-display font-bold text-2xl tracking-tight text-warm-white">SEVKA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1 group-hover:scale-150 transition-transform" />
            </Link>
            <p className="text-muted-warm text-sm leading-relaxed">
              Premium web studio crafting high-performance websites for businesses across India and beyond.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-muted-warm hover:text-gold transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="text-muted-warm hover:text-gold transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-muted-warm hover:text-gold transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Sevka For */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-2">Sevka For</h4>
            <div className="flex flex-col gap-2.5 text-sm text-warm-white/70">
              {['Salons & Spas', 'Clinics & Doctors', 'Restaurants & Bars', 'Gyms & Fitness', 'D2C Brands', 'Real Estate'].map(item => (
                <Link key={item} to="/services" className="hover:text-gold hover:translate-x-1 transition-all w-fit">{item}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-2">Services</h4>
            <div className="flex flex-col gap-2.5 text-sm text-warm-white/70">
              {[
                { name: 'Custom Web Design', path: '/services' },
                { name: 'E-Commerce Stores', path: '/services' },
                { name: 'Landing Pages', path: '/services' },
                { name: 'SEO Optimisation', path: '/services' },
                { name: 'Hosting & Care Plans', path: '/services' },
                { name: 'View Pricing', path: '/services' },
              ].map(item => (
                <Link key={item.name} to={item.path} className="hover:text-gold hover:translate-x-1 transition-all w-fit">{item.name}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-2">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-warm-white/70">
              <a href="mailto:abhishek.webstudio@gmail.com" className="hover:text-gold transition-colors break-all">abhishek.webstudio@gmail.com</a>
              <p className="text-muted text-xs">India · Working with clients globally</p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Quick Links</p>
                <div className="flex flex-col gap-2">
                  {[{ name: 'Work', path: '/work' }, { name: 'Process', path: '/process' }, { name: 'About', path: '/about' }, { name: 'Start a Project', path: '/start' }].map(l => (
                    <Link key={l.name} to={l.path} className="text-warm-white/70 hover:text-gold hover:translate-x-1 transition-all w-fit text-sm">{l.name}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-muted gap-3">
          <p>&copy; {new Date().getFullYear()} Sevka Web Studio. All rights reserved. &middot; sevka.in</p>
          <p>Made with precision in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
