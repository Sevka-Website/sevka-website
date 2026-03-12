import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, input, textarea, select, [data-cursor]');
      
      if (clickable) {
        setIsHovering(true);
        const text = clickable.getAttribute('data-cursor-text');
        if (text) {
          setHoverText(text);
        } else {
          setHoverText('');
        }
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? (hoverText ? 40 : 16) : 5),
        y: mousePosition.y - (isHovering ? (hoverText ? 40 : 16) : 5),
        width: isHovering ? (hoverText ? 80 : 32) : 10,
        height: isHovering ? (hoverText ? 80 : 32) : 10,
        backgroundColor: isHovering ? (hoverText ? '#D4A843' : 'transparent') : '#D4A843',
        border: isHovering && !hoverText ? '1px solid #D4A843' : 'none',
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {hoverText && (
        <span className="text-void font-mono text-[10px] font-bold tracking-widest mix-blend-normal">
          {hoverText}
        </span>
      )}
    </motion.div>
  );
}
