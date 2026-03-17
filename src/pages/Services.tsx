import { motion } from 'motion/react';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { CheckCircle2, MonitorSmartphone, ShoppingCart, LayoutTemplate, Search, Server, ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01', icon: <MonitorSmartphone className="text-gold" size={28} strokeWidth={1.5} />,
    title: 'Custom Web Design & Development',
    desc: 'Bespoke websites built from scratch, designed for your brand and optimized for conversions. No templates. No shortcuts.',
    features: ['UI/UX Design in Figma', 'Fully responsive, mobile-first', 'Custom animations & micro-interactions', 'CMS integration (WordPress / Webflow / custom)', 'Performance optimised (Lighthouse 90+)', '30-day post-launch support'],
    suitable: 'Startups, SMBs, Personal Brands',
  },
  {
    num: '02', icon: <ShoppingCart className="text-gold" size={28} strokeWidth={1.5} />,
    title: 'E-Commerce Stores',
    desc: 'Shopify & WooCommerce stores that sell. Fast, beautiful, and built to scale your revenue from day one.',
    features: ['Product setup & categorisation', 'Payment gateway integration', 'Cart & checkout optimisation', 'Mobile-first shopping experience', 'Inventory management setup', 'Analytics & conversion tracking'],
    suitable: 'Product businesses, D2C brands, retail',
  },
  {
    num: '03', icon: <LayoutTemplate className="text-gold" size={28} strokeWidth={1.5} />,
    title: 'Landing Pages & Sales Funnels',
    desc: 'Single-page, conversion-focused builds designed to capture leads and drive action for campaigns and product launches.',
    features: ['High-converting layout design', 'A/B test ready architecture', 'Lead capture forms', 'CRM connection (HubSpot, Mailchimp)', 'Lightning-fast load speed', 'Clear, persuasive call-to-actions'],
    suitable: 'Campaigns, product launches, lead gen',
  },
  {
    num: '04', icon: <Search className="text-gold" size={28} strokeWidth={1.5} />,
    title: 'SEO & Performance Optimisation',
    desc: 'Be found on Google. We build sites fast, structured, and search-engine ready — and we fix existing sites that aren\'t.',
    features: ['Technical SEO audit & fixes', 'On-page optimisation', 'Core Web Vitals improvements', 'Schema markup & structured data', 'Google Search Console setup', 'Image & asset optimisation'],
    suitable: 'Existing websites wanting more organic traffic',
  },
  {
    num: '05', icon: <Server className="text-gold" size={28} strokeWidth={1.5} />,
    title: 'Hosting & Website Care Plans',
    desc: 'Your website, fully managed. We handle your domain, hosting, security, and updates — so you never worry about the technical side again.',
    features: ['Domain managed & auto-renewed', '24/7 uptime monitoring', 'SSL certificate maintained', 'Content updates on request', 'Monthly performance reports', 'WhatsApp support line'],
    suitable: 'Any business that wants zero technical headaches',
  },
];

const buildPackages = [
  {
    name: 'Starter',
    tagline: 'Get your business online',
    price: '₹12,999',
    priceNote: 'up to ₹16,999',
    delivery: '5–7 days',
    features: ['1–4 page website', 'Mobile responsive', 'Contact form', 'WhatsApp button', 'Google Maps embed', 'Basic SEO setup', '2 revision rounds'],
    bestFor: 'Salons · Shops · Local Services',
    highlight: false,
    cta: 'Get a Quote',
  },
  {
    name: 'Growth',
    tagline: 'For businesses ready to scale',
    price: '₹19,999',
    priceNote: 'up to ₹28,999',
    delivery: '10–14 days',
    features: ['Up to 10 pages', 'Custom design from scratch', 'Advanced SEO setup', 'Google Analytics', 'Google Search Console', 'Performance optimised', '3 revision rounds', '30-day support'],
    bestFor: 'Clinics · Gyms · Coaching Centres',
    highlight: true,
    cta: 'Get a Quote',
  },
  {
    name: 'Studio',
    tagline: 'Enterprise & e-commerce',
    price: '₹29,999',
    priceNote: 'up to ₹60,000+',
    delivery: 'Custom timeline',
    features: ['Unlimited pages', 'E-commerce (Shopify / WooCommerce)', 'Custom integrations & APIs', 'CRM / booking system', 'Priority support & SLA', 'Monthly retainer available', 'Unlimited revisions', 'Full handover & training'],
    bestFor: 'Real Estate · D2C · Serious Brands',
    highlight: false,
    cta: "Let's Talk",
  },
];

const carePackages = [
  {
    name: 'Basic',
    price: '₹799',
    period: '/month',
    yearly: '₹7,999/year',
    features: ['Domain renewal managed', 'Hosting kept live', 'SSL maintained', 'Uptime monitoring', 'WhatsApp support'],
    highlight: false,
  },
  {
    name: 'Care',
    price: '₹1,499',
    period: '/month',
    yearly: '₹14,999/year',
    features: ['Everything in Basic', '3 content updates/month', 'Monthly performance report', 'Priority support (4hr response)', 'Google Business updates'],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Growth',
    price: '₹2,499',
    period: '/month',
    yearly: '₹24,999/year',
    features: ['Everything in Care', 'Unlimited small updates', 'Monthly SEO report', '2 social banners/month', 'Quarterly strategy call'],
    highlight: false,
  },
];

const addons = [
  { name: 'Logo Design', price: '₹999' },
  { name: 'SEO Audit Report', price: '₹1,499' },
  { name: 'Extra Pages', price: '₹999 / page' },
  { name: 'Multilingual Site', price: '₹1,499' },
  { name: 'Blog Setup', price: '₹1,499' },
  { name: 'Payment Gateway Integration', price: '₹1,499' },
];

export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full text-center">
        <SectionLabel>WHAT WE DO</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-3">
          Everything Your Website<br className="hidden md:block" /> Needs to Succeed
        </h1>
        <p className="text-xl text-muted-warm max-w-2xl mx-auto">
          Specialized web services for businesses that want to grow — with transparent pricing and zero surprises.
        </p>
      </section>

      {/* Service Details */}
      <section className="py-10 px-6 max-w-5xl mx-auto w-full flex flex-col gap-24">
        {services.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="w-14 h-14 bg-carbon border border-white/5 rounded-xl flex items-center justify-center mb-6">{service.icon}</div>
              <span className="font-mono text-gold text-5xl font-bold opacity-20 mb-3 block">{service.num}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-warm text-base mb-6 leading-relaxed">{service.desc}</p>
              <div className="bg-carbon border border-white/5 p-4 rounded-xl">
                <span className="font-mono text-xs text-gold uppercase tracking-wider block mb-2">Best For</span>
                <p className="text-sm text-warm-white/80">{service.suitable}</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-carbon border border-white/5 p-8 md:p-12 rounded-2xl">
              <h3 className="font-mono text-sm text-gold uppercase tracking-wider mb-8">What's Included</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                    <span className="text-warm-white/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Build Packages */}
      <section className="py-32 px-6 bg-carbon border-y border-white/5 mt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-6">
            <SectionLabel>BUILD PACKAGES</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4 mt-3">
              Transparent Pricing.<br className="hidden md:block" /> No Surprises.
            </h2>
            <p className="text-muted-warm max-w-xl mx-auto">
              Every package is custom-quoted. These are our baseline ranges — final pricing depends on complexity, timeline, and scope.
            </p>
          </div>

          {/* All packages include */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-16 mt-10">
            {['SSL security', 'Mobile-first design', 'Fast loading', 'SEO foundation', 'Free consultation'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-muted-warm">
                <span className="text-gold text-xs">✓</span> {item}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {buildPackages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl flex flex-col p-8 ${pkg.highlight ? 'bg-void border border-gold shadow-2xl shadow-gold/10 md:-translate-y-4' : 'bg-void border border-white/5'}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-void font-mono text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">
                    ★ Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <span className={`font-mono text-xs tracking-widest uppercase ${pkg.highlight ? 'text-gold' : 'text-muted-warm'}`}>{pkg.tagline}</span>
                  <h3 className="font-display text-2xl font-bold mt-1 mb-3">{pkg.name}</h3>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-4xl font-bold text-warm-white">{pkg.price}</span>
                  </div>
                  <p className="text-muted text-xs font-mono mt-1">{pkg.priceNote} · Delivery: {pkg.delivery}</p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                      <span className={pkg.highlight ? 'text-warm-white/90' : 'text-warm-white/70'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">Best for</span>
                  <p className="text-xs text-warm-white/50 mt-1">{pkg.bestFor}</p>
                </div>

                <Button href="/start" variant={pkg.highlight ? 'primary' : 'ghost'} className="w-full">
                  {pkg.cta} →
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Save note */}
          <p className="text-center text-gold/80 font-mono text-xs mt-10 tracking-wide">
            Save up to 2 months FREE by choosing yearly on care plans. &nbsp;·&nbsp; No contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Hosting & Care Plans */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <SectionLabel>HOSTING & CARE</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 mt-3">
            Your Website, Fully Managed.
          </h2>
          <p className="text-muted-warm max-w-xl mx-auto">
            We handle domain, hosting, security, and updates — so you never have to worry about the technical side again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {carePackages.map((pkg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl flex flex-col p-8 ${pkg.highlight ? 'bg-carbon border border-gold shadow-xl shadow-gold/5 md:-translate-y-2' : 'bg-carbon border border-white/5'}`}>
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-void font-mono text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold mb-1">{pkg.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-display text-3xl font-bold">{pkg.price}</span>
                <span className="text-muted-warm text-sm mb-1">{pkg.period}</span>
              </div>
              <p className="font-mono text-xs text-muted mb-6">{pkg.yearly}</p>

              <ul className="flex flex-col gap-3 flex-grow mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                    <span className="text-warm-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              <Button href="/start" variant={pkg.highlight ? 'primary' : 'ghost'} className="w-full">
                Get Started →
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Add-Ons */}
      <section className="py-20 px-6 bg-carbon border-t border-white/5">
        <div className="max-w-5xl mx-auto w-full">
          <SectionLabel>ADD-ONS</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12 mt-3">Popular Add-Ons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {addons.map((addon, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex justify-between items-center bg-void border border-white/5 rounded-xl px-6 py-4 hover:border-gold/20 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold/60 shrink-0" />
                  <span className="text-warm-white/90 text-sm">{addon.name}</span>
                </div>
                <span className="font-mono text-gold text-sm font-bold">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-muted-warm text-xl mb-10">
            First consultation is free. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/start" variant="primary">Start a Project →</Button>
            <Button href="mailto:abhishek.webstudio@gmail.com" variant="ghost">Email Us Directly</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
