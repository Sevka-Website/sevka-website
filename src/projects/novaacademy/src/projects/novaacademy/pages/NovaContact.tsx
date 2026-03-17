import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

const centres = [
  { city: 'Noida (HQ)', addr: 'Nova Tower, 3rd Floor, Sector 18, Noida – 201301', phone: '+91 98100 00001' },
  { city: 'Delhi – Connaught Place', addr: '4th Floor, Statesman House, Barakhamba Road – 110001', phone: '+91 98100 00002' },
  { city: 'Gurgaon', addr: 'DLF Cyber Hub, Tower B, Sector 24, Gurgaon – 122002', phone: '+91 98100 00003' },
];

export default function NovaContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', mode: '', message: '' });

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628, #1E3A5F)' }}>
        <span className="text-[#FF9F1C] font-mono text-xs tracking-widest uppercase font-bold">Get in Touch</span>
        <h1 className="text-5xl font-black mt-3 mb-4">Book Your Free Demo</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Experience a real Nova class for free. No fees, no commitment — just great teaching.
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-black text-[#0A1628] mb-8">Our Centres</h2>
            <div className="flex flex-col gap-5 mb-10">
              {centres.map((c, i) => (
                <div key={i} className="bg-[#F8FAFF] rounded-2xl p-5 border border-gray-100">
                  <h3 className="font-black text-[#0A1628] mb-1">{c.city}</h3>
                  <p className="text-[#6B7280] text-sm flex items-start gap-2 mb-1"><MapPin size={13} className="text-[#FF6B2B] mt-0.5 shrink-0" />{c.addr}</p>
                  <p className="text-[#6B7280] text-sm flex items-center gap-2"><Phone size={13} className="text-[#FF6B2B]" />{c.phone}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-sm text-[#374151]">
              <div className="flex items-center gap-3"><Mail size={16} className="text-[#FF6B2B]" />admissions@novaacademy.in</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-[#FF6B2B]" />1800-000-0000 (Toll Free)</div>
              <div className="flex items-start gap-3"><Clock size={16} className="text-[#FF6B2B] mt-0.5" />Mon–Sat: 8 AM – 8 PM &nbsp;·&nbsp; Sun: 10 AM – 4 PM</div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-16">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-[#0A1628]">Demo Booked!</h3>
                <p className="text-[#6B7280]">Our team will call you within 2 hours to confirm your free demo class slot.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-4">
                <h2 className="text-2xl font-black text-[#0A1628] mb-2">Fill in Your Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider block mb-1.5">Student Name *</label>
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider block mb-1.5">Mobile Number *</label>
                    <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-sm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider block mb-1.5">Email Address</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-sm transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider block mb-1.5">Course Interested In *</label>
                  <select required value={form.course} onChange={e => setForm(f => ({ ...f, course: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-sm bg-white transition-colors">
                    <option value="">Select course…</option>
                    {['JEE Main & Advanced', 'NEET UG', 'Foundation (Class 8–10)', 'Board Exam Prep', 'Crash Course – JEE', 'Crash Course – NEET'].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider block mb-1.5">Preferred Mode</label>
                  <select value={form.mode} onChange={e => setForm(f => ({ ...f, mode: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-sm bg-white transition-colors">
                    <option value="">Select…</option>
                    {['Online', 'Offline – Noida', 'Offline – Delhi', 'Offline – Gurgaon'].map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider block mb-1.5">Message / Questions</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={3} placeholder="Any specific questions or requirements…"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B2B] text-sm resize-none transition-colors" />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-all"
                  style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                  Book My Free Demo Class →
                </button>
                <p className="text-center text-[#9CA3AF] text-xs">100% Free. No credit card. Our team calls you within 2 hours.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
