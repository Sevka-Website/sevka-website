import { Link } from 'react-router-dom';
import { Award, Users, Heart, Shield } from 'lucide-react';

const team = [
  {
    name: 'Dr. Priya Mehta', role: 'Founder & Chief Dentist',
    spec: 'MDS – Prosthodontics · 18 yrs experience',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80',
  },
  {
    name: 'Dr. Arjun Singh', role: 'Senior Orthodontist',
    spec: 'MDS – Orthodontics · Invisalign Certified',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80',
  },
  {
    name: 'Dr. Neha Kapoor', role: 'Cosmetic Specialist',
    spec: 'BDS + Fellowship in Aesthetic Dentistry',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
  },
  {
    name: 'Dr. Rahul Verma', role: 'Implantologist',
    spec: 'MDS – Oral Surgery · 500+ implants placed',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80',
  },
];

const values = [
  { icon: <Heart className="text-[#1B6CA8]" size={22} />, title: 'Patient-First Always', desc: 'Every treatment plan is designed around your comfort, goals, and budget — not convenience for us.' },
  { icon: <Shield className="text-[#1B6CA8]" size={22} />, title: 'Highest Sterilisation Standards', desc: 'We follow OSHA and ADA sterilisation protocols. Your safety is non-negotiable.' },
  { icon: <Award className="text-[#1B6CA8]" size={22} />, title: 'Continuing Education', desc: 'Our doctors attend international conferences annually to bring the latest techniques to you.' },
  { icon: <Users className="text-[#1B6CA8]" size={22} />, title: 'Transparent Communication', desc: 'We explain everything before we touch a tooth. Full cost breakdowns, always.' },
];

export default function ClaraDentAbout() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0FFFE 100%)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">Our Story</span>
            <h1 className="text-5xl font-extrabold mt-3 mb-6" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
              15 Years of<br /><span className="text-[#1B6CA8]">Trusted Smiles</span>
            </h1>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-5">
              ClaraDent was founded in 2009 by Dr. Priya Mehta with a single mission: to make world-class dental care accessible, comfortable, and honest for every patient.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-8">
              Starting with a small two-chair clinic in Andheri, we've grown into a full-service dental centre serving over 5,000 active patients. Our philosophy has never changed: every patient deserves a dentist they can trust.
            </p>
            <Link to="/work/claradent/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B6CA8] text-white font-semibold rounded-xl hover:bg-[#155694] transition-all shadow-lg shadow-[#1B6CA8]/20">
              Book a Visit →
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=85"
                alt="ClaraDent clinic" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { num: '5,000+', label: 'Patients Treated' },
                { num: '15+', label: 'Years of Care' },
                { num: '4.9★', label: 'Average Rating' },
                { num: '98%', label: 'Would Recommend' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 text-center border border-[#E0ECF4] shadow-sm">
                  <div className="text-2xl font-extrabold text-[#1B6CA8] mb-1">{stat.num}</div>
                  <div className="text-[#6B7F90] text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">What We Believe</span>
            <h2 className="text-4xl font-extrabold mt-3" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <div key={i} className="flex items-start gap-5 p-8 rounded-2xl border border-[#E0ECF4] hover:border-[#1B6CA8]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#EBF4FF] flex items-center justify-center shrink-0">{val.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0D1B2A] text-lg mb-2">{val.title}</h3>
                  <p className="text-[#6B7F90] text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6" style={{ background: '#F8FAFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">The Experts</span>
            <h2 className="text-4xl font-extrabold mt-3" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>Meet Your Doctors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#E0ECF4] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-[#0D1B2A]">{doc.name}</h3>
                  <p className="text-[#1B6CA8] text-sm font-semibold mt-1">{doc.role}</p>
                  <p className="text-[#6B7F90] text-xs mt-2 leading-relaxed">{doc.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B6CA8, #0AAFA0)' }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>Come Visit Us</h2>
          <p className="text-white/80 text-lg mb-8">
            12, Mehta Chambers, Andheri West, Mumbai 400058<br />
            Mon–Sat: 9 AM – 8 PM &nbsp;·&nbsp; Sun: 10 AM – 2 PM
          </p>
          <Link to="/work/claradent/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#1B6CA8] font-bold rounded-xl hover:shadow-xl transition-all">
            Book Your Visit →
          </Link>
        </div>
      </section>
    </div>
  );
}
