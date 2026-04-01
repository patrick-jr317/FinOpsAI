import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertCircle, TrendingUp, ShieldCheck, PieChart, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-brand-blue uppercase bg-brand-blue/5 rounded-full">
                AI-Powered Financial Operations
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                Financial Clarity <br />
                <span className="text-brand-blue">Without the Chaos</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                AI-powered bookkeeping and financial operations for growing businesses. We handle the numbers so you can focus on scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-brand-blue-light transition-all hover:shadow-xl hover:-translate-y-1 group"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold text-lg hover:border-brand-blue hover:text-brand-blue transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50/50 rounded-l-[100px] hidden lg:block" />
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Feeling Overwhelmed by Your Finances?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Running a business is hard enough without the constant stress of messy books and unclear cash flow.
              </p>
              <ul className="space-y-4">
                {[
                  "Books are always behind",
                  "No clear view of cash flow",
                  "Stress during tax season",
                  "Making decisions without real numbers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Clean, accurate books</p>
                    <p className="text-sm text-slate-500">Always up-to-date and tax-ready.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Real-time financial insights</p>
                    <p className="text-sm text-slate-500">Know exactly where your money goes.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Confidence in decisions</p>
                    <p className="text-sm text-slate-500">Scale with data-backed certainty.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue-light transition-all"
                >
                  Book Your Call
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 {...fadeIn} className="text-3xl lg:text-4xl font-bold mb-6">Our Services</motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg text-slate-600">
              Comprehensive financial operations tailored for modern businesses.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Monthly Bookkeeping",
                desc: "Stay organized with automated, accurate monthly records and reconciliations.",
                icon: <Calendar className="w-8 h-8" />
              },
              {
                title: "Catch-Up & Clean-Up",
                desc: "Behind on your books? We'll get you caught up and organized in no time.",
                icon: <CheckCircle2 className="w-8 h-8" />
              },
              {
                title: "Financial Reporting",
                desc: "Custom dashboards and reports that give you a clear view of your business health.",
                icon: <PieChart className="w-8 h-8" />
              },
              {
                title: "CFO Advisory",
                desc: "Strategic financial guidance to help you plan for growth and maximize profit.",
                icon: <Users className="w-8 h-8" />
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-blue hover:shadow-xl transition-all group"
              >
                <div className="text-brand-blue mb-6 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="text-brand-blue font-semibold text-sm inline-flex items-center group/link">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-slate-600">A simple, 4-step process to financial clarity.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            {[
              { step: "01", title: "Discovery Call", desc: "We discuss your current challenges and goals." },
              { step: "02", title: "Financial Audit", desc: "We review your existing books and processes." },
              { step: "03", title: "Setup / Cleanup", desc: "We organize your data and implement AI tools." },
              { step: "04", title: "Ongoing Support", desc: "Monthly management and strategic advisory." }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 bg-white p-6 text-center"
              >
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 shadow-lg shadow-brand-blue/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                quote: "FinOpsAI completely changed how I look at my business. I finally have clarity on my cash flow.",
                author: "Sarah J.",
                role: "E-commerce Founder"
              },
              {
                quote: "Tax season used to be a nightmare. Now, everything is ready months in advance. Stress-free!",
                author: "Michael R.",
                role: "Agency Owner"
              },
              {
                quote: "The AI insights helped us identify $20k in unnecessary monthly spend. Incredible ROI.",
                author: "David L.",
                role: "SaaS CEO"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <p className="text-lg italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">Meet the Founder</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sandhya Nagesh</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With years of experience in financial operations, Sandhya founded FinOpsAI to bridge the gap between traditional bookkeeping and modern technology.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Her mission is simple: help business owners gain absolute clarity over their numbers so they can make confident, data-driven decisions.
              </p>
              <Link to="/about" className="text-brand-blue font-bold inline-flex items-center hover:gap-2 transition-all">
                Read our story <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/sandhya/800/800" 
                    alt="Sandhya Nagesh" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-8 rounded-2xl hidden md:block">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm opacity-80">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn} className="bg-white p-12 lg:p-20 rounded-[40px] border border-slate-200 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Stop guessing. Start knowing.</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Ready to transform your financial operations? Book your free strategy call today and see the FinOpsAI difference.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-xl hover:bg-brand-blue-light transition-all hover:shadow-2xl hover:-translate-y-1 group"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
