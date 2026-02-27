import React, { useState, useMemo } from 'react';
import { Section } from './ui/Section';
import { CalculatorState } from '../types';
import { Activity, AlertTriangle, DollarSign } from 'lucide-react';
import { CountUp } from './ui/CountUp';
import { TiltCard } from './ui/TiltCard';

interface RevenueCalculatorProps {
  onOpenContact: () => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onOpenContact }) => {
  
  const [state, setState] = useState<CalculatorState>({
    monthlyLeads: 50,
    avgHomePrice: 600000,
    commissionRate: 2.5,
  });

  const calculationResult = useMemo(() => {
    // Assumptions for Real Estate
    // "Lost Conversion Rate" due to poor speed-to-lead.
    // Industry avg conversion is ~1-2%. Top teams are 4-5%.
    // Delta lost is approx 2-3% of leads.
    const LOST_CONVERSION_DELTA = 0.03; 

    // Formula:
    // 1. Calculate how many deals are lost per month
    const lostDealsPerMonth = state.monthlyLeads * LOST_CONVERSION_DELTA;
    
    // 2. Calculate GCI per deal
    const gciPerDeal = state.avgHomePrice * (state.commissionRate / 100);

    // 3. Calculate Monthly Lost GCI
    const monthlyLostGCI = lostDealsPerMonth * gciPerDeal;

    // 4. Calculate Annual
    const annualLostGCI = monthlyLostGCI * 12;

    return {
      val: Math.floor(annualLostGCI),
      label: "ANNUAL GCI LEFT ON THE TABLE"
    };
  }, [state]);

  const handleSliderChange = (key: keyof CalculatorState, value: string) => {
    setState(prev => ({ ...prev, [key]: Number(value) }));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="bg-slate-950 py-24 relative overflow-hidden">
        {/* Animated Background Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <Activity className="text-emerald-500 animate-pulse" />
                 <span className="text-emerald-500 font-mono text-sm tracking-widest">GCI_CALCULATOR</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Calculate Lost Commission
              </h2>
              
              <p className="text-slate-400 border-l-2 border-slate-700 pl-4 py-2">
                See exactly how much GCI you are losing annually by failing to convert internet leads instantly.
              </p>
            </div>

            <div className="space-y-10">
              
                  {/* Slider 1: Monthly Leads */}
                  <div className="space-y-4 group">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-200 font-mono">MONTHLY_LEADS</span>
                      <span className="text-emerald-400 font-mono text-xl">{state.monthlyLeads}</span>
                    </div>
                    <div className="relative h-2 bg-slate-800 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full" style={{width: `${(state.monthlyLeads/200)*100}%`}}></div>
                        <input 
                        type="range" 
                        min="10" 
                        max="200" 
                        step="5"
                        value={state.monthlyLeads} 
                        onChange={(e) => handleSliderChange('monthlyLeads', e.target.value)}
                        className="interactive absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                         <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all group-hover:scale-125" style={{left: `calc(${(state.monthlyLeads/200)*100}% - 8px)`, top: '-4px'}}></div>
                    </div>
                  </div>

                  {/* Slider 2: Avg Home Price */}
                  <div className="space-y-4 group">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-200 font-mono">AVG_HOME_PRICE</span>
                      <span className="text-emerald-400 font-mono text-xl">{formatCurrency(state.avgHomePrice)}</span>
                    </div>
                     <div className="relative h-2 bg-slate-800 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full" style={{width: `${(state.avgHomePrice/2000000)*100}%`}}></div>
                        <input 
                        type="range" 
                        min="300000" 
                        max="2000000" 
                        step="50000"
                        value={state.avgHomePrice} 
                        onChange={(e) => handleSliderChange('avgHomePrice', e.target.value)}
                        className="interactive absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                         <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all group-hover:scale-125" style={{left: `calc(${(state.avgHomePrice/2000000)*100}% - 8px)`, top: '-4px'}}></div>
                    </div>
                  </div>

                  {/* Slider 3: Commission Rate */}
                  <div className="space-y-4 group">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-200 font-mono">AVG_COMMISSION_RATE</span>
                      <span className="text-emerald-400 font-mono text-xl">{state.commissionRate}%</span>
                    </div>
                    <div className="relative h-2 bg-slate-800 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full" style={{width: `${((state.commissionRate - 1.5) / 2.5)*100}%`}}></div>
                        <input 
                        type="range" 
                        min="1.5" 
                        max="4.0" 
                        step="0.1"
                        value={state.commissionRate} 
                        onChange={(e) => handleSliderChange('commissionRate', e.target.value)}
                        className="interactive absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                         <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all group-hover:scale-125" style={{left: `calc(${((state.commissionRate - 1.5) / 2.5)*100}% - 8px)`, top: '-4px'}}></div>
                    </div>
                  </div>
              
            </div>
          </div>

          {/* Results Display - HUD Style */}
          <div className="lg:col-span-5 h-full">
            <TiltCard className="h-full">
                <div className={`h-full bg-slate-900/80 rounded-2xl border-2 border-red-500/30 p-8 lg:p-12 text-center flex flex-col justify-center relative backdrop-blur-xl`}>
                    
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-500 rounded-tl-lg m-2"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-500 rounded-tr-lg m-2"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-500 rounded-bl-lg m-2"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-500 rounded-br-lg m-2"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-red-400 font-mono text-xs tracking-[0.2em] mb-8">
                        {calculationResult.label}
                        </h3>
                        
                        <div className={`text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-red-400 mb-6 font-mono break-words drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]`}>
                        <CountUp end={calculationResult.val} />
                        </div>
                        
                        <button 
                        onClick={onOpenContact}
                        className={`interactive mt-8 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded font-mono uppercase tracking-wider transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]`}
                        >
                        Secure My Pipeline
                        </button>
                    </div>
                </div>
            </TiltCard>
          </div>

        </div>
      </Section>
    </div>
  );
};