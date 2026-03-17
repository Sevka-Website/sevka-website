import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ClaraDentContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics / Invisalign', 'Dental Implants', 'Root Canal', 'Teeth Whitening', 'Other / Not Sure'];

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #F0FFFE 100%)' }}>
        <span className="text-[#1B6CA8] font-mono text-xs tracking-widest uppercase font-semibold">Get In Touch</span>
        <h1 className="text-5xl font-extrabold mt-3 mb-4" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>
          Book Your Appointment
        </h1>
        <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
          Fill in the form and our team will confirm your appointment within 2 hours during clinic hours.
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-8" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>Clinic Information</h2>
            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: <MapPin size={20} className="text-[#1B6CA8]" />, label: 'Address', value: '12, Mehta Chambers, S.V. Road,\nAndheri West, Mumbai 400058' },
                { icon: <Phone size={20} className="text-[#1B6CA8]" />, label: 'Phone', value: '+91 98200 55432' },
                { icon: <Mail size={20} className="text-[#1B6CA8]" />, label: 'Email', value: 'hello@claradent.in' },
                { icon: <Clock size={20} className="text-[#1B6CA8]" />, label: 'Hours', value: 'Mon–Sat: 9 AM – 8 PM\nSunday: 10 AM – 2 PM' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4FF] flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[#6B7F90] text-xs font-mono uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-[#0D1B2A] font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#E0ECF4]" style={{ height: '220px', background: 'linear-gradient(135deg, #EBF4FF, #CCEEF0)' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-[#1B6CA8] mx-auto mb-2" />
                  <p className="text-[#1B6CA8] font-semibold text-sm">Andheri West, Mumbai</p>
                  <p className="text-[#6B7F90] text-xs mt-1">Near SV Road</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-6 py-16">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0D1B2A]" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>Appointment Requested!</h3>
                <p className="text-[#4A5568]">We'll confirm your slot within 2 hours. Check your phone or email.</p>
                <p className="text-sm text-[#6B7F90]">For urgent needs, call us directly at +91 98200 55432</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-3" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>Request an Appointment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono text-[#6B7F90] uppercase tracking-wider block mb-2">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-[#E0ECF4] focus:outline-none focus:border-[#1B6CA8] text-[#0D1B2A] text-sm bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#6B7F90] uppercase tracking-wider block mb-2">Phone *</label>
                    <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-[#E0ECF4] focus:outline-none focus:border-[#1B6CA8] text-[#0D1B2A] text-sm bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono text-[#6B7F90] uppercase tracking-wider block mb-2">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-[#E0ECF4] focus:outline-none focus:border-[#1B6CA8] text-[#0D1B2A] text-sm bg-white transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-mono text-[#6B7F90] uppercase tracking-wider block mb-2">Service Required</label>
                  <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0ECF4] focus:outline-none focus:border-[#1B6CA8] text-[#0D1B2A] text-sm bg-white transition-colors">
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono text-[#6B7F90] uppercase tracking-wider block mb-2">Message / Concerns</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us a bit about your dental concern…" rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0ECF4] focus:outline-none focus:border-[#1B6CA8] text-[#0D1B2A] text-sm bg-white transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-[#1B6CA8] text-white font-bold rounded-xl hover:bg-[#155694] transition-all shadow-lg shadow-[#1B6CA8]/20 text-base">
                  Request Appointment →
                </button>
                <p className="text-center text-xs text-[#6B7F90]">First consultation is free. No credit card required.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
