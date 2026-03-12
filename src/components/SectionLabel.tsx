import React from 'react';
import { motion } from 'motion/react';

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-3 mb-6"
    >
      <span className="w-8 h-[1px] bg-gold" />
      <h3 className="font-mono text-gold text-[11px] md:text-[13px] font-medium tracking-[0.1em] uppercase">
        {children}
      </h3>
    </motion.div>
  );
}
