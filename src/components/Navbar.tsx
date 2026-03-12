import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-void/80 backdrop-blur-md border-gold/15 py-4'
            : 'bg-transparent border-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 group">
            <span className="font-display font-bold text-2xl tracking-tight text-warm-white">
              SEVKA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1 group-hover:scale-150 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-warm-white/80 hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/start"
              className="px-5 py-2.5 text-sm font-semibold tracking-wide border border-gold text-gold hover:bg-gold hover:text-void transition-all duration-300"
            >
              Start a Project &rarr;
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-warm-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-void flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gold/15">
              <Link to="/" className="flex items-center gap-1" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="font-display font-bold text-2xl tracking-tight text-warm-white">
                  SEVKA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1" />
              </Link>
              <button
                className="text-warm-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-display text-4xl font-bold text-warm-white hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/start"
                className="mt-8 px-8 py-4 text-lg font-semibold tracking-wide bg-gold text-void w-[80%] text-center"
              >
                Start a Project &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
