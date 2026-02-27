import React, { useRef, useEffect, useState } from 'react';
import { Section } from './ui/Section';
import { TiltCard } from './ui/TiltCard';

export const PainSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  
  // Refs for tracking specific text blocks
  const text0Ref = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        const center = window.innerHeight / 2;
        
        // Helper to check distance from center
        const getDistanceFromCenter = (ref: React.RefObject<HTMLDivElement | null>) => {
            if (!ref.current) return Infinity;
            const rect = ref.current.getBoundingClientRect();
            // Calculate middle of the element
            const elementMiddle = rect.top + (rect.height / 2);
            return Math.abs(center - elementMiddle);
        };

        const dist0 = getDistanceFromCenter(text0Ref);
        const dist1 = getDistanceFromCenter(text1Ref);
        const dist2 = getDistanceFromCenter(text2Ref);

        // Find which one is closest to center
        const min = Math.min(dist0, dist1, dist2);

        if (min === dist0) setActiveStage(0);
        else if (min === dist1) setActiveStage(1);
        else if (min === dist2) setActiveStage(2);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 border-y border-slate-900 relative z-10">
      <Section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Sticky Left Visual */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-32 h-[450px]">
             <TiltCard className="h-full">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between transition-all duration-500">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    
                    {/* Visualizer */}
                    <div className="relative h-full flex items-center justify-center">
                        <div className="relative w-full max-w-md flex flex-col items-center">
                            
                            {/* Top Funnel */}
                            <div className="w-full relative mb-8">
                                <div className="text-center mb-2 font-mono text-xs text-slate-500">INBOUND LEAD (ZILLOW/FB)</div>
                                <div className="w-full h-2 bg-emerald-500/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 animate-[marquee_1.5s_linear_infinite] w-[200%]"></div>
                                </div>
                            </div>

                            {/* Main Piping System */}
                            <div className="relative w-32 h-48 border-2 border-slate-700 rounded-xl p-2 flex justify-between">
                                {/* Pipe Left */}
                                <div className="w-4 h-full bg-slate-800 rounded relative overflow-hidden">
                                     <div className={`absolute inset-0 bg-red-500 transition-all duration-500 ${activeStage === 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-30'}`}></div>
                                     <div className={`absolute inset-0 bg-emerald-500 transition-all duration-500 ${activeStage === 2 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}></div>
                                </div>

                                {/* Pipe Right */}
                                <div className="w-4 h-full bg-slate-800 rounded relative overflow-hidden">
                                     <div className={`absolute inset-0 bg-red-500 transition-all duration-500 ${activeStage === 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-30'}`}></div>
                                     <div className={`absolute inset-0 bg-emerald-500 transition-all duration-500 ${activeStage === 2 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}></div>
                                </div>

                                {/* Labels / Errors */}
                                <div className={`absolute top-1/4 right-[calc(100%+0.5rem)] transition-all duration-500 z-10 ${activeStage === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                                    <span className="text-red-400 font-bold font-mono text-[10px] bg-red-400/10 px-2 py-1 rounded border border-red-400/20 whitespace-nowrap shadow-lg backdrop-blur-md">DELAY: 2 HR</span>
                                </div>

                                <div className={`absolute top-2/4 left-[calc(100%+0.5rem)] transition-all duration-500 z-10 ${activeStage === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                                    <span className="text-red-400 font-bold font-mono text-[10px] bg-red-400/10 px-2 py-1 rounded border border-red-400/20 whitespace-nowrap shadow-lg backdrop-blur-md">AGENT BUSY</span>
                                </div>
                                
                                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeStage === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                    <div className="bg-emerald-500 text-slate-900 font-bold px-3 py-2 rounded shadow-[0_0_20px_rgba(16,185,129,0.4)] whitespace-nowrap text-xs">
                                        APPOINTMENT BOOKED
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Collection */}
                            <div className="w-full mt-8">
                                <div className={`text-center font-mono text-sm font-bold transition-colors duration-500 border-t pt-4 ${activeStage === 2 ? 'text-emerald-400 border-emerald-500/30' : 'text-slate-600 border-slate-800'}`}>
                                    {activeStage === 2 ? "GCI SECURED: MAXIMUM" : "COMMISSION LEAKING..."}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </TiltCard>
          </div>

          {/* Right Side: Copy Scroller */}
          <div className="order-1 lg:order-2 py-12 flex flex-col gap-48">
            
            <div ref={text0Ref} className={`transition-all duration-500 ${activeStage === 0 ? 'opacity-100 blur-0 scale-100' : 'opacity-30 blur-sm scale-95'}`}>
              <span className="text-red-500 font-mono text-sm font-bold tracking-widest mb-2 block">THE_DELAY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The "Speed-to-Lead" Crisis
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                You pay $50+ per lead on Zillow. If you don't answer in 5 minutes, they call the next agent. But you're busy at a closing.
              </p>
              <div className="inline-block p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400 font-mono text-xs">
                ⚠️ FACT: 5-minute delay = 400% decrease in conversion.
              </div>
            </div>

            <div ref={text1Ref} className={`transition-all duration-500 ${activeStage === 1 ? 'opacity-100 blur-0 scale-100' : 'opacity-30 blur-sm scale-95'}`}>
              <span className="text-red-500 font-mono text-sm font-bold tracking-widest mb-2 block">THE_COST</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bleeding Commission
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                 Manual follow-up is costing you $100k in GCI every year. Your database is full of "dead leads" that are actually just ignored opportunities waiting for a text.
              </p>
              <div className="inline-block p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400 font-mono text-xs">
                ⚠️ ALERT: "I'll call them later" is a business killer.
              </div>
            </div>

             <div ref={text2Ref} className={`transition-all duration-500 ${activeStage === 2 ? 'opacity-100 blur-0 scale-100' : 'opacity-30 blur-sm scale-95'}`}>
              <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest mb-2 block">THE_PROTOCOL</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The <span className="text-emerald-500">Zovio</span> ISA
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                While you are driving, our system instantly texts and emails the new lead: 'Hey, saw you looked at 123 Main St. When do you want to see it?' We book the showing; you just show up.
              </p>
              <div className="inline-block p-4 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400 font-mono text-xs">
                 ✓ STATUS: Pipeline Secured.
              </div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};