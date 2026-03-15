import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { CheckCircle2, MonitorSmartphone, ShoppingCart, LayoutTemplate, PenTool, Search, MoreHorizontal, X } from 'lucide-react';
import clsx from 'clsx';

// ✅ REPLACE YOUR_PUBLIC_KEY with key from dashboard.emailjs.com/admin/account
const SERVICE_ID = 'service_k2d48vk';
const TEMPLATE_ID = '2fxwiaq';
const PUBLIC_KEY = 'JNt4FpIbLeAEyUatE'; // ← ONLY THING YOU NEED TO CHANGE

export default function Start() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Discovery call modal
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [discoverySubmitted, setDiscoverySubmitted] = useState(false);
  const [discoveryLoading, setDiscoveryLoading] = useState(false);
  const [discoveryError, setDiscoveryError] = useState('');
  const [discoveryData, setDiscoveryData] = useState({
    name: '', email: '', phone: '', topic: '', preferredTime: '',
  });

  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', website: '', country: '',
    projectType: '', budget: '', timeline: '', details: '',
    source: '', references: '', extra: '', agree: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleDiscoveryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setDiscoveryData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProjectTypeSelect = (type: string) => {
    setFormData(prev => ({ ...prev, projectType: type }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  // Main form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        business_name: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        country: formData.country,
        existing_website: formData.website || 'Not provided',
        project_type: formData.projectType || 'Not selected',
        budget: formData.budget,
        timeline: formData.timeline,
        project_details: formData.details,
        how_found: formData.source,
        references: formData.references || 'None',
        additional_notes: formData.extra || 'None',
      }, PUBLIC_KEY);
      setIsSubmitted(true);
    } catch (err: any) {
      setError(`Something went wrong (${err?.text || err?.message || 'unknown error'}). Please email abhishek.webstudio@gmail.com directly.`);
    } finally {
      setIsLoading(false);
    }
  };

  // Discovery call submit
  const handleDiscoverySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDiscoveryLoading(true);
    setDiscoveryError('');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: discoveryData.name,
        from_email: discoveryData.email,
        business_name: 'DISCOVERY CALL REQUEST',
        phone: discoveryData.phone || 'Not provided',
        country: 'Not provided',
        existing_website: 'Not provided',
        project_type: '📞 Discovery Call',
        budget: 'To be discussed',
        timeline: discoveryData.preferredTime || 'Flexible',
        project_details: discoveryData.topic,
        how_found: 'Discovery call form',
        references: 'N/A',
        additional_notes: `Preferred time: ${discoveryData.preferredTime || 'Flexible'}`,
      }, PUBLIC_KEY);
      setDiscoverySubmitted(true);
    } catch (err: any) {
      setDiscoveryError('Something went wrong. Please email abhishek.webstudio@gmail.com directly.');
    } finally {
      setDiscoveryLoading(false);
    }
  };

  const projectTypes = [
    { id: 'new', label: 'New Website from Scratch', icon: <MonitorSmartphone size={24} /> },
    { id: 'ecommerce', label: 'E-Commerce Store', icon: <ShoppingCart size={24} /> },
    { id: 'landing', label: 'Landing Page / Funnel', icon: <LayoutTemplate size={24} /> },
    { id: 'redesign', label: 'Redesign of Existing Site', icon: <PenTool size={24} /> },
    { id: 'seo', label: 'SEO Optimization', icon: <Search size={24} /> },
    { id: 'other', label: 'Something Else', icon: <MoreHorizontal size={24} /> },
  ];

  const inputCls = "bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors w-full";
  const labelCls = "font-mono text-xs text-warm-white/60 uppercase tracking-wider";

  return (
    <div className="flex flex-col w-full min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto w-full text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Let's Build Something Great.
        </h1>
        <p className="text-xl text-muted-warm mb-8">
          Fill in the form below and we'll get back to you within 24 hours. First consultation is completely free.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-gold uppercase tracking-widest">
          <span>✓ Response within 24hrs</span>
          <span>✓ Free consultation</span>
          <span>✓ No commitment required</span>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-12 px-6 max-w-3xl mx-auto w-full mb-32">
        <div className="bg-carbon border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

          {!isSubmitted && (
            <div className="absolute top-0 left-0 w-full h-1 bg-void">
              <motion.div className="h-full bg-gold" initial={{ width: '33%' }}
                animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.3 }} />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}
                className="flex flex-col gap-8"
              >
                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <div className="mb-4">
                      <SectionLabel>STEP 01/03</SectionLabel>
                      <h2 className="font-display text-3xl font-bold">About You & Your Project</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Full Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Business / Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleInputChange} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Website (if existing)</label>
                        <input type="url" name="website" value={formData.website} onChange={handleInputChange} className={inputCls} placeholder="https://" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Country / Region *</label>
                        <input required type="text" name="country" value={formData.country} onChange={handleInputChange} className={inputCls} />
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <div className="mb-4">
                      <SectionLabel>STEP 02/03</SectionLabel>
                      <h2 className="font-display text-3xl font-bold">Project Details</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className={labelCls}>What type of project do you need? *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projectTypes.map(pt => (
                          <button key={pt.id} type="button" onClick={() => handleProjectTypeSelect(pt.id)}
                            className={clsx("flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300",
                              formData.projectType === pt.id ? "bg-gold/10 border-gold text-gold" : "bg-void border-white/10 text-warm-white/80 hover:border-white/30"
                            )}>
                            <div className={clsx("p-2 rounded-lg", formData.projectType === pt.id ? "bg-gold text-void" : "bg-carbon")}>{pt.icon}</div>
                            <span className="font-medium">{pt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Estimated Budget *</label>
                        <select required name="budget" value={formData.budget} onChange={handleInputChange} className={inputCls + " appearance-none"}>
                          <option value="" disabled>Select a range</option>
                          <option value="Under ₹25,000 / $300">Under ₹25,000 / $300</option>
                          <option value="₹25,000–₹75,000 / $300–$900">₹25,000–₹75,000 / $300–$900</option>
                          <option value="₹75,000–₹2,00,000 / $900–$2,500">₹75,000–₹2,00,000 / $900–$2,500</option>
                          <option value="₹2,00,000+ / $2,500+">₹2,00,000+ / $2,500+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Timeline *</label>
                        <select required name="timeline" value={formData.timeline} onChange={handleInputChange} className={inputCls + " appearance-none"}>
                          <option value="" disabled>Select timeline</option>
                          <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                          <option value="1–2 months">1–2 months</option>
                          <option value="2–4 months">2–4 months</option>
                          <option value="Flexible / no rush">Flexible / no rush</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelCls}>Tell us about your project *</label>
                      <textarea required name="details" value={formData.details} onChange={handleInputChange} rows={4}
                        className={inputCls + " resize-none"}
                        placeholder="Tell us what your business does, what you need, and what success looks like for you..." />
                    </div>
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <div className="mb-4">
                      <SectionLabel>STEP 03/03</SectionLabel>
                      <h2 className="font-display text-3xl font-bold">Final Details</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelCls}>How did you find us? *</label>
                      <select required name="source" value={formData.source} onChange={handleInputChange} className={inputCls + " appearance-none"}>
                        <option value="" disabled>Select an option</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Instagram / Social Media">Instagram / Social Media</option>
                        <option value="Referral from someone">Referral from someone</option>
                        <option value="Direct / I knew about Sevka">Direct / I knew about Sevka</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelCls}>Any reference websites you love? (Optional)</label>
                      <input type="text" name="references" value={formData.references} onChange={handleInputChange}
                        className={inputCls} placeholder="e.g., apple.com, stripe.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelCls}>Anything else we should know? (Optional)</label>
                      <textarea name="extra" value={formData.extra} onChange={handleInputChange} rows={3} className={inputCls + " resize-none"} />
                    </div>
                    <label className="flex items-start gap-4 cursor-pointer group mt-4">
                      <div className="relative flex items-center justify-center mt-1">
                        <input required type="checkbox" name="agree" checked={formData.agree} onChange={handleInputChange}
                          className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-void checked:bg-gold checked:border-gold transition-colors cursor-pointer" />
                        <CheckCircle2 size={14} className="absolute text-void opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-muted-warm group-hover:text-warm-white transition-colors">
                        I agree to be contacted via email/phone regarding my project.
                      </span>
                    </label>
                    {error && (
                      <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3 text-sm text-error">{error}</div>
                    )}
                  </>
                )}

                {/* Nav buttons */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/5">
                  {step > 1 ? (
                    <button type="button" onClick={prevStep} className="text-warm-white/60 hover:text-gold font-semibold transition-colors">← Back</button>
                  ) : <div />}
                  {step < 3 ? (
                    <Button type="submit" variant="primary">Next Step →</Button>
                  ) : (
                    <Button type="submit" variant="primary" className="w-full sm:w-auto px-12">
                      {isLoading ? 'Sending...' : 'Send My Project Brief →'}
                    </Button>
                  )}
                </div>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16">
                <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-8 text-gold">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-4xl font-bold mb-4">Brief Received!</h2>
                <p className="text-lg text-muted-warm max-w-md">
                  Thank you! We'll get back to you at{' '}
                  <span className="text-warm-white font-medium">abhishek.webstudio@gmail.com</span> within 24 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Alternative Contact */}
        <div className="mt-24 text-center flex flex-col items-center">
          <h3 className="font-display text-2xl font-bold mb-6">Prefer a direct conversation?</h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:abhishek.webstudio@gmail.com?subject=Project Inquiry — Sevka&body=Hi Abhishek,%0A%0AI'd like to discuss a web project.%0A%0AName:%0ABusiness:%0AProject idea:%0A%0AThanks"
              className="px-8 py-4 border border-white/10 rounded-xl hover:border-gold text-warm-white hover:text-gold transition-all flex items-center gap-3"
            >
              ✉ Email Us Directly
            </a>
            <button
              onClick={() => setShowDiscovery(true)}
              className="px-8 py-4 border border-white/10 rounded-xl hover:border-gold text-warm-white hover:text-gold transition-all flex items-center gap-3"
            >
              📞 Book Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Discovery Call Modal */}
      <AnimatePresence>
        {showDiscovery && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) setShowDiscovery(false); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-carbon border border-white/10 rounded-3xl p-8 md:p-10 w-full max-w-lg relative shadow-2xl"
            >
              <button
                onClick={() => { setShowDiscovery(false); setDiscoverySubmitted(false); setDiscoveryError(''); }}
                className="absolute top-5 right-5 text-muted-warm hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>

              <AnimatePresence mode="wait">
                {!discoverySubmitted ? (
                  <motion.form key="disc-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={handleDiscoverySubmit} className="flex flex-col gap-6">
                    <div>
                      <SectionLabel>FREE 30-MIN CALL</SectionLabel>
                      <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">Book a Discovery Call</h2>
                      <p className="text-muted-warm text-sm mt-2">No pitch. Just an honest conversation about your project.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Your Name *</label>
                        <input required type="text" name="name" value={discoveryData.name}
                          onChange={handleDiscoveryChange} className={inputCls} placeholder="Your name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelCls}>Phone Number *</label>
                        <input required type="tel" name="phone" value={discoveryData.phone}
                          onChange={handleDiscoveryChange} className={inputCls} placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className={labelCls}>Email Address *</label>
                      <input required type="email" name="email" value={discoveryData.email}
                        onChange={handleDiscoveryChange} className={inputCls} placeholder="you@example.com" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className={labelCls}>What do you want to discuss? *</label>
                      <textarea required name="topic" value={discoveryData.topic}
                        onChange={handleDiscoveryChange} rows={3}
                        className={inputCls + " resize-none"}
                        placeholder="Brief description of your project or questions..." />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className={labelCls}>Preferred Call Time</label>
                      <select name="preferredTime" value={discoveryData.preferredTime}
                        onChange={handleDiscoveryChange} className={inputCls + " appearance-none"}>
                        <option value="">Flexible / anytime</option>
                        <option value="Morning (9AM–12PM)">Morning (9AM–12PM)</option>
                        <option value="Afternoon (12PM–4PM)">Afternoon (12PM–4PM)</option>
                        <option value="Evening (4PM–8PM)">Evening (4PM–8PM)</option>
                        <option value="Weekend only">Weekend only</option>
                      </select>
                    </div>

                    {discoveryError && (
                      <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3 text-sm text-error">{discoveryError}</div>
                    )}

                    <Button type="submit" variant="primary" className="w-full justify-center">
                      {discoveryLoading ? 'Sending...' : 'Request My Call Slot →'}
                    </Button>
                    <p className="text-center text-xs text-muted">We'll reach out within 4 hours to confirm your slot.</p>
                  </motion.form>
                ) : (
                  <motion.div key="disc-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8">
                    <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-6 text-gold">
                      <CheckCircle2 size={40} strokeWidth={1.5} />
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-3">Call Requested! 🎉</h2>
                    <p className="text-muted-warm text-sm max-w-xs">
                      We'll call you within 4 hours to confirm your time slot. Check your email too!
                    </p>
                    <button onClick={() => { setShowDiscovery(false); setDiscoverySubmitted(false); }}
                      className="mt-8 text-gold text-sm font-semibold hover:underline">Close</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
