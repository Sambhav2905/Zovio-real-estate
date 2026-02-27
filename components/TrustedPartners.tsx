import React from 'react';
import { Section } from './ui/Section';
import { Sun, Building2, CircuitBoard, TrendingUp, Hexagon, Triangle } from 'lucide-react';

const PartnerLogo = ({ icon: Icon, name, color }: { icon: React.ElementType, name: string, color: string }) => (
  <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 cursor-default select-none">
    <Icon className={`w-6 h-6 md:w-8 md:h-8 ${color}`} strokeWidth={2.5} />
    <span className="text-lg md:text-xl font-bold text-slate-300 group-hover:text-white transition-colors tracking-tight">{name}</span>
  </div>
);

export const TrustedPartners: React.FC = () => {
  return (
    <div className="border-b border-slate-900 bg-slate-950/30">
        <Section className="py-12 md:py-20">
            <div className="text-center mb-10">
                <h3 className="text-slate-500 text-xs md:text-sm font-mono uppercase tracking-[0.2em]">
                    Trusted By High-Velocity Sales Teams
                </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-20 items-center">
                 <PartnerLogo icon={Sun} name="SolarScale" color="text-orange-500" />
                 <PartnerLogo icon={Building2} name="EstateFlow" color="text-blue-500" />
                 <PartnerLogo icon={CircuitBoard} name="Nexus" color="text-purple-500" />
                 <PartnerLogo icon={TrendingUp} name="GrowthLabs" color="text-emerald-500" />
                 <PartnerLogo icon={Triangle} name="Vantage" color="text-cyan-500" />
                 <PartnerLogo icon={Hexagon} name="ConstructOS" color="text-red-500" />
            </div>
        </Section>
    </div>
  );
};