import React, { useState } from 'react';
import { X, CheckCircle, Key } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [isCustomCountryCode, setIsCustomCountryCode] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "custom") {
      setIsCustomCountryCode(true);
      setCountryCode("");
    } else {
      setCountryCode(val);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                 <Key className="text-emerald-500" size={24} />
                 <h2 className="text-2xl font-bold text-white">Secure My Pipeline</h2>
              </div>
              <p className="text-slate-400 mb-6 text-sm">
                Fill out the details below. We'll analyze your current lead flow and show you how much GCI you are leaving on the table.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Brokerage */}
                <div>
                  <label htmlFor="company" className="block text-xs font-mono text-slate-400 uppercase mb-1">Brokerage / Team Name *</label>
                  <input 
                    type="text" 
                    id="company"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                    placeholder="Keller Williams Elite"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase mb-1">Work Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                    placeholder="jane@kw.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono text-slate-400 uppercase mb-1">Phone Number *</label>
                  <div className="flex">
                    {isCustomCountryCode ? (
                      <input
                        type="text"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-slate-800 border border-slate-700 border-r-0 rounded-l-lg px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm w-24 placeholder:text-slate-500"
                        placeholder="+Code"
                        required
                        autoFocus
                      />
                    ) : (
                      <select 
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                        className="bg-slate-800 border border-slate-700 border-r-0 rounded-l-lg px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm w-24 appearance-none cursor-pointer"
                      >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="custom">Other</option>
                      </select>
                    )}
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-r-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
                      placeholder="555-0123"
                    />
                  </div>
                </div>

                {/* Monthly Volume */}
                <div>
                  <label htmlFor="volume" className="block text-xs font-mono text-slate-400 uppercase mb-1">Monthly Lead Volume</label>
                   <select 
                      id="volume"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
                    >
                      <option value="10-50">10 - 50 Leads / mo</option>
                      <option value="50-100">50 - 100 Leads / mo</option>
                      <option value="100-200">100 - 200 Leads / mo</option>
                      <option value="200+">200+ Leads / mo</option>
                    </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-lg transition-all mt-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  Request Audit
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Request Received</h3>
              <p className="text-slate-400 max-w-xs">
                Our team will review your lead flow and contact you shortly to schedule the pipeline audit.
              </p>
              <button 
                onClick={onClose}
                className="mt-6 text-sm text-slate-500 hover:text-white transition-colors underline decoration-slate-700 hover:decoration-white"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};