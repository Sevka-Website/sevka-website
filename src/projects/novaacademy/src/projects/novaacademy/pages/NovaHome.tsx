import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, Star, ArrowRight, Trophy, Users, BookOpen, TrendingUp } from 'lucide-react';

const programs = [
  {
    tag: 'JEE Main & Advanced',
    tagColor: '#FF6B2B',
    title: 'Engineering Entrance',
    desc: 'Comprehensive preparation for JEE Main and Advanced with 2-year, 1-year, and crash course options.',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80',
    features: ['Physics, Chemistry & Maths', 'Daily practice problems', 'Mock tests every week', 'IIT alumni mentors'],
    badge: 'Most Popular',
  },
  {
    tag: 'NEET UG',
    tagColor: '#10B981',
    title: 'Medical Entrance',
    desc: 'Expert-guided NEET preparation covering Biology, Physics, and Chemistry with NCERT mastery.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80',
    features: ['Biology deep-dive sessions', 'NCERT line-by-line coverage', 'Previous year analysis', 'Doctor-mentor access'],
    badge: null,
  },
  {
    tag: 'Foundation',
    tagColor: '#6366F1',
    title: 'Class 8, 9 & 10',
    desc: 'Build a rock-solid academic foundation for future competitive exams while excelling in boards.',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80',
    features: ['School + exam synced syllabus', 'Olympiad preparation', 'Science & Maths focus', 'Doubt-clearing sessions'],
    badge: 'New Batch',
  },
];

const stats = [
  { icon: <Trophy size={22} className="text-[#FF9F1C]" />, value: '12,000+', label: 'Students Enrolled' },
  { icon: <TrendingUp size={22} className="text-[#10B981]" />, value: '94%', label: 'Selection Rate' },
  { icon: <Users size={22} className="text-[#6366F1]" />, value: '150+', label: 'Expert Faculty' },
  { icon: <BookOpen size={22} className="text-[#FF6B2B]" />, value: '18+', label: 'Years of Excellence' },
];

const whyUs = [
  { title: 'India\'s Top Faculty', desc: 'IIT and AIIMS alumni who\'ve mentored thousands of successful students.', img: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=400&q=80' },
  { title: 'Personalised Learning', desc: 'Adaptive tests track your weak areas and create a study plan just for you.', img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80' },
  { title: 'Proven Track Record', desc: 'Over 3,000 IIT selections and 4,500 NEET qualifications in the last 5 years.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80' },
];

const toppers = [
  { name: 'Aryan Sharma', exam: 'JEE Advanced 2024', rank: 'AIR 47', quote: 'Nova\'s structured approach and weekly mocks completely changed how I prepared. The faculty are incredible.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80' },
  { name: 'Sneha Patel', exam: 'NEET UG 2024', rank: '690 / 720', quote: 'The Biology sessions here are unmatched. My teacher explained every NCERT line until I understood it perfectly.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80' },
  { name: 'Rahul Verma', exam: 'JEE Main 2024', rank: '99.6 Percentile', quote: 'I joined the crash course just 3 months before JEE and cleared with 99.6 percentile. The DPP sheets are gold.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80' },
];

const faqs = [
  { q: 'Do you offer online and offline batches?', a: 'Yes, we offer both classroom and live online batches. Our hybrid model lets you attend physical classes while accessing recordings online for revision.' },
  { q: 'When do new batches start?', a: 'New JEE and NEET batches start in April and November each year. Foundation batches begin in May. Crash courses are available year-round.' },
  { q: 'Is study material included?', a: 'Yes. All students receive printed modules, DPP (Daily Practice Problems) sheets, and full access to our digital library with 10,000+ questions.' },
  { q: 'What is the fee structure?', a: 'Fees vary by course and duration. We offer EMI options starting at ₹2,500/month. Contact our admissions team for exact pricing and available scholarships.' },
  { q: 'Do you offer scholarship tests?', a: 'Absolutely. Our NSAT (Nova Scholarship Admission Test) is held quarterly. Top scorers get up to 90% fee waiver.' },
];

export default function NovaHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', course: '', city: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-[#0A1628]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 60%, #0A1628 100%)' }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,107,43,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FF6B2B 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF9F1C] animate-pulse" />
              <span className="text-[#FF9F1C] text-sm font-semibold">New Batch Starting April 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"DM Sans", sans-serif' }}>
              India's Most<br />
              <span style={{ background: 'linear-gradient(90deg, #FF6B2B, #FF9F1C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Trusted Coaching
              </span><br />
              for JEE & NEET
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              12,000+ students. 94% selection rate. Expert faculty from IITs and AIIMS. Your rank begins here.
            </p>

            {/* Stats mini bar */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[{ v: '3,000+', l: 'IIT Selections' }, { v: '4,500+', l: 'NEET Qualifiers' }, { v: '99.9%ile', l: 'Top JEE Score' }].map((s, i) => (
                <div key={i} className={i > 0 ? 'pl-6 border-l border-white/15' : ''}>
                  <div className="font-black text-2xl text-white">{s.v}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/work/novaacademy/contact"
                className="px-8 py-4 rounded-xl font-bold text-white text-center hover:opacity-90 transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                Book Free Demo Class →
              </Link>
              <Link to="/work/novaacademy/courses"
                className="px-8 py-4 rounded-xl font-bold border border-white/20 text-white text-center hover:bg-white/5 transition-all">
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={36} className="text-green-500" />
                </div>
                <h3 className="text-xl font-black text-[#0A1628]">You're Registered!</h3>
                <p className="text-[#4A5568] text-sm">Our admissions team will call you within 2 hours to confirm your free demo class.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-[#0A1628] mb-1">Book a Free Demo Class</h3>
                <p className="text-[#6B7280] text-sm mb-6">No commitment. Just experience the Nova difference.</p>
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <input required value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                    placeholder="Student's Full Name *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-[#0A1628] text-sm transition-colors" />
                  <input required value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                    placeholder="Parent's Mobile Number *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-[#0A1628] text-sm transition-colors" />
                  <select required value={formData.course} onChange={e => setFormData(f => ({ ...f, course: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-[#0A1628] text-sm bg-white transition-colors">
                    <option value="">Select Course *</option>
                    {['JEE Main & Advanced', 'NEET UG', 'Foundation (Class 8–10)', 'Board Exam Prep', 'Crash Course'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <select value={formData.city} onChange={e => setFormData(f => ({ ...f, city: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-[#0A1628] text-sm bg-white transition-colors">
                    <option value="">Preferred Mode</option>
                    {['Online', 'Offline – Noida', 'Offline – Delhi', 'Offline – Gurgaon'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <button type="submit"
                    className="w-full py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-all mt-1"
                    style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                    Book My Free Demo →
                  </button>
                  <p className="text-center text-[#9CA3AF] text-xs">100% Free. No credit card required.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 -mt-8 relative z-10">
            {stats.map((s, i) => (
              <div key={i} className={`bg-white border border-gray-100 shadow-lg px-6 py-6 flex items-center gap-4 ${i === 0 ? 'rounded-tl-2xl rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl' : ''} ${i === 3 ? 'rounded-tr-2xl rounded-br-2xl md:rounded-bl-none' : ''} ${i === 1 ? 'border-l-0' : ''} ${i === 2 ? 'border-l-0' : ''} ${i === 3 ? 'border-l-0' : ''}`}>
                <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">{s.icon}</div>
                <div>
                  <div className="font-black text-2xl text-[#0A1628]">{s.value}</div>
                  <div className="text-[#6B7280] text-xs">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-24 px-6 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B2B] font-mono text-xs tracking-widest uppercase font-bold">Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 text-[#0A1628]">
              Choose Your Path to Success
            </h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Expert-designed courses for every stage of your competitive exam journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {programs.map((prog, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
                {prog.badge && (
                  <div className="absolute mt-4 ml-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                      {prog.badge}
                    </span>
                  </div>
                )}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)' }} />
                  {prog.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                      {prog.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                    style={{ background: prog.tagColor + '33', border: `1px solid ${prog.tagColor}` }}>
                    {prog.tag}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-black text-xl text-[#0A1628] mb-2">{prog.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{prog.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-6 flex-grow">
                    {prog.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-[#374151]">
                        <CheckCircle2 size={15} className="text-[#FF6B2B] shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/work/novaacademy/courses"
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                    Explore Program <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/work/novaacademy/courses" className="inline-flex items-center gap-2 text-[#FF6B2B] font-bold hover:gap-3 transition-all">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY NOVA ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B2B] font-mono text-xs tracking-widest uppercase font-bold">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-[#0A1628]">
              The Nova Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="font-black text-xl text-[#0A1628] mb-3">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Feature checklist */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F8FAFF] rounded-3xl p-10">
            {[
              'Live + recorded classes available 24/7',
              'Doubt-clearing sessions 6 days a week',
              'Weekly full syllabus mock tests',
              'Performance analytics dashboard',
              'Dedicated parent-teacher meetings',
              'Small batch sizes (max 30 students)',
              'Study material worth ₹15,000 included',
              'Scholarship available up to 90%',
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-[#374151]">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                  <CheckCircle2 size={12} className="text-white" />
                </div>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPPERS ── */}
      <section className="py-24 px-6" style={{ background: '#0A1628' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF9F1C] font-mono text-xs tracking-widest uppercase font-bold">Student Success</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">Our Toppers Speak</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toppers.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#FF6B2B]/40 transition-colors">
                <div className="flex items-center gap-4 mb-5">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6B2B]" />
                  <div>
                    <p className="font-black text-white">{t.name}</p>
                    <p className="text-[#FF9F1C] text-xs font-bold">{t.rank}</p>
                    <p className="text-white/40 text-xs">{t.exam}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#FF9F1C" className="text-[#FF9F1C]" />)}
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 bg-[#F8FAFF]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B2B] font-mono text-xs tracking-widest uppercase font-bold">FAQ</span>
            <h2 className="text-4xl font-black mt-3 text-[#0A1628]">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-white rounded-2xl border transition-all ${openFaq === i ? 'border-[#FF6B2B]/30 shadow-md' : 'border-gray-100'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left gap-4 px-7 py-5 cursor-pointer">
                  <span className="font-bold text-[#0A1628]">{faq.q}</span>
                  <ChevronDown size={18} className={`text-[#FF6B2B] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="text-[#6B7280] text-sm leading-relaxed px-7 pb-6">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF6B2B 0%, #FF9F1C 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Start Your Journey Today</h2>
          <p className="text-white/85 text-lg mb-8">Join 12,000+ students who chose Nova. Your first class is on us.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/work/novaacademy/contact"
              className="px-10 py-4 bg-white rounded-xl font-bold text-[#FF6B2B] hover:shadow-xl transition-all">
              Book Free Demo Class →
            </Link>
            <Link to="/work/novaacademy/courses"
              className="px-10 py-4 border-2 border-white rounded-xl font-bold text-white hover:bg-white/10 transition-all">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
