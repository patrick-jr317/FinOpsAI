import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <BarChart3 className="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold text-brand-blue tracking-tighter">FinOpsAI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-blue",
                  location.pathname === link.href ? "text-brand-blue" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue-light transition-all hover:shadow-lg active:scale-95"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === link.href ? "text-brand-blue bg-slate-50" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-blue text-white px-6 py-3 rounded-full text-base font-semibold"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
