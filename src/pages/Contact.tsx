import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 {...fadeIn} className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready for financial clarity? Book a call or send us a message.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-slate-600">hello@finopsai.com</p>
                    <p className="text-slate-400 text-sm">We'll respond within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <p className="text-slate-400 text-sm">Mon-Fri, 9am-5pm EST.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office</h3>
                    <p className="text-slate-600">123 Financial District</p>
                    <p className="text-slate-600">New York, NY 10004</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-brand-blue text-white rounded-3xl">
                <Calendar className="w-10 h-10 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Book a Strategy Call</h3>
                <p className="mb-8 opacity-80">
                  Select a time that works for you and let's discuss how we can streamline your financial operations.
                </p>
                <button className="w-full py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-slate-100 transition-all">
                  Open Booking Calendar
                </button>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-xl">
                <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
                {formState === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. We'll be in touch soon.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-8 text-brand-blue font-bold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">First Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Last Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue-light transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
