import { Link } from 'react-router-dom';
import { BarChart3, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-brand-blue" />
              <span className="text-xl font-bold text-brand-blue tracking-tighter">FinOpsAI</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              AI-powered bookkeeping and financial operations for growing businesses. Clarity, accuracy, and confidence in every number.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Monthly Bookkeeping</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Catch-Up & Clean-Up</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Financial Reporting</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">CFO Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>hello@finopsai.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} FinOpsAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
