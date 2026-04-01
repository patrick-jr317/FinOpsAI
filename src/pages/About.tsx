import { motion } from 'motion/react';
import { Target, Heart, ShieldCheck, Award } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 {...fadeIn} className="text-4xl lg:text-6xl font-bold mb-6">About FinOpsAI</motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-xl text-slate-600 max-w-2xl mx-auto">
            Empowering business owners with financial clarity and AI-driven insights.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At FinOpsAI, we believe that financial data shouldn't be a source of stress—it should be a source of power. Our mission is to help business owners gain absolute clarity over their numbers so they can make confident, data-driven decisions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By combining expert human oversight with cutting-edge AI technology, we provide a level of accuracy and insight that traditional bookkeeping simply can't match.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <Target className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold mb-2">Clarity</h3>
                <p className="text-sm text-slate-500">No more guessing. Know your numbers.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <Heart className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold mb-2">Support</h3>
                <p className="text-sm text-slate-500">We're your partners in growth.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <ShieldCheck className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold mb-2">Accuracy</h3>
                <p className="text-sm text-slate-500">AI-verified data you can trust.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <Award className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold mb-2">Expertise</h3>
                <p className="text-sm text-slate-500">Years of financial leadership.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">The FinOpsAI Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                FinOpsAI was born out of a simple observation: most small business owners are flying blind. They have data, but they don't have information.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Sandhya Nagesh founded the company after seeing countless entrepreneurs struggle with cash flow crises that could have been avoided with better visibility. She realized that by leveraging AI, she could provide enterprise-level financial operations to small and mid-size businesses at a fraction of the cost.
              </p>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="font-bold text-brand-blue">Tools we use:</div>
                <div className="flex gap-4 text-slate-400 font-semibold text-sm">
                  <span>QuickBooks</span>
                  <span>Xero</span>
                  <span>Gusto</span>
                  <span>Bill.com</span>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-1 lg:order-2">
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://picsum.photos/seed/office/1200/800" 
                  alt="FinOpsAI Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
