import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MonitorSmartphone, ShoppingCart, LayoutTemplate,
  Search, Server, CheckCircle2, ChevronDown, ChevronUp,
  Star, MessageSquare, Zap, Shield, Clock, Users
} from 'lucide-react';
import Button from '../components/Button';
import SectionLabel from '../components/SectionLabel';

/* ─── Data ─────────────────────────────────────────── */

const services = [
  {
    icon: <MonitorSmartphone size={28} strokeWidth={1.5} />,
    title: 'Custom Web Design & Development',
    desc: 'Bespoke websites built from scratch — designed for your brand, optimised for conversions. No templates. Ever.',
    badge: 'Most Popular',
  },
  {
    icon: <ShoppingCart size={28} strokeWidth={1.5} />,
    title: 'E-Commerce (Shopify & WooCommerce)',
    desc: 'Online stores that actually sell. Fast, beautiful, and built to scale your revenue from day one.',
    badge: null,
  },
  {
    icon: <LayoutTemplate size={28} strokeWidth={1.5} />,
    title: 'Landing Pages & Sales Funnels',
    desc: 'High-converting single pages built to capture leads and drive action for campaigns and launches.',
    badge: null,
  },
  {
    icon: <Search size={28} strokeWidth={1.5} />,
    title: 'SEO & Performance Optimisation',
    desc: 'Be found on Google. Sites built fast, structured, and search-engine ready from day one.',
    badge: null,
  },
  {
    icon: <Server size={28} strokeWidth={1.5} />,
    title: 'Hosting & Website Care Plans',
    desc: 'Your website, fully managed. Domain, hosting, security, and updates — handled for you, every month.',
    badge: 'New',
  },
];

const whyItems = [
  { icon: <Zap size={20} />, title: 'Performance-First Builds', desc: 'Sub-2s load times. Lighthouse 90+. Always optimised for speed.' },
  { icon: <Shield size={20} />, title: 'SEO Ready from Day 1', desc: 'Structured data, meta optimisation, and semantic HTML baked in.' },
  { icon: <MonitorSmartphone size={20} />, title: 'Mobile-First Design', desc: '60% of your users are on phones. We design for them first.' },
  { icon: <MessageSquare size={20} />, title: 'WhatsApp-Accessible', desc: 'Reach us on WhatsApp anytime. No tickets, no queues.' },
  { icon: <Clock size={20} />, title: 'Fast Turnaround', desc: 'Starter sites in 5–7 days. Growth sites in 10–14 days.' },
  { icon: <Users size={20} />, title: '30-Day Post-Launch Support', desc: 'We don\'t disappear after launch. Ongoing support is standard.' },
];

const industries = [
  { emoji: '💇', label: 'Salons & Spas' },
  { emoji: '🏋️', label: 'Gyms & Fitness' },
  { emoji: '🩺', label: 'Doctors & Clinics' },
  { emoji: '🎂', label: 'Bakers & Cafes' },
  { emoji: '🍽️', label: 'Restaurants & Bars' },
  { emoji: '🚗', label: 'Car Garages' },
  { emoji: '🧹', label: 'Pest Control' },
  { emoji: '✈️', label: 'Tours & Travels' },
  { emoji: '🧘', label: 'Yoga & Wellness' },
  { emoji: '🔧', label: 'Handyman Services' },
  { emoji: '🏠', label: 'Real Estate' },
  { emoji: '🛒', label: 'D2C Brands' },
];

const testimonials = [
  {
    quote: 'Sevka completely transformed our online presence. The new website is lightning fast and our enquiries doubled in the first month.',
    name: 'Priya Sharma', company: 'Lumina Beauty, Mumbai', stars: 5,
  },
  {
    quote: 'Professional, transparent, incredibly skilled. They didn\'t just build a website — they built a growth engine for our clinic.',
    name: 'Dr. Arjun Mehta', company: 'MedFirst Clinic, Delhi', stars: 5,
  },
  {
    quote: 'The attention to detail is unmatched. From wireframes to final animations, everything was executed perfectly.',
    name: 'Rohan Kapoor', company: 'Venture Studio, Bangalore', stars: 5,
  },
];

const faqs = [
  { q: 'How long does a website take?', a: 'A Starter site (1–4 pages) takes 5–7 days. A Growth site (up to 10 pages) takes 10–14 days. E-commerce and complex builds vary by scope.' },
  { q: 'What do you need from me to start?', a: 'Your logo, brand colours, and any content (text/images) you have. If you don\'t have content, we can help with copywriting and sourcing images.' },
  { q: 'Do you offer payment in instalments?', a: 'Yes. Our standard structure is 50% upfront and 50% on project completion before go-live.' },
  { q: 'Will I be able to manage the site myself?', a: 'Yes. We build with easy CMS platforms and provide a handover session + documentation so you can update text, images, and products yourself.' },
  { q: 'Do you work with clients outside India?', a: 'Absolutely. We work with clients globally, adapting to your time zone for all meetings and updates.' },
  { q: 'What is a Care Plan?', a: 'A monthly subscription where we manage your domain, hosting, SSL, and content updates. Starting at just ₹799/month — so you never have to worry about the technical side again.' },
];

/* ─── Animated stat counter ─────────────────────────── */
function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex flex-col gap-1.5 p-6 md:p-8 text-center">
      <motion.span
        className="font-display text-3xl md:text-4xl font-bold text-warm-white leading-none"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      <span className="font-mono text-xs text-gold tracking-wider uppercase">{label}</span>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">

      {/* ══════════════════════════════════════════════
          1. HERO — Bold headline, CTAs, trust signal
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-glow opacity-40 pointer-events-none z-0" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
          style={{ backgroundImage: 'radial-gradient(#D4A843 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/25 bg-gold/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-gold text-xs tracking-widest uppercase">Premium Web Studio — India</span>
          </motion.div>

          <h1 className="font-display font-extrabold text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-[-0.03em] text-warm-white mb-8 w-full">
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="block">
                Websites That
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }} className="block">
                Actually <span className="text-gradient-gold">Work.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="text-lg md:text-xl text-muted-warm max-w-2xl mb-10 leading-relaxed"
          >
            Sevka builds high-performance websites, e-commerce stores, and digital experiences that turn visitors into customers — for businesses across India and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button href="/start" variant="primary">Start a Project →</Button>
            <Button href="/work" variant="ghost">View Our Work</Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-8 font-mono text-xs text-muted uppercase tracking-widest"
          >
            No commitment. First consultation is free.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-warm"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowRight size={14} className="rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative z-20 -mt-6 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-carbon border border-gold/15 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-gold/10 md:divide-x md:divide-gold/10">
            {[
              { value: '25+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Experience' },
              { value: '₹12,999', label: 'Starting Price' },
            ].map((s, i) => (
              <div key={i} className={`${i % 2 === 0 && i < 2 ? 'border-r border-gold/10' : ''}`}>
                <StatCard value={s.value} label={s.label} />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          2. MARQUEE
      ══════════════════════════════════════════════ */}
      <section className="py-24 overflow-hidden border-y border-white/5 mt-20 bg-void">
        <div className="flex whitespace-nowrap group">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 items-center group-hover:[animation-play-state:paused]"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {['CUSTOM WEBSITES', 'E-COMMERCE', 'LANDING PAGES', 'SEO OPTIMISATION', 'WEB DESIGN', 'SHOPIFY', 'WORDPRESS', 'HOSTING & CARE', 'PERFORMANCE', 'SEVKA'].map((text, j) => (
                  <span key={j} className={`font-display text-4xl md:text-6xl font-bold uppercase ${j % 2 === 0 ? 'text-transparent [-webkit-text-stroke:1px_rgba(212,168,67,0.25)]' : 'text-warm-white/8'}`}>
                    {text} &middot;
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. SERVICES — Grexa-style card grid
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel>WHAT WE DO</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-3 max-w-xl">
                Everything Your Website Needs
              </h2>
            </div>
            <Button href="/services" variant="ghost" className="md:mb-1 shrink-0">See All Services →</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative bg-carbon border border-white/5 rounded-2xl p-8 flex flex-col gap-5 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
              >
                {/* Top gold shimmer on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-void border border-white/5 group-hover:border-gold/25 flex items-center justify-center text-gold transition-colors">
                    {svc.icon}
                  </div>
                  {svc.badge && (
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${svc.badge === 'New' ? 'bg-gold/10 text-gold border border-gold/20' : 'bg-gold text-void font-bold'}`}>
                      {svc.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-warm-white mb-2">{svc.title}</h3>
                  <p className="text-muted-warm text-sm leading-relaxed">{svc.desc}</p>
                </div>

                <Link to="/services" className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold mt-auto group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. FEATURED PROJECT
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-carbon border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel>FEATURED WORK</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-3">
                Projects That Speak for Themselves
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all shrink-0">
              All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/20 transition-colors"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
              <img src="/claradent-thumb.jpg" alt="ClaraDent" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void/60 hidden md:block" />
            </div>
            {/* Info */}
            <div className="bg-void p-10 md:p-14 flex flex-col justify-center gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-xs font-mono text-gold uppercase tracking-wider">Corporate Site</span>
                <span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-warm-white/50 uppercase tracking-wider">Healthcare</span>
                <span className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-warm-white/50 uppercase tracking-wider">2025</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">ClaraDent Dental Clinic</h3>
              <p className="text-muted-warm leading-relaxed">
                A premium dental clinic website with appointment booking, service showcase, doctor profiles, and patient testimonials. Delivered in 7 days.
              </p>
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/5">
                {[{ val: '7 Days', label: 'Delivery' }, { val: '90+', label: 'Lighthouse Score' }].map((s, i) => (
                  <div key={i}>
                    <div className="font-display text-2xl font-bold text-warm-white">{s.val}</div>
                    <div className="font-mono text-xs text-gold uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/work" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all w-fit">
                View All Projects <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. WHO WE WORK WITH — Industry grid (Grexa-style)
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>WHO WE HELP</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
              Built for Businesses Like Yours
            </h2>
            <p className="text-muted-warm text-lg max-w-xl mx-auto">
              We specialise in helping Indian small and medium businesses get a professional online presence that actually generates leads.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-carbon border border-white/5 rounded-xl p-5 flex items-center gap-3 hover:border-gold/30 hover:bg-raised transition-all cursor-default"
              >
                <span className="text-2xl">{ind.emoji}</span>
                <span className="text-warm-white/80 text-sm font-medium group-hover:text-warm-white transition-colors">{ind.label}</span>
              </motion.div>
            ))}
            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="col-span-2 md:col-span-1 bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-xl p-5 flex flex-col items-start justify-between gap-3"
            >
              <p className="text-warm-white font-semibold text-sm">And many more businesses like yours</p>
              <Link to="/start" className="inline-flex items-center gap-1 text-gold text-xs font-mono uppercase tracking-wider hover:gap-2 transition-all">
                Start a Project <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. WHY SEVKA — Icon feature grid
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-carbon border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>WHY SEVKA</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-3">
              Built Different. Built to Perform.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-void border border-white/5 rounded-2xl p-8 flex flex-col gap-4 hover:border-gold/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">{item.icon}</div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="text-muted-warm text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. PRICING TEASER
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>TRANSPARENT PRICING</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
              No Hidden Fees. Ever.
            </h2>
            <p className="text-muted-warm text-lg max-w-xl mx-auto">
              Every package is custom-quoted. These are our starting ranges — final pricing depends on scope and complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              { name: 'Starter', price: '₹12,999', note: 'up to ₹16,999', desc: 'Get your business online', delivery: '5–7 days', features: ['1–4 pages', 'Mobile responsive', 'Basic SEO', 'Contact form', 'WhatsApp button'], highlight: false, cta: 'Get a Quote' },
              { name: 'Growth', price: '₹19,999', note: 'up to ₹28,999', desc: 'For businesses ready to scale', delivery: '10–14 days', features: ['Up to 10 pages', 'Custom design', 'Advanced SEO', 'Google Analytics', '3 revision rounds', '30-day support'], highlight: true, cta: 'Most Popular' },
              { name: 'Studio', price: '₹29,999', note: 'up to ₹60,000+', desc: 'Enterprise & e-commerce', delivery: 'Custom', features: ['Unlimited pages', 'E-commerce', 'Custom APIs', 'CRM integration', 'Priority support', 'Full training'], highlight: false, cta: "Let's Talk" },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 flex flex-col relative ${pkg.highlight ? 'bg-void border border-gold md:-translate-y-3 shadow-2xl shadow-gold/10' : 'bg-carbon border border-white/5'}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-void font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">★ Most Popular</div>
                )}
                <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">{pkg.desc}</p>
                <h3 className="font-display text-2xl font-bold mb-1">{pkg.name}</h3>
                <div className="font-display text-4xl font-bold text-warm-white mt-2 mb-0.5">{pkg.price}</div>
                <p className="font-mono text-xs text-muted mb-1">{pkg.note} · {pkg.delivery} delivery</p>
                <ul className="flex flex-col gap-2.5 my-8 flex-grow">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={15} className="text-gold shrink-0" />
                      <span className={pkg.highlight ? 'text-warm-white/90' : 'text-warm-white/70'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/services" variant={pkg.highlight ? 'primary' : 'ghost'} className="w-full">
                  {pkg.cta} →
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-warm text-sm mt-10 font-mono">
            All packages include: Mobile-first design · SSL security · Fast loading · SEO foundation · Free consultation
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-carbon border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>CLIENT LOVE</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-3">
              Real Stories. Real Results.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-void border border-white/5 p-8 rounded-2xl flex flex-col gap-6 relative"
              >
                <div className="text-gold/10 text-8xl absolute top-4 right-5 font-display leading-none select-none">"</div>
                <div className="flex gap-0.5">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="#D4A843" className="text-gold" />)}
                </div>
                <p className="text-warm-white/85 leading-relaxed italic text-sm flex-grow">"{t.quote}"</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="font-display font-bold text-warm-white">{t.name}</p>
                  <p className="text-muted-warm text-xs mt-1">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. PROCESS TEASER
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel>HOW WE WORK</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-3">From Brief to Launch</h2>
            </div>
            <Button href="/process" variant="ghost" className="shrink-0">Full Process →</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-carbon rounded-xl p-8 border-l-2 border-gold hover:-translate-y-1 hover:border-gold-light transition-all duration-300"
              >
                <div className="font-mono text-4xl font-bold text-gold mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-warm-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted-warm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10. FAQ — Accordion
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-carbon border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-3">Common Questions</h2>
          </div>
          <div className="flex flex-col divide-y divide-white/5">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left gap-6 group"
                >
                  <span className="font-display font-semibold text-warm-white group-hover:text-gold transition-colors">{faq.q}</span>
                  <span className="shrink-0 text-gold">
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-muted-warm text-sm leading-relaxed mt-4 pr-10"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          11. FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-25 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#D4A843 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <SectionLabel>READY?</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-3">
            Let's Build Something Exceptional.
          </h2>
          <p className="text-xl text-muted-warm mb-10 max-w-xl">
            Your website should work for you 24/7. Let's make that happen.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Button href="/start" variant="primary">Start a Project →</Button>
            <Button href="mailto:abhishek.webstudio@gmail.com" variant="ghost">Email Us Directly</Button>
          </div>
          <p className="font-mono text-xs text-muted uppercase tracking-widest">No commitment. First consultation is free.</p>
        </div>
      </section>
    </div>
  );
}
