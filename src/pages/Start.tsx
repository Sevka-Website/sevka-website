import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { CheckCircle2, MonitorSmartphone, ShoppingCart, LayoutTemplate, PenTool, Search, MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';

const SERVICE_ID = 'service_k2d48vk';
const TEMPLATE_ID = '2fxwiaq';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ← Replace this

export default function Start() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    country: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: '',
    source: '',
    references: '',
    extra: '',
    agree: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProjectTypeSelect = (type: string) => {
    setFormData(prev => ({ ...prev, projectType: type }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      business_name: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      country: formData.country,
      existing_website: formData.website || 'Not provided',
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      project_details: formData.details,
      how_found: formData.source,
      references: formData.references || 'None',
      additional_notes: formData.extra || 'None',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setIsSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong. Please try again or email us directly at abhishek.webstudio@gmail.com');
    } finally {
      setIsLoading(false);
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

      {/* Form Section */}
      <section className="py-12 px-6 max-w-3xl mx-auto w-full mb-32">
        <div className="bg-carbon border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="absolute top-0 left-0 w-full h-1 bg-void">
              <motion.div
                className="h-full bg-gold"
                initial={{ width: '33%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
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
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Full Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Business / Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Website (if existing)</label>
                        <input type="url" name="website" value={formData.website} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors" placeholder="https://" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Country / Region *</label>
                        <input required type="text" name="country" value={formData.country} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors" />
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
                      <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">What type of project do you need? *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projectTypes.map(pt => (
                          <button
                            key={pt.id}
                            type="button"
                            onClick={() => handleProjectTypeSelect(pt.id)}
                            className={clsx(
                              "flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300",
                              formData.projectType === pt.id
                                ? "bg-gold/10 border-gold text-gold"
                                : "bg-void border-white/10 text-warm-white/80 hover:border-white/30"
                            )}
                          >
                            <div className={clsx("p-2 rounded-lg", formData.projectType === pt.id ? "bg-gold text-void" : "bg-carbon")}>
                              {pt.icon}
                            </div>
                            <span className="font-medium">{pt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Estimated Budget *</label>
                        <select required name="budget" value={formData.budget} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors appearance-none">
                          <option value="" disabled>Select a range</option>
                          <option value="Under ₹25,000 / $300">Under ₹25,000 / $300</option>
                          <option value="₹25,000–₹75,000 / $300–$900">₹25,000–₹75,000 / $300–$900</option>
                          <option value="₹75,000–₹2,00,000 / $900–$2,500">₹75,000–₹2,00,000 / $900–$2,500</option>
                          <option value="₹2,00,000+ / $2,500+">₹2,00,000+ / $2,500+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Timeline *</label>
                        <select required name="timeline" value={formData.timeline} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors appearance-none">
                          <option value="" disabled>Select timeline</option>
                          <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                          <option value="1–2 months">1–2 months</option>
                          <option value="2–4 months">2–4 months</option>
                          <option value="Flexible / no rush">Flexible / no rush</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Tell us about your project *</label>
                      <textarea required name="details" value={formData.details} onChange={handleInputChange} rows={4} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us what your business does, what you need, and what success looks like for you..." />
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
                      <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">How did you find us? *</label>
                      <select required name="source" value={formData.source} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors appearance-none">
                        <option value="" disabled>Select an option</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Instagram / Social Media">Instagram / Social Media</option>
                        <option value="Referral from someone">Referral from someone</option>
                        <option value="Direct / I knew about Sevka">Direct / I knew about Sevka</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Any reference websites you love? (Optional)</label>
                      <input type="text" name="references" value={formData.references} onChange={handleInputChange} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors" placeholder="e.g., apple.com, stripe.com" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-warm-white/60 uppercase tracking-wider">Anything else we should know? (Optional)</label>
                      <textarea name="extra" value={formData.extra} onChange={handleInputChange} rows={3} className="bg-void border border-white/10 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors resize-none" />
                    </div>

                    <label className="flex items-start gap-4 cursor-pointer group mt-4">
                      <div className="relative flex items-center justify-center mt-1">
                        <input required type="checkbox" name="agree" checked={formData.agree} onChange={handleInputChange} className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-void checked:bg-gold checked:border-gold transition-colors cursor-pointer" />
                        <CheckCircle2 size={14} className="absolute text-void opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-muted-warm group-hover:text-warm-white transition-colors">
                        I agree to be contacted via email/phone regarding my project.
                      </span>
                    </label>

                    {/* Error Message */}
                    {error && (
                      <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3 text-sm text-error">
                        {error}
                      </div>
                    )}
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/5">
                  {step > 1 ? (
                    <button type="button" onClick={prevStep} className="text-warm-white/60 hover:text-gold font-semibold transition-colors">
                      &larr; Back
                    </button>
                  ) : <div />}

                  {step < 3 ? (
                    <Button type="submit" variant="primary">Next Step &rarr;</Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full sm:w-auto px-12"
                    >
                      {isLoading ? 'Sending...' : 'Send My Project Brief →'}
                    </Button>
                  )}
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16"
              >
                <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-8 text-gold">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-4xl font-bold mb-4">Brief Received!</h2>
                <p className="text-lg text-muted-warm max-w-md">
                  Thank you for reaching out. We've received your project details and will get back to you at{' '}
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
            <a href="mailto:abhishek.webstudio@gmail.com" className="px-8 py-4 border border-white/10 rounded-xl hover:border-gold text-warm-white hover:text-gold transition-all flex items-center gap-3">
              Email Us Directly
            </a>
            <a href="#" className="px-8 py-4 border border-white/10 rounded-xl hover:border-gold text-warm-white hover:text-gold transition-all flex items-center gap-3">
              Book Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
