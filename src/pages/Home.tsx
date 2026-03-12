import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MonitorSmartphone, ShoppingCart, LayoutTemplate, Search } from 'lucide-react';
import Button from '../components/Button';
import SectionLabel from '../components/SectionLabel';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1.1 HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50 pointer-events-none z-0" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-mono text-gold text-sm tracking-widest uppercase mb-8"
          >
            &lt; Premium Web Studio /&gt;
          </motion.div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[96px] leading-[1.1] tracking-[-0.03em] text-warm-white mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                We Build Websites
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                That <span className="text-gradient-gold">Win.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-warm max-w-2xl mb-12 leading-relaxed"
          >
            Sevka crafts high-performance websites, e-commerce stores, and digital experiences that turn visitors into customers. Built for businesses that demand results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-6 relative z-30"
          >
            <Button href="/start" variant="primary">
              Start a Project &rarr;
            </Button>
            <Button href="/work" variant="ghost">
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => {
            document.getElementById('stats-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-warm hover:text-gold transition-colors cursor-pointer z-30"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight className="rotate-90" size={16} />
          </motion.div>
        </motion.button>
      </section>

      {/* Hero Stats Bar */}
      <section id="stats-section" className="relative z-20 -mt-8 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-carbon border border-gold/15 rounded-xl p-6 md:p-8 flex flex-wrap md:flex-nowrap justify-between items-center gap-8 shadow-2xl"
        >
          {[
            { label: 'Projects Delivered', value: '25+' },
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Clients Worldwide', value: 'India & Global' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 w-[45%] md:w-auto text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl font-bold text-warm-white">{stat.value}</span>
              <span className="font-mono text-xs text-gold tracking-wider uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 1.2 MARQUEE */}
      <section className="py-24 overflow-hidden bg-void border-y border-white/5 mt-20">
        <div className="flex whitespace-nowrap group">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 items-center group-hover:[animation-play-state:paused]"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {['CUSTOM WEBSITES', 'E-COMMERCE', 'LANDING PAGES', 'SEO OPTIMIZATION', 'WEB DESIGN', 'SHOPIFY', 'WORDPRESS', 'PERFORMANCE', 'CONVERSION', 'SEVKA'].map((text, j) => (
                  <span
                    key={j}
                    className={`font-display text-5xl md:text-7xl font-bold uppercase ${
                      j % 2 === 0 ? 'text-transparent [-webkit-text-stroke:1px_rgba(244,240,232,0.3)]' : 'text-warm-white/10'
                    }`}
                  >
                    {text} &middot;
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1.3 FEATURED WORK */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <SectionLabel>OUR WORK</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-20 max-w-2xl">
          Projects That Speak for Themselves
        </h2>

        <div className="flex flex-col gap-32">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="group flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold">ShopFlow Commerce</h3>
              <p className="text-muted-warm text-lg">A high-conversion Shopify store built for a premium D2C lifestyle brand, resulting in a 45% increase in mobile sales.</p>
              <div className="flex flex-wrap gap-3">
                {['E-Commerce', 'Shopify', 'Custom Design'].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-warm-white/60 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <Link to="/work/shopflow" className="inline-flex items-center gap-2 text-gold font-semibold mt-4 hover:gap-4 transition-all w-fit" data-cursor-text="VIEW &rarr;">
                View Case Study <ArrowRight size={18} />
              </Link>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 overflow-hidden rounded-2xl border border-white/5 relative aspect-[4/3] bg-carbon group-hover:border-gold/30 transition-colors duration-500">
              <img src="https://picsum.photos/seed/shopflow/800/600" alt="ShopFlow Commerce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="group flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-white/5 relative aspect-[4/3] bg-carbon group-hover:border-gold/30 transition-colors duration-500">
              <img src="https://picsum.photos/seed/venture/800/600" alt="Venture Landing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold">Venture Capital Firm</h3>
              <p className="text-muted-warm text-lg">A sleek, authoritative corporate website for an international VC firm. Focused on typography, micro-interactions, and trust.</p>
              <div className="flex flex-wrap gap-3">
                {['Corporate', 'Webflow', 'Animations'].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-warm-white/60 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <Link to="/work/venture" className="inline-flex items-center gap-2 text-gold font-semibold mt-4 hover:gap-4 transition-all w-fit" data-cursor-text="VIEW &rarr;">
                View Case Study <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 text-center">
          <Button href="/work" variant="ghost">See All Projects &rarr;</Button>
        </div>
      </section>

      {/* 1.4 SERVICES OVERVIEW */}
      <section className="py-32 px-6 bg-carbon border-y border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-20 max-w-2xl">
            Everything Your Website Needs to Succeed
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Custom Web Design & Development',
                desc: 'Bespoke websites built from scratch, designed for your brand and optimized for conversions.',
                icon: <MonitorSmartphone className="text-gold" size={32} strokeWidth={1.5} />
              },
              {
                num: '02',
                title: 'E-Commerce (Shopify & WooCommerce)',
                desc: 'Online stores that sell. Fast, beautiful, and built to scale your revenue.',
                icon: <ShoppingCart className="text-gold" size={32} strokeWidth={1.5} />
              },
              {
                num: '03',
                title: 'Landing Pages & Sales Funnels',
                desc: 'High-converting single pages designed to capture leads and drive action.',
                icon: <LayoutTemplate className="text-gold" size={32} strokeWidth={1.5} />
              },
              {
                num: '04',
                title: 'SEO & Performance Optimization',
                desc: 'Be found on Google. We build sites fast, structured, and search-engine ready from day one.',
                icon: <Search className="text-gold" size={32} strokeWidth={1.5} />
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-void border border-white/5 p-10 rounded-2xl relative overflow-hidden hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-carbon rounded-xl border border-white/5 group-hover:border-gold/30 transition-colors">
                    {service.icon}
                  </div>
                  <span className="font-mono text-2xl text-white/10 font-bold">{service.num}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-warm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5 WHY SEVKA */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <SectionLabel>WHY SEVKA</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-20 max-w-2xl">
          Built Different. Built to Perform.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {[
            { title: 'Pixel-Perfect Design', desc: "We obsess over every detail so you don't have to." },
            { title: 'Performance-First', desc: 'Sub-2-second load times. Lighthouse score 90+. Always.' },
            { title: 'SEO Ready from Day 1', desc: 'Structured data, meta optimization, and semantic HTML baked in.' },
            { title: 'Mobile-First Approach', desc: '60% of your users are on phones. We design for them first.' },
            { title: 'Clear Communication', desc: 'No jargon. No surprises. Regular updates throughout.' },
            { title: 'Post-Launch Support', desc: "We don't disappear after delivery. Ongoing support included." }
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-gold text-xl">✦</span>
                <h3 className="font-display text-xl font-bold">{point.title}</h3>
              </div>
              <p className="text-muted-warm pl-8">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 1.6 PROCESS TEASER */}
      <section className="py-32 px-6 bg-carbon border-y border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <SectionLabel>HOW WE WORK</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              From Brief to Launch
            </h2>
            <p className="text-xl text-muted-warm">
              A clear, no-surprises process every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16 mb-16">
            {[
              { num: '01', title: 'Discovery', desc: 'We learn your business, goals, and audience inside out.' },
              { num: '02', title: 'Strategy', desc: 'Sitemap, user flows, tech stack — planned before a pixel is touched.' },
              { num: '03', title: 'Design', desc: 'Figma designs reviewed and approved by you before we build.' },
              { num: '04', title: 'Development', desc: 'Clean, fast code. Responsive on every device.' },
              { num: '05', title: 'Launch', desc: 'Domain, SSL, speed checks. We handle the full go-live.' },
              { num: '06', title: 'Support', desc: '30 days of free post-launch support, always.' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111111] rounded-xl p-8 border-l-2 border-gold transition-all duration-300 hover:-translate-y-1 hover:border-[#E8C06A]"
              >
                <div className="font-mono text-4xl font-bold text-gold mb-3">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-[#F4F0E8] mb-2">{step.title}</h3>
                <p className="text-sm text-[#A09880] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button href="/process" variant="ghost">See Our Full Process &rarr;</Button>
          </div>
        </div>
      </section>

      {/* 1.7 TESTIMONIALS */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <SectionLabel>CLIENT LOVE</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-20 max-w-2xl">
          Words from People We've Worked With
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Sevka completely transformed our online presence. The new Shopify store is lightning fast and our conversion rate doubled in the first month.",
              name: "Sarah Jenkins",
              company: "Lumina Beauty",
            },
            {
              quote: "Professional, transparent, and incredibly skilled. They didn't just build a website; they built a growth engine for our firm.",
              name: "David Chen",
              company: "Venture Capital Partners",
            },
            {
              quote: "The attention to detail is unmatched. From the initial wireframes to the final animations, everything was executed perfectly.",
              name: "Michael Ross",
              company: "Architecture Studio",
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-carbon border border-white/5 p-8 rounded-2xl flex flex-col justify-between gap-8 relative overflow-hidden"
            >
              <div className="text-gold text-6xl absolute top-4 right-4 opacity-10 font-display">"</div>
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-lg text-warm-white/90 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-void border border-white/10 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${testimonial.name.replace(' ', '')}/100/100`} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-display font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-warm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 1.8 CTA SECTION */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl text-muted-warm mb-12 max-w-2xl">
            Let's turn your vision into a website that works for you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <Button href="/start" variant="primary">Start a Project &rarr;</Button>
            <Button href="mailto:abhishek.webstudio@gmail.com" variant="ghost">Email Us Directly</Button>
          </div>
          <p className="text-sm text-muted font-mono uppercase tracking-widest">No commitment required. First consultation is free.</p>
        </div>
      </section>
    </div>
  );
}
