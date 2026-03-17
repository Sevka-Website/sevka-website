import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft, Phone } from 'lucide-react';
import clsx from 'clsx';

export default function NovaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);

  const links = [
    { name: 'Home', path: '/work/novaacademy' },
    { name: 'Courses', path: '/work/novaacademy/courses' },
    { name: 'About', path: '/work/novaacademy/about' },
    { name: 'Contact', path: '/work/novaacademy/contact' },
  ];

  const isActive = (p: string) => loc.pathname === p;

  return (
    <>
      <header className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-[#0A1628] py-4'
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/work/novaacademy" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>NA</div>
            <span className={clsx('font-black text-xl tracking-tight transition-colors', scrolled ? 'text-[#0A1628]' : 'text-white')}>
              Nova<span style={{ color: '#FF6B2B' }}>Academy</span>
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <Link key={l.name} to={l.path}
                className={clsx('text-sm font-semibold transition-colors',
                  isActive(l.path) ? 'text-[#FF6B2B]' : scrolled ? 'text-[#0A1628] hover:text-[#FF6B2B]' : 'text-white/80 hover:text-white'
                )}>
                {l.name}
              </Link>
            ))}
            <a href="tel:+911800000000" className={clsx('flex items-center gap-1.5 text-sm font-semibold transition-colors', scrolled ? 'text-[#0A1628]' : 'text-white/80')}>
              <Phone size={14} /> 1800-000-0000
            </a>
            <Link to="/work/novaacademy/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
              Free Demo Class
            </Link>
          </nav>

          <button className={clsx('md:hidden', scrolled ? 'text-[#0A1628]' : 'text-white')} onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Back to Sevka */}
      <a href="/work" className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#0A1628]/90 backdrop-blur-sm text-white text-xs font-mono px-4 py-2 rounded-full border border-white/10 hover:bg-[#0A1628] transition-all shadow-lg group">
        <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
        Sevka Portfolio
      </a>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-[#0A1628] flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-black text-xl text-white">Nova<span style={{ color: '#FF6B2B' }}>Academy</span></span>
            <button onClick={() => setOpen(false)} className="text-white"><X size={28} /></button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-7">
            {links.map(l => (
              <Link key={l.name} to={l.path} className="text-3xl font-black text-white hover:text-[#FF6B2B] transition-colors">{l.name}</Link>
            ))}
            <Link to="/work/novaacademy/contact"
              className="mt-6 px-10 py-4 rounded-xl text-white font-bold text-lg"
              style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
              Book Free Demo →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
