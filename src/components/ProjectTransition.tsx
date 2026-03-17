import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface ProjectTransitionProps {
  project: {
    title: string;
    subtitle: string;
    year: string;
    index: string;
    route: string;
  };
  onComplete: () => void;
}

export default function ProjectTransition({ project, onComplete }: ProjectTransitionProps) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');
  const navigate = useNavigate();

  useEffect(() => {
    // Phase 1: Enter (0 → 1800ms)
    const holdTimer = setTimeout(() => setPhase('hold'), 1800);
    // Phase 2: Hold (1800 → 2600ms)
    const exitTimer = setTimeout(() => setPhase('exit'), 2600);
    // Phase 3: Navigate after exit animation starts
    const navTimer = setTimeout(() => {
      navigate(project.route);
      onComplete();
    }, 3400);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(navTimer);
    };
  }, [navigate, project.route, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="transition-overlay"
        className="fixed inset-0 z-[999] overflow-hidden flex items-center justify-center"
        initial={{ opacity: 1 }}
        style={{ backgroundColor: '#080808' }}
      >
        {/* ── Background noise grain ── */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* ── Curtain exit: two panels slide up ── */}
        {phase === 'exit' && (
          <>
            <motion.div
              className="absolute inset-0 bg-[#080808] origin-bottom"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0 }}
              style={{ transformOrigin: 'top' }}
            />
          </>
        )}

        {/* ── Central content ── */}
        <div className="relative z-10 w-full mx-auto px-6 sm:px-10 flex flex-col items-center" style={{ maxWidth: 'min(900px, 100%)' }}>

          {/* Gold line top */}
          <motion.div
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mb-12"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Index number */}
          <motion.div
            className="font-mono text-[#D4A843] text-xs tracking-[0.4em] uppercase mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Project — {project.index}
          </motion.div>

          {/* Main title — scales to always fit on screen */}
          <div className="overflow-y-hidden overflow-x-clip mb-3 w-full text-center">
            <motion.h1
              className="font-display font-extrabold leading-none tracking-[-0.02em] text-[#F4F0E8] uppercase w-full"
              style={{ fontSize: 'clamp(2.2rem, 10vw, 6.5rem)' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="font-mono text-[#A09880] text-xs sm:text-sm tracking-[0.25em] uppercase mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {project.subtitle} &nbsp;·&nbsp; {project.year}
          </motion.p>

          {/* Gold line bottom */}
          <motion.div
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mt-16"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Loading bar */}
          <div className="mt-12 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#D4A843] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.0, delay: 0.6, ease: 'linear' }}
            />
          </div>

          <motion.p
            className="font-mono text-[#5A5445] text-[10px] tracking-[0.3em] uppercase mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            Loading experience
          </motion.p>
        </div>

        {/* ── Corner decorations ── */}
        {['top-4 left-4 sm:top-8 sm:left-8', 'top-4 right-4 sm:top-8 sm:right-8', 'bottom-4 left-4 sm:bottom-8 sm:left-8', 'bottom-4 right-4 sm:bottom-8 sm:right-8'].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-6 h-6 border-[#D4A843]/30`}
            style={{
              borderTopWidth: i < 2 ? '1px' : '0',
              borderBottomWidth: i >= 2 ? '1px' : '0',
              borderLeftWidth: i % 2 === 0 ? '1px' : '0',
              borderRightWidth: i % 2 === 1 ? '1px' : '0',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
          />
        ))}

        {/* ── Gold particle dots ── */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#D4A843]"
            style={{
              left: `${15 + i * 14}%`,
              top: i % 2 === 0 ? '20%' : '80%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: 0.8 + i * 0.15,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
