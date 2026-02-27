import React, { useState, useEffect } from 'react';
import { Menu, X, Key } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-4xl`}>
      <div className={`
        flex justify-between items-center px-6 py-3 rounded-2xl
        ${scrolled 
            ? 'bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl' 
            : 'bg-transparent border border-transparent'}
        transition-all duration-500
      `}>
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer interactive">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Key className="text-slate-950 w-5 h-5" fill="currentColor" />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-white">
                Zovio <span className="text-emerald-500">AI</span>
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest border-l border-slate-700 pl-2">
                Real Estate
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
            <button 
                onClick={onOpenContact}
                className="interactive bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
                <Key size={14} className="text-emerald-500" />
                SECURE MY PIPELINE
            </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white interactive"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
    
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenContact();
            }}
            className="bg-emerald-500 text-slate-950 font-bold py-4 px-12 rounded-xl text-xl"
          >
            Secure My Pipeline
          </button>
        </div>
      )}
    </>
  );
};