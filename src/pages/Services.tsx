import { motion } from 'motion/react';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          What We Build
        </h1>
        <p className="text-xl text-muted-warm max-w-2xl mx-auto">
          Specialized web services for businesses that want to grow.
        </p>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full flex flex-col gap-32">
        {[
          {
            num: '01',
            title: 'Custom Web Design & Development',
            desc: 'Bespoke websites built from scratch, designed for your brand and optimized for conversions.',
            features: [
              'UI/UX Design (Figma)',
              'Fully responsive, mobile-first',
              'Custom animations & interactions',
              'CMS integration (WordPress / Webflow / custom)',
              'Performance optimized (Lighthouse 90+)',
              '30-day post-launch support',
            ],
            suitable: 'Startups, SMBs, Personal Brands',
          },
          {
            num: '02',
            title: 'E-Commerce Stores',
            desc: 'Shopify & WooCommerce focus. Online stores that sell. Fast, beautiful, and built to scale your revenue.',
            features: [
              'Product setup & categorization',
              'Payment gateways integration',
              'Cart & checkout optimization',
              'Mobile-first shopping experience',
              'Inventory management setup',
              'Analytics & tracking integration',
            ],
            suitable: 'Product businesses, D2C brands, retail',
          },
          {
            num: '03',
            title: 'Landing Pages & Funnels',
            desc: 'Single-page, conversion-focused builds designed to capture leads and drive action.',
            features: [
              'High-converting layout design',
              'A/B test ready architecture',
              'Lead capture forms',
              'CRM connection (HubSpot, Mailchimp, etc.)',
              'Fast loading speed',
              'Clear Call-to-Actions',
            ],
            suitable: 'Campaigns, product launches, lead gen',
          },
          {
            num: '04',
            title: 'SEO & Performance Optimization',
            desc: 'Be found on Google. We build sites fast, structured, and search-engine ready from day one.',
            features: [
              'Technical SEO audit & fixes',
              'On-page optimization',
              'Core Web Vitals improvements',
              'Schema markup & structured data',
              'Google Search Console setup',
              'Image & asset optimization',
            ],
            suitable: 'Existing websites wanting more organic traffic',
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            <div className="w-full md:w-1/3">
              <span className="font-mono text-gold text-6xl font-bold opacity-50 mb-4 block">{service.num}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-warm text-lg mb-6">{service.desc}</p>
              <div className="bg-carbon border border-white/5 p-4 rounded-xl">
                <span className="font-mono text-xs text-gold uppercase tracking-wider block mb-2">Suitable For</span>
                <p className="text-sm text-warm-white/80">{service.suitable}</p>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 bg-carbon border border-white/5 p-8 md:p-12 rounded-2xl">
              <h3 className="font-mono text-sm text-gold uppercase tracking-wider mb-8">What's Included</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                    <span className="text-warm-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Packages */}
      <section className="py-32 px-6 bg-carbon border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our Packages
            </h2>
            <p className="text-xl text-muted-warm max-w-2xl mx-auto">
              Transparent packages, custom pricing. Get a quote tailored to your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-void border border-white/5 p-8 rounded-2xl flex flex-col"
            >
              <h3 className="font-display text-2xl font-bold mb-2">Starter</h3>
              <p className="text-muted-warm text-sm mb-8 h-10">For new businesses getting online</p>
              
              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {['1–5 page website', 'Mobile responsive', 'Basic SEO setup', 'Contact form', '2 revision rounds'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-warm-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button href="/start" variant="ghost" className="w-full">Get a Quote &rarr;</Button>
            </motion.div>

            {/* Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-void border border-gold p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-gold/5"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-void font-mono text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Growth</h3>
              <p className="text-muted-warm text-sm mb-8 h-10">For businesses ready to scale</p>
              
              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {['Up to 10 pages', 'Custom design from scratch', 'E-commerce ready', 'Advanced SEO', 'Google Analytics + Search Console', '3 revision rounds', '30-day support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-warm-white/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button href="/start" variant="primary" className="w-full">Get a Quote &rarr;</Button>
            </motion.div>

            {/* Studio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-void border border-white/5 p-8 rounded-2xl flex flex-col"
            >
              <h3 className="font-display text-2xl font-bold mb-2">Studio / Enterprise</h3>
              <p className="text-muted-warm text-sm mb-8 h-10">For complex, large-scale projects</p>
              
              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {['Unlimited pages', 'Full custom development', 'Complex integrations & APIs', 'E-commerce + CRM + automation', 'Priority support & SLA', 'Monthly retainer option available'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-warm-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button href="/start" variant="ghost" className="w-full">Let's Talk &rarr;</Button>
            </motion.div>
          </div>

          <p className="text-center text-muted-warm mt-12 font-mono text-sm">
            All packages include: Mobile-first design, Fast loading, SSL security, SEO foundation
          </p>
        </div>
      </section>
    </div>
  );
}
