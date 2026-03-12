import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-void border-t border-gold/15 relative overflow-hidden">
      {/* Subtle top gradient border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Subtle noise/dot grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4A843 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-1 group w-fit">
              <span className="font-display font-bold text-3xl tracking-tight text-warm-white">
                SEVKA
              </span>
              <span className="w-2 h-2 rounded-full bg-gold mt-1 group-hover:scale-150 transition-transform" />
            </Link>
            <p className="text-muted-warm max-w-xs text-lg">
              We build websites that work. Crafted for the web. Built for growth.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {['Home', 'Work', 'Services', 'Process', 'About'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-warm-white/80 hover:text-gold hover:translate-x-1 transition-all w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-4">Connect</h4>
            <a
              href="mailto:abhishek.webstudio@gmail.com"
              className="text-warm-white/80 hover:text-gold transition-colors text-lg mb-6"
            >
              abhishek.webstudio@gmail.com
            </a>
            <div className="flex items-center gap-6">
              <a href="#" className="text-warm-white/60 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-warm-white/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-warm-white/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Sevka. All rights reserved. &middot; sevka.in</p>
          <p className="mt-4 md:mt-0">Made with precision in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
