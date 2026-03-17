import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Star, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';

const services = [
  {
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
    title: 'General Dentistry',
    desc: 'Routine check-ups, cleanings, fillings, and preventive care to keep your teeth healthy for life.',
  },
  {
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80',
    title: 'Cosmetic Dentistry',
    desc: 'Veneers, bonding, and smile makeovers that give you the confidence to show off your smile.',
  },
  {
    img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80',
    title: 'Orthodontics',
    desc: 'Traditional braces and clear aligners (Invisalign) to straighten teeth at any age.',
  },
  {
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking replacements for missing teeth with a 98% success rate.',
  },
  {
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80',
    title: 'Root Canal',
    desc: 'Pain-free, same-day root canal treatments using the latest rotary techniques.',
  },
  {
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    title: 'Teeth Whitening',
    desc: 'Professional whitening treatments that deliver visible results in a single visit.',
  },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Patient since 2019', stars: 5, text: 'Dr. Mehta and her team are incredible. I was terrified of dentists before ClaraDent. Now I look forward to my visits. The new implants changed my life.' },
  { name: 'Rohan Kapoor', role: 'Patient since 2021', stars: 5, text: 'Got my Invisalign done here and the results are stunning. Very professional, very clean, and the staff explained everything clearly. Highly recommend!' },
  { name: 'Aisha Patel', role: 'Patient since 2020', stars: 5, text: 'Best dental experience in Mumbai. The clinic is spotless, technology is top-notch, and Dr. Singh is very gentle. My whole family comes here now.' },
];

const faqs = [
  { q: 'Do you accept insurance?', a: 'Yes, we work with most major insurance providers including Star Health, ICICI Lombard, and Bajaj Allianz. Our front desk will help verify your coverage.' },
  { q: 'Is teeth whitening safe?', a: 'Absolutely. Our professional whitening uses ADA-approved materials and is supervised by our dental team. It\'s safe, effective, and far stronger than over-the-counter products.' },
  { q: 'How long does a dental implant take?', a: 'The full process typically takes 3–6 months. The implant placement is a single procedure, followed by a healing period before the final crown is fitted.' },
  { q: 'What should I do in a dental emergency?', a: 'Call us immediately at +91 98200 55432. We reserve slots for same-day emergency patients. For after-hours emergencies, follow the voicemail instructions.' },
];

export default function ClaraDentHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-[#0D1B2A]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0FFFE 50%, #FFFFFF 100%)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(27,108,168,0.2) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B6CA8]/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1B6CA8] animate-pulse" />
              <span className="text-[#1B6CA8] text-sm font-semibold">Now Accepting New Patients</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              Your Smile,<br />
              <span style={{ color: '#1B6CA8' }}>Our Priority.</span>
            </h1>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-10 max-w-md">
              Advanced dental care delivered with a gentle touch. Over 5,000 happy patients and counting — right here in Andheri, Mumbai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/work/claradent/contact"
                className="px-8 py-4 bg-[#1B6CA8] text-white font-semibold rounded-xl hover:bg-[#155694] transition-all text-center shadow-lg shadow-[#1B6CA8]/20">
                Book Appointment →
              </Link>
              <a href="tel:+919820055432"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1B6CA8] text-[#1B6CA8] font-semibold rounded-xl hover:bg-[#1B6CA8]/5 transition-all">
                <Phone size={18} /> Call Us Now
              </a>
            </div>
            <div className="flex gap-6 mt-10 text-sm text-[#4A5568]">
              {[{ num: '5000+', label: 'Happy Patients' }, { num: '15+', label: 'Years Experience' }, { num: '4.9★', label: 'Google Rating' }].map((s, i) => (
                <div key={i} className={i > 0 ? 'pl-6 border-l border-[#E2E8F0]' : ''}>
                  <div className="font-bold text-xl text-[#0D1B2A]">{s.num}</div>
                  <div className="text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=85"
                alt="ClaraDent dental clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,108,168,0.3) 0%, transparent 60%)' }} />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">✓</div>
              <div>
                <p className="font-bold text-sm text-[#0D1B2A]">MCI & IDA Certified</p>
                <p className="text-xs text-[#6B7F90]">Highest Safety Standards</p>
              </div>
            </div>
            {/* Floating rating */}
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="#F59E0B" className="text-yellow-400" />)}
              </div>
              <p className="font-bold text-sm text-[#0D1B2A]">4.9 / 5</p>
              <p className="text-xs text-[#6B7F90]">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6" style={{ background: '#F8FAFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              Complete Dental Care
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
              From routine check-ups to full smile transformations — all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#E0ECF4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#0D1B2A] mb-2 group-hover:text-[#1B6CA8] transition-colors">{svc.title}</h3>
                  <p className="text-[#6B7F90] text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/work/claradent/services" className="inline-flex items-center gap-1 text-[#1B6CA8] text-sm font-semibold hover:gap-2 transition-all">
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=85"
              alt="Modern dental clinic interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">Why ClaraDent</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-8" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              Dentistry Reimagined.<br />Comfort Guaranteed.
            </h2>
            <ul className="flex flex-col gap-5">
              {[
                { title: 'Pain-Free Treatments', desc: 'Advanced anaesthesia techniques and a gentle team ensure every visit is comfortable.' },
                { title: 'Same-Day Appointments', desc: 'We respect your time. Most patients are seen within 24 hours of booking.' },
                { title: 'Latest Technology', desc: 'Digital X-rays, 3D scans, and laser dentistry for precise, minimal-invasive care.' },
                { title: 'Transparent Pricing', desc: 'Full cost breakdowns before any treatment. No hidden fees, ever.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="text-[#0AAFA0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#0D1B2A]">{item.title}</h4>
                    <p className="text-sm text-[#6B7F90]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CLINIC PHOTOS STRIP ── */}
      <section className="py-16 px-6" style={{ background: '#F8FAFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">Inside Our Clinic</span>
            <h2 className="text-3xl font-extrabold mt-3" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              A Space Designed for Your Comfort
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80', label: 'Treatment Room' },
              { src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&q=80', label: 'Reception Area' },
              { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&q=80', label: 'Modern Equipment' },
              { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80', label: 'Friendly Team' },
            ].map((photo, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm">
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">Patient Stories</span>
            <h2 className="text-4xl font-extrabold mt-3" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              Real Smiles, Real Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#F8FAFF] rounded-2xl p-8 border border-[#E0ECF4]">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={16} fill="#F59E0B" className="text-yellow-400" />)}
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B6CA8]/10 flex items-center justify-center text-[#1B6CA8] font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#0D1B2A] text-sm">{t.name}</p>
                    <p className="text-xs text-[#6B7F90]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6" style={{ background: '#F8FAFF' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">FAQ</span>
            <h2 className="text-4xl font-extrabold mt-3" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              Common Questions
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-[#E0ECF4]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left gap-4 cursor-pointer">
                  <span className="font-semibold text-[#0D1B2A]">{faq.q}</span>
                  <ChevronDown size={18} className={`text-[#1B6CA8] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="text-[#6B7F90] text-sm leading-relaxed mt-3 pr-8">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B6CA8 0%, #0AAFA0 100%)' }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
            Ready for a Healthier Smile?
          </h2>
          <p className="text-white/80 text-lg mb-8">Book your free consultation today — no commitment, just care.</p>
          <Link to="/work/claradent/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#1B6CA8] font-bold rounded-xl hover:shadow-xl transition-all">
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
