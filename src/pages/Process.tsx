import { motion } from 'motion/react';
import SectionLabel from '../components/SectionLabel';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export default function Process() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How long does a website take?',
      a: 'A standard 5-page website usually takes 2-4 weeks from discovery to launch. E-commerce stores and complex custom builds can take 6-12 weeks depending on requirements and feedback cycles.',
    },
    {
      q: 'Do you work with clients outside India?',
      a: 'Yes, absolutely. We work with clients globally. We adapt to your time zone for meetings and ensure seamless communication throughout the project.',
    },
    {
      q: 'What do you need from me to start?',
      a: 'We need your brand assets (logo, colors, fonts if any), a general idea of your goals, and any content (text/images) you have. If you don\'t have content, we can help with copywriting and sourcing imagery.',
    },
    {
      q: 'Do you offer payment in installments?',
      a: 'Yes. Our standard structure is 50% upfront to secure your spot in our schedule, and 50% upon project completion before the final site goes live.',
    },
    {
      q: 'What platforms do you build on?',
      a: 'We specialize in custom React/Next.js builds, Webflow, Shopify, and WordPress. We choose the platform that best fits your specific business needs and technical requirements.',
    },
    {
      q: 'Will I be able to manage the site myself after launch?',
      a: 'Yes. We build with user-friendly Content Management Systems (CMS) and provide a training session + documentation so you can easily update text, images, and products yourself.',
    },
    {
      q: 'Do you offer ongoing maintenance?',
      a: 'Yes, we offer monthly retainer packages for ongoing updates, security monitoring, SEO improvements, and technical support.',
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          How We Work
        </h1>
        <p className="text-xl text-muted-warm max-w-2xl mx-auto">
          A streamlined, transparent process — from first hello to launch day.
        </p>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 z-0" />
        
        <div className="flex flex-col gap-24 relative z-10">
          {[
            {
              num: '01',
              title: 'Discovery & Brief',
              duration: '1–2 days',
              desc: 'We start by understanding your business, goals, audience, and competitors. We ask the right questions so we build the right thing.',
            },
            {
              num: '02',
              title: 'Strategy & Planning',
              duration: '2–3 days',
              desc: 'We map out the sitemap, user flows, tech stack, and timeline. You get a clear project plan before we touch a pixel.',
            },
            {
              num: '03',
              title: 'Design (UI/UX)',
              duration: '5–10 days',
              desc: 'We design in Figma — wireframes first, then full visual designs. You review and approve before development starts.',
            },
            {
              num: '04',
              title: 'Development',
              duration: '7–21 days (project dependent)',
              desc: 'We code your website with clean, production-ready code. Responsive across all devices. Performance built in from the start.',
            },
            {
              num: '05',
              title: 'Review & Revisions',
              duration: '3–5 days',
              desc: 'You get to review everything on a staging link. We refine until it\'s exactly right.',
            },
            {
              num: '06',
              title: 'Launch',
              duration: '1 day',
              desc: 'We handle domain connection, SSL, speed checks, and go live. Full launch checklist completed before handover.',
            },
            {
              num: '07',
              title: 'Post-Launch Support',
              duration: '30 days included',
              desc: 'Bugs fixed free for 30 days. Training provided. Ongoing support plans available.',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col md:flex-row items-start md:items-center w-full"
            >
              {/* Number Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-carbon border-2 border-gold flex items-center justify-center font-mono text-lg md:text-xl font-bold text-gold shadow-[0_0_30px_rgba(212,168,67,0.2)] z-20">
                {step.num}
              </div>

              {/* Content Container */}
              <div className={clsx(
                "w-full md:w-1/2 pl-20 md:pl-0",
                i % 2 === 0 ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16 md:text-left"
              )}>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{step.title}</h3>
                <span className="font-mono text-xs text-gold uppercase tracking-wider block mb-4">Duration: {step.duration}</span>
                <p className="text-muted-warm text-base md:text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-carbon border-t border-white/5 mt-20">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Common Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-void">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold text-lg">{faq.q}</span>
                  <ChevronDown 
                    className={clsx("text-gold transition-transform duration-300", openFaq === i ? "rotate-180" : "")} 
                    size={20} 
                  />
                </button>
                <div 
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 pb-6 text-muted-warm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
