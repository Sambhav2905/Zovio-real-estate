import React from 'react';
import { Section } from './ui/Section';
import { SpotlightCard } from './ui/SpotlightCard';
import { UserPlus, MessageCircle, Mail, Home } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
    return (
        <Section className="relative" id="system-architecture">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  The Agent Flow
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                  From Zillow Inquiry to Closing Day. A linear, automated pipeline.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                
                {/* COLUMN A: The Acquisition Engine */}
                <SpotlightCard className="h-full" spotlightColor="rgba(16, 185, 129, 0.15)">
                  <div className="p-8 md:p-10 flex flex-col h-full group">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                         <span className="text-slate-600 font-mono text-xs uppercase border border-slate-700 px-2 py-1 rounded">PHASE_01</span>
                    </div>
                    
                    <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 mb-8 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                        <UserPlus size={32} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Acquisition Engine</h3>
                    <p className="text-emerald-500 font-mono text-sm uppercase tracking-wider mb-6">Capture & Engage</p>
                    
                    <div className="space-y-8 flex-grow">
                        <div className="relative pl-6 border-l border-emerald-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-emerald-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><UserPlus size={16} /> Capture</h4>
                            <p className="text-slate-400 text-sm">Zillow/Realtor.com Ingestion. Lead is instantly parsed and entered into the workflow.</p>
                        </div>
                         <div className="relative pl-6 border-l border-emerald-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-emerald-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><MessageCircle size={16} /> Qualify</h4>
                            <p className="text-slate-400 text-sm">Bot asks: Timeline? Pre-Approval? We determine intent before you lift a finger.</p>
                        </div>
                    </div>
                  </div>
                </SpotlightCard>

                {/* COLUMN B: The Transaction Engine */}
                <SpotlightCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.15)">
                  <div className="p-8 md:p-10 flex flex-col h-full group">
                     <div className="absolute top-0 right-0 p-4 opacity-50">
                         <span className="text-slate-600 font-mono text-xs uppercase border border-slate-700 px-2 py-1 rounded">PHASE_02</span>
                    </div>

                    <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-8 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                        <Home size={32} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Transaction Engine</h3>
                    <p className="text-blue-400 font-mono text-sm uppercase tracking-wider mb-6">Nurture & Close</p>
                    
                     <div className="space-y-8 flex-grow">
                        <div className="relative pl-6 border-l border-blue-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><Mail size={16} /> Nurture</h4>
                            <p className="text-slate-400 text-sm">Long-term drip (Market Updates). Revives old leads automatically.</p>
                        </div>
                         <div className="relative pl-6 border-l border-blue-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><Home size={16} /> Sold</h4>
                            <p className="text-slate-400 text-sm">Showing Booked -> Slack Alert -> Closing.</p>
                        </div>
                    </div>

                  </div>
                </SpotlightCard>

            </div>
        </Section>
    );
};