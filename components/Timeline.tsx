import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, ArrowDown } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

const Step = ({ number, title, date, description, isLast }: { number: string, title: string, date: string, description: string, isLast?: boolean }) => (
  <div className="relative pl-12 md:pl-0">
    
    {/* Mobile connector */}
    {!isLast && <div className="absolute left-[27px] top-10 bottom-[-20px] w-0.5 bg-slate-800 md:hidden"></div>}

    <div className="md:flex gap-10 items-center group">
        
        {/* Number Circle */}
        <div className="hidden md:flex flex-col items-center flex-shrink-0">
             <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold font-mono text-xl z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-300">
                {number}
            </div>
            {!isLast && <div className="h-24 w-0.5 bg-gradient-to-b from-emerald-500/50 to-slate-800 my-4"></div>}
        </div>

        {/* Content */}
        <div className="flex-1">
            <TiltCard>
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
                     <div className="absolute top-0 right-0 p-4 opacity-50">
                         <span className="text-emerald-500 font-mono text-xs border border-emerald-900 bg-emerald-900/20 px-2 py-1 rounded">{date}</span>
                    </div>
                    
                    <div className="md:hidden w-12 h-12 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 font-bold absolute -left-14 top-0">
                        {number}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-slate-400 leading-relaxed">{description}</p>
                </div>
            </TiltCard>
        </div>
    </div>
  </div>
);

export const Timeline: React.FC = () => {
  return (
    <Section id="how-it-works">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Deployment Sequence</h2>
          <p className="text-slate-400">Deterministic implementation. No guessing.</p>
        </div>

        <div className="space-y-4">
          <Step 
            number="01"
            title="The Audit"
            date="T-MINUS 0"
            description="We map your current leakage points. We analyze your Zillow response times and CRM follow-up protocols to identify exactly where GCI is falling out."
          />
          <Step 
            number="02"
            title="Installation"
            date="T+48 HOURS"
            description="We build the workflows, connect to your CRM (FUB, KVCore, etc.), and configure the 'Speed-to-Lead' triggers. No disruption to your current showings."
          />
          <Step 
            number="03"
            title="Launch & Handoff"
            date="T+14 DAYS"
            description="We flip the switch. Your team gets a training session on how to handle the influx of appointments. We monitor the system for 7 days to ensure stability."
            isLast={true}
          />
        </div>
        
        <div className="mt-12 flex justify-center">
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl flex items-center gap-4 max-w-lg backdrop-blur-sm">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                    <CheckCircle2 className="text-emerald-500" />
                </div>
                <div>
                    <h4 className="text-white font-bold mb-1">Guaranteed Performance</h4>
                    <p className="text-slate-400 text-sm">Response time under 2 minutes or implementation fee refunded.</p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};