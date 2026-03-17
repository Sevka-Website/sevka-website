import { Link } from 'react-router-dom';
import { Trophy, Target, Users, BookOpen } from 'lucide-react';

const faculty = [
  { name: 'Prof. Rajesh Kumar', subject: 'Physics – IIT Bombay alumni', exp: '22 years', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80' },
  { name: 'Dr. Anita Sharma', subject: 'Chemistry – AIIMS Graduate', exp: '18 years', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80' },
  { name: 'Prof. Suresh Nair', subject: 'Mathematics – IIT Delhi alumni', exp: '15 years', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Dr. Priya Menon', subject: 'Biology – JIPMER Graduate', exp: '14 years', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
];

const milestones = [
  { year: '2006', event: 'Founded in Noida with 40 students and 4 faculty members.' },
  { year: '2010', event: 'Expanded to Delhi with 3 centres. First batch produced AIR Top 100.' },
  { year: '2015', event: 'Launched online platform. 1,000 NEET qualifiers in a single year.' },
  { year: '2019', event: '10,000+ students milestone. Gurgaon centre inaugurated.' },
  { year: '2024', event: '3,000+ IIT selections and 4,500+ NEET qualifiers. 18 years strong.' },
];

export default function NovaAbout() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #0A1628, #1E3A5F)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="text-[#FF9F1C] font-mono text-xs tracking-widest uppercase font-bold">Our Story</span>
            <h1 className="text-5xl font-black mt-3 mb-6">18 Years of<br /><span style={{ color: '#FF9F1C' }}>Shaping Champions</span></h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              NovaAcademy was founded in 2006 by Prof. Rajesh Kumar with one belief: every student deserves world-class coaching, not just those who can afford elite institutes in big cities.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Starting with 40 students in a single room in Noida, we've grown into a multi-city coaching network with 12,000+ active students, 150+ faculty, and a track record that speaks louder than any advertisement.
            </p>
            <Link to="/work/novaacademy/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
              Join the Nova Family →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Trophy size={22} className="text-[#FF9F1C]" />, num: '3,000+', label: 'IIT Selections' },
              { icon: <Target size={22} className="text-[#10B981]" />, num: '4,500+', label: 'NEET Qualifiers' },
              { icon: <Users size={22} className="text-[#6366F1]" />, num: '12,000+', label: 'Active Students' },
              { icon: <BookOpen size={22} className="text-[#FF6B2B]" />, num: '150+', label: 'Expert Faculty' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-3">{s.icon}</div>
                <div className="font-black text-3xl text-white mb-1">{s.num}</div>
                <div className="text-white/50 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B2B] font-mono text-xs tracking-widest uppercase font-bold">Our Journey</span>
            <h2 className="text-4xl font-black mt-3 text-[#0A1628]">18 Years of Milestones</h2>
          </div>
          <div className="flex flex-col gap-0 relative">
            <div className="absolute left-[86px] top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start pb-10 relative">
                <div className="shrink-0 w-16 text-right font-black text-[#FF6B2B] text-sm">{m.year}</div>
                <div className="hidden md:flex shrink-0 w-5 h-5 rounded-full border-4 border-[#FF6B2B] bg-white mt-0.5 relative z-10" />
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-grow">
                  <p className="text-[#374151] text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B2B] font-mono text-xs tracking-widest uppercase font-bold">The Experts</span>
            <h2 className="text-4xl font-black mt-3 text-[#0A1628]">Meet Our Star Faculty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {faculty.map((f, i) => (
              <div key={i} className="bg-[#F8FAFF] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-[#0A1628] text-sm">{f.name}</h3>
                  <p className="text-[#FF6B2B] text-xs font-semibold mt-1">{f.subject}</p>
                  <p className="text-[#6B7280] text-xs mt-1">{f.exp} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-black mb-4">Be Part of Our Story</h2>
          <p className="text-white/85 text-lg mb-8">Join thousands of students who trusted Nova and reached their dream college.</p>
          <Link to="/work/novaacademy/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white rounded-xl font-bold text-[#FF6B2B] hover:shadow-xl transition-all">
            Book Free Demo Class →
          </Link>
        </div>
      </section>
    </div>
  );
}
