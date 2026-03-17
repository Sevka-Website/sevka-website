import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import clsx from 'clsx';

export default function ClaraDentNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/work/claradent' },
    { name: 'Services', path: '/work/claradent/services' },
    { name: 'About', path: '/work/claradent/about' },
    { name: 'Contact', path: '/work/claradent/contact' },
  ];

  return (
    <>
      <header className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/work/claradent" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1B6CA8] flex items-center justify-center">
              <span className="text-white text-xs font-bold">CD</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-[#0D1B2A]">Clara<span className="text-[#1B6CA8]">Dent</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link key={link.name} to={link.path}
                className={clsx('text-sm font-medium transition-colors', location.pathname === link.path ? 'text-[#1B6CA8]' : 'text-[#4A5568] hover:text-[#1B6CA8]')}>
                {link.name}
              </Link>
            ))}
            <Link to="/work/claradent/contact"
              className="px-5 py-2.5 bg-[#1B6CA8] text-white text-sm font-semibold rounded-lg hover:bg-[#155694] transition-colors">
              Book Appointment
            </Link>
          </nav>

          <button className="md:hidden text-[#0D1B2A]" onClick={() => setMenuOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Back to Sevka — subtle floating pill */}
      <a href="/work"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#0D1B2A]/90 backdrop-blur-sm text-white text-xs font-mono px-4 py-2 rounded-full border border-white/10 hover:bg-[#0D1B2A] transition-all shadow-lg group">
        <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
        Sevka Portfolio
      </a>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/work/claradent" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1B6CA8] flex items-center justify-center">
                <span className="text-white text-xs font-bold">CD</span>
              </div>
              <span className="font-bold text-xl text-[#0D1B2A]">Clara<span className="text-[#1B6CA8]">Dent</span></span>
            </Link>
            <button onClick={() => setMenuOpen(false)}><X size={28} className="text-[#0D1B2A]" /></button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-6">
            {links.map(link => (
              <Link key={link.name} to={link.path} className="text-2xl font-bold text-[#0D1B2A] hover:text-[#1B6CA8] transition-colors">{link.name}</Link>
            ))}
            <Link to="/work/claradent/contact" className="mt-4 px-10 py-4 bg-[#1B6CA8] text-white font-semibold rounded-lg text-lg">Book Appointment</Link>
          </div>
        </div>
      )}
    </>
  );
}
