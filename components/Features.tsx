import React from 'react';
import { Section } from './ui/Section';
import { TiltCard } from './ui/TiltCard';
import { MessageSquare, Database, Bell, TrendingUp } from 'lucide-react';

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description,
  className = ""
}: { 
  icon: React.ElementType, 
  title: string, 
  subtitle: string, 
  description: string,
  className?: string
}) => (
  <TiltCard className={`h-full ${className}`}>
    <div className="p-8 h-full flex flex-col bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/30 transition-all relative overflow-hidden group">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/10 transition-colors"></div>

      <div className="w-12 h-12 bg-slate-800/80 rounded-lg flex items-center justify-center mb-6 text-emerald-400 border border-slate-700 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} strokeWidth={2.5} />
      </div>
      
      <div className="relative z-10">
        <p className="text-emerald-500 font-mono text-xs uppercase tracking-wider mb-2">{subtitle}</p>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">
            {description}
        </p>
      </div>
    </div>
  </TiltCard>
);

export const Features: React.FC = () => {
  return (
    <Section id="features">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Real Estate <span className="text-emerald-500">Ops Infrastructure</span>
            </h2>
            <p className="text-slate-400 text-lg">
            We replace manual follow-up with deterministic code. Four pillars to ensure your pipeline is always moving, even when you're at the closing table.
            </p>
        </div>
        <div className="hidden md:block">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs border border-emerald-500/30 px-3 py-1 rounded bg-emerald-500/10">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                SYSTEM ACTIVE
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {/* Large Item 1 */}
        <div className="md:col-span-2">
            <FeatureItem 
            icon={MessageSquare}
            title="The Virtual ISA"
            subtitle="Auto-Qualification"
            description="While you drive, our system texts the lead: 'Are you pre-approved?' and 'When do you want to see the home?' We hand you a qualified showing, not just a name."
            />
        </div>

        {/* Tall Item */}
        <div className="md:row-span-2">
            <FeatureItem 
            icon={Database}
            title="Database Reactivation"
            subtitle="Wake Up The Dead"
            description="We wake up the dead. Our system sends hyper-personalized texts to leads from 6 months ago. Watch dead leads turn into active buyers."
            />
        </div>

        {/* Small Item */}
        <FeatureItem 
            icon={Bell}
            title="Slack Showing Alerts"
            subtitle="Never Miss A Beat"
            description="Get an instant Slack notification: '🔔 New Showing Request - 123 Main St.' Respond instantly without opening your CRM."
            />

        {/* Small Item */}
        <FeatureItem 
            icon={TrendingUp}
            title="Pipeline Visibility"
            subtitle="Deal Tracking"
            description="Automatic status updates from 'New Lead' to 'Showing' to 'Contract'. Keep your finger on the pulse of your GCI."
        />

      </div>
    </Section>
  );
};