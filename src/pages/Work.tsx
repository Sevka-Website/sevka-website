import { motion, AnimatePresence } from 'motion/react';
import SectionLabel from '../components/SectionLabel';
import ProjectTransition from '../components/ProjectTransition';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const projects = [
  {
    id: 'claradent',
    title: 'ClaraDent Dental Clinic',
    category: 'Corporate Sites',
    image: '/claradent-thumb.jpg',
    tags: ['Healthcare', 'Booking System', 'Landing Page'],
    description:
      'A premium dental clinic website with appointment booking, service showcase, doctor profiles, and patient testimonials.',
    route: '/work/claradent',
    year: '2025',
    transitionTitle: 'ClaraDent',
    transitionSubtitle: 'Dental Clinic',
    transitionIndex: '01',
  },
];

const categories = ['All', 'E-Commerce', 'Landing Pages', 'Corporate Sites', 'Custom Builds'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTransition, setActiveTransition] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  const handleViewProject = (project: (typeof projects)[0]) => {
    setActiveTransition(project);
  };

  return (
    <>
      <AnimatePresence>
        {activeTransition && (
          <ProjectTransition
            project={{
              title: activeTransition.transitionTitle,
              subtitle: activeTransition.transitionSubtitle,
              year: activeTransition.year,
              index: activeTransition.transitionIndex,
              route: activeTransition.route,
            }}
            onComplete={() => setActiveTransition(null)}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col w-full min-h-screen">
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>PORTFOLIO</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">Our Work</h1>
            <p className="text-xl text-muted-warm max-w-2xl mb-16">
              A selection of websites, stores, and experiences we've built for clients worldwide.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-wrap gap-4 mb-16">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={clsx('px-5 py-2 rounded-full text-sm font-mono uppercase tracking-wider transition-all duration-300 border',
                  activeFilter === cat ? 'bg-gold border-gold text-void font-bold' : 'bg-transparent border-white/10 text-warm-white/60 hover:border-gold/50 hover:text-warm-white'
                )}>
                {cat}
              </button>
            ))}
          </motion.div>

          {filteredProjects.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, i) => (
                <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-carbon border border-white/5 flex flex-col">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 bg-void/80 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
                      <span className="font-mono text-xs text-gold">{project.year}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-xs font-mono text-gold uppercase tracking-wider">{project.category}</span>
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-warm-white/50 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-warm-white">{project.title}</h3>
                    <p className="text-muted-warm text-sm leading-relaxed flex-grow">{project.description}</p>
                    <button onClick={() => handleViewProject(project)}
                      className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all w-fit mt-2 group/btn cursor-pointer">
                      View Live Project
                      <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-white/5 border-dashed flex flex-col items-center justify-center p-12 min-h-[300px]">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
                    <span className="text-gold text-2xl font-light">+</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-warm-white/40">More Coming Soon</h3>
                  <p className="text-muted text-sm max-w-xs">New projects are added as they launch. Working on something great right now.</p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-32 text-center">
              <h3 className="font-display text-2xl font-bold text-warm-white/30 mb-3">No projects yet in this category</h3>
              <p className="text-muted text-sm">Check back soon — more work is on the way.</p>
              <button onClick={() => setActiveFilter('All')} className="mt-8 text-gold font-semibold text-sm hover:underline">View all projects →</button>
            </motion.div>
          )}
        </section>

        <section className="py-24 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
            <SectionLabel>WORK WITH US</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 mt-3">Want to be our next project?</h2>
            <p className="text-muted-warm mb-10">We're selective about the projects we take on — which means every client gets our full attention.</p>
            <a href="/start" className="inline-flex items-center gap-2 bg-gold text-void px-8 py-4 rounded-lg font-semibold text-base hover:bg-gold-light transition-colors">
              Start a Project <ArrowRight size={18} />
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
}
