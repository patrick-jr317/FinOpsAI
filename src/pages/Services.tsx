import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const services = [
  {
    title: "Monthly Bookkeeping",
    who: "Growing businesses that need consistent, accurate financial records.",
    included: [
      "Transaction categorization",
      "Bank & credit card reconciliations",
      "Monthly P&L and Balance Sheet",
      "Accounts Payable/Receivable tracking",
      "AI-powered expense auditing"
    ],
    outcome: "Tax-ready books every month and a clear view of your profitability."
  },
  {
    title: "Catch-Up & Clean-Up",
    who: "Businesses that have fallen behind or have messy financial data.",
    included: [
      "Historical data entry",
      "Account reconciliation for past periods",
      "Correction of categorization errors",
      "Financial statement reconstruction",
      "Audit preparation"
    ],
    outcome: "A clean slate and a solid foundation for future financial management."
  },
  {
    title: "Financial Reporting",
    who: "Owners who want to understand the 'why' behind their numbers.",
    included: [
      "Custom KPI dashboards",
      "Cash flow forecasting",
      "Budget vs. Actual analysis",
      "Departmental profitability reports",
      "Monthly strategy review"
    ],
    outcome: "Deep insights that drive better business decisions and growth."
  },
  {
    title: "CFO Advisory",
    who: "Scaling companies needing high-level strategic financial leadership.",
    included: [
      "Strategic financial planning",
      "Capital allocation strategy",
      "Fundraising support",
      "Profit margin optimization",
      "Exit planning & preparation"
    ],
    outcome: "A strategic partner focused on maximizing your company's value."
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 {...fadeIn} className="text-4xl lg:text-6xl font-bold mb-6">Our Services</motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bookkeeping services designed for clarity, accuracy, and scale.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-brand-blue">{service.title}</h2>
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Who it's for</h3>
                    <p className="text-lg text-slate-700">{service.who}</p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">What's included</h3>
                    <ul className="grid sm:grid-cols-1 gap-3">
                      {service.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Outcome</h3>
                  <p className="text-xl font-medium text-slate-900 mb-8 leading-relaxed">
                    {service.outcome}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue-light transition-all"
                  >
                    Get Started with {service.title}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Not sure which service you need?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Book a free strategy call and we'll help you identify the best path forward for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-brand-blue-light transition-all"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
