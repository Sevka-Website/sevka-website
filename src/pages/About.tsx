import { motion } from 'motion/react';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { Code2, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Brand Story */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <SectionLabel>ABOUT US</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
              We're Sevka.
            </h1>
            <h2 className="text-2xl text-warm-white font-medium mb-8 leading-snug">
              A focused web studio that builds websites with purpose — beautiful, fast, and built to convert.
            </h2>
            <div className="flex flex-col gap-6 text-muted-warm text-lg leading-relaxed">
              <p>
                Sevka started with a simple observation: most websites look great but perform poorly, or perform well but look like they were built in 2010. We decided to bridge that gap.
              </p>
              <p>
                We don't believe in one-size-fits-all templates or bloated code. Every project we take on is crafted from the ground up to serve a specific business goal—whether that's generating leads, selling products, or establishing authority.
              </p>
              <p>
                Based in India but working globally, we partner with ambitious brands who understand that their website is their most important digital asset.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-square relative rounded-3xl overflow-hidden bg-carbon border border-white/5 flex items-center justify-center">
            {/* Abstract visual placeholder */}
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="w-3/4 h-3/4 border border-gold/20 rounded-full flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
              <div className="w-3/4 h-3/4 border border-gold/40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="w-1/2 h-1/2 border border-gold/60 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="w-4 h-4 bg-gold rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#D4A843]" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-carbon border-y border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <SectionLabel>OUR VALUES</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 size={40} className="text-gold" strokeWidth={1.5} />,
                title: 'Craft Over Templates',
                desc: 'We write clean, semantic code and design bespoke interfaces. No generic themes, no bloated page builders. Just pure craft.',
              },
              {
                icon: <Zap size={40} className="text-gold" strokeWidth={1.5} />,
                title: 'Performance Is Non-Negotiable',
                desc: 'A slow website costs you money. We optimize every image, minify every script, and ensure sub-second load times.',
              },
              {
                icon: <Users size={40} className="text-gold" strokeWidth={1.5} />,
                title: 'Clients Are Partners',
                desc: 'We don\'t just take orders; we advise. We treat your business goals as our own and build digital solutions to achieve them.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-void border border-white/5 p-10 rounded-2xl flex flex-col gap-6"
              >
                <div className="p-4 bg-carbon rounded-xl w-fit border border-white/5">
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl font-bold">{value.title}</h3>
                <p className="text-muted-warm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center">
        <SectionLabel>OUR TOOLKIT</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20">
          Built With The Best
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
            { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
            { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
            { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
            { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify' },
            { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress' },
            { name: 'Webflow', logo: 'https://cdn.simpleicons.org/webflow' },
            { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma' },
            { name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce' },
            { name: 'Framer', logo: 'https://cdn.simpleicons.org/framer' },
            { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel' },
            { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' }
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2.5 bg-[#111111] border border-gold/10 rounded-xl p-5 w-[110px] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-[#1A1A1A] group"
            >
              <img src={tech.logo} alt={tech.name} className="w-9 h-9 brightness-0 invert opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0" referrerPolicy="no-referrer" />
              <span className="font-mono text-[11px] text-[#A09880] tracking-wider">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-carbon border-t border-white/5 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-10">
          Let's build something together.
        </h2>
        <Button href="/start" variant="primary">Start a Project &rarr;</Button>
      </section>
    </div>
  );
}
