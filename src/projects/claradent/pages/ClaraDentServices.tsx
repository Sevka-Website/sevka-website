import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: '🦷', title: 'General Dentistry', price: 'From ₹500',
    desc: 'Comprehensive preventive and restorative care to keep your teeth healthy for life.',
    includes: ['Full dental exam & X-rays', 'Professional cleaning (scaling)', 'Tooth-coloured fillings', 'Extractions', 'Fluoride treatments', 'Gum disease management'],
  },
  {
    icon: '✨', title: 'Cosmetic Dentistry', price: 'From ₹3,000',
    desc: 'Smile makeovers tailored to you — natural-looking results that boost your confidence.',
    includes: ['Porcelain veneers', 'Composite bonding', 'Smile design consultations', 'Gum contouring', 'Tooth reshaping', 'Full smile makeover packages'],
  },
  {
    icon: '🔧', title: 'Orthodontics', price: 'From ₹25,000',
    desc: 'Straighten your teeth at any age with braces or virtually invisible aligners.',
    includes: ['Traditional metal braces', 'Ceramic (tooth-coloured) braces', 'Invisalign clear aligners', 'Retainers', 'Lingual braces', 'Free orthodontic consultation'],
  },
  {
    icon: '🔩', title: 'Dental Implants', price: 'From ₹18,000 / implant',
    desc: 'Permanent tooth replacements that look, feel, and function like real teeth.',
    includes: ['Single tooth implants', 'Implant-supported bridges', 'Full-arch restoration', '3D treatment planning', 'Same-day temporary crowns', 'Bone grafting if required'],
  },
  {
    icon: '🩺', title: 'Root Canal Therapy', price: 'From ₹2,500',
    desc: 'Pain-free, precision root canal treatment using the latest rotary systems.',
    includes: ['Digital X-ray diagnosis', 'Rotary endodontics', 'Single-visit RCT possible', 'Post & core placement', 'Crown restoration', 'Emergency same-day service'],
  },
  {
    icon: '🌟', title: 'Teeth Whitening', price: 'From ₹4,000',
    desc: 'Professional whitening that delivers real, lasting results — in one visit or at home.',
    includes: ['In-office laser whitening', 'Take-home whitening kits', 'Shade assessment', 'Sensitivity management', 'Before & after photos', '1-year shade guarantee'],
  },
];

export default function ClaraDentServices() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0FFFE 100%)' }}>
        <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">Our Services</span>
        <h1 className="text-5xl font-extrabold mt-3 mb-4" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
          Complete Dental Care
        </h1>
        <p className="text-[#4A5568] text-lg max-w-xl mx-auto mb-8">
          From your first check-up to a complete smile transformation — everything under one roof, with one trusted team.
        </p>
        <Link to="/work/claradent/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B6CA8] text-white font-semibold rounded-xl hover:bg-[#155694] transition-all shadow-lg shadow-[#1B6CA8]/20">
          Book a Free Consultation →
        </Link>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {services.map((svc, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-12 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-2/5">
                <div className="rounded-3xl p-12 text-center" style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #EBF4FF, #CCEEF0)' : 'linear-gradient(135deg, #F0FFFE, #E3F4FF)' }}>
                  <div className="text-7xl mb-4">{svc.icon}</div>
                  <p className="font-bold text-[#1B6CA8] text-lg">{svc.title}</p>
                  <p className="text-[#0AAFA0] font-mono text-sm mt-1">{svc.price}</p>
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl font-extrabold text-[#0D1B2A] mb-3" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>{svc.title}</h2>
                <p className="text-[#4A5568] text-base leading-relaxed mb-8">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {svc.includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-[#0AAFA0] shrink-0" />
                      <span className="text-[#4A5568] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/work/claradent/contact" className="inline-flex items-center gap-2 text-[#1B6CA8] font-semibold hover:gap-3 transition-all">
                  Book this service <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B6CA8, #0AAFA0)' }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>Not Sure What You Need?</h2>
          <p className="text-white/80 text-lg mb-8">Book a free 15-minute consultation. Our team will assess your smile and recommend the best treatment plan.</p>
          <Link to="/work/claradent/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#1B6CA8] font-bold rounded-xl hover:shadow-xl transition-all">
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
