import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (footerRef.current) {
            observer.unobserve(footerRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`bg-slate-950 border-t border-slate-900 py-12 px-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-slate-800 rounded-sm flex items-center justify-center">
            <span className="font-bold text-slate-500 font-mono text-xs">Z</span>
          </div>
          <span className="text-slate-500 font-medium">Zovio AI &copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors">
                <Mail size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors">
                <Linkedin size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
};