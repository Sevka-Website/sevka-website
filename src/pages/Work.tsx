import { motion } from 'motion/react';
import SectionLabel from '../components/SectionLabel';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const projects = [
  {
    id: 'shopflow',
    title: 'ShopFlow Commerce',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/shopflow/800/600',
    tags: ['Shopify', 'Custom Design'],
  },
  {
    id: 'venture',
    title: 'Venture Capital Firm',
    category: 'Corporate Sites',
    image: 'https://picsum.photos/seed/venture/800/600',
    tags: ['Webflow', 'Animations'],
  },
  {
    id: 'lumina',
    title: 'Lumina Beauty',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/lumina/800/600',
    tags: ['WooCommerce', 'Branding'],
  },
  {
    id: 'fintech',
    title: 'Fintech App Landing',
    category: 'Landing Pages',
    image: 'https://picsum.photos/seed/fintech/800/600',
    tags: ['React', 'Framer Motion'],
  },
  {
    id: 'studio',
    title: 'Architecture Studio',
    category: 'Custom Builds',
    image: 'https://picsum.photos/seed/studio/800/600',
    tags: ['Next.js', 'Minimalist'],
  },
];

const categories = ['All', 'E-Commerce', 'Landing Pages', 'Corporate Sites', 'Custom Builds'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <SectionLabel>PORTFOLIO</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Our Work
        </h1>
        <p className="text-xl text-muted-warm max-w-2xl mb-16">
          A selection of websites, stores, and experiences we've built for clients worldwide.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-mono uppercase tracking-wider transition-all duration-300 border',
                activeFilter === cat
                  ? 'bg-gold border-gold text-void font-bold'
                  : 'bg-transparent border-white/10 text-warm-white/60 hover:border-gold/50 hover:text-warm-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={project.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-carbon border border-white/5"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-4">
                  <h3 className="font-display text-3xl font-bold text-warm-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono text-warm-white uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono text-warm-white uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/work/${project.id}`} 
                    className="mt-4 inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all w-fit"
                  >
                    View Project <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
