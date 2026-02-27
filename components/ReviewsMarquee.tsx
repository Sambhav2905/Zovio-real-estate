import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { text: "I woke up to 3 showing requests from leads I hadn't spoken to in a year.", name: "Jessica M. (Realtor)" },
  { text: "The speed is insane. I secured a buyer while I was literally at a closing table.", name: "David R. (Team Lead)" },
  { text: "My Zillow conversion rate went from 2% to 8%. This system pays for itself in one deal.", name: "Sarah K." },
  { text: "Finally, a tool that actually updates my CRM so I don't have to.", name: "Michael B." },
  { text: "We revived a dead database of 500 leads and got 12 listings in month one.", name: "James L. (Broker)" },
  { text: "No more spending Sundays texting leads manually. Zovio does it for me.", name: "Emily C." },
  { text: "The open house follow-up is brilliant. Visitors are impressed by the speed.", name: "Daniel K." },
  { text: "Seamless integration with Follow Up Boss. Best investment for my team.", name: "Thomas G." },
];

interface ReviewCardProps {
  text: string;
  name: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ text, name }) => (
  <div className="flex-shrink-0 w-80 md:w-96 bg-[#1e293b] border border-slate-700 p-6 rounded-xl hover:border-emerald-500/50 transition-colors">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />
      ))}
    </div>
    <p className="text-slate-300 italic mb-4 text-sm leading-relaxed">"{text}"</p>
    <p className="text-white font-bold text-sm">{name}</p>
  </div>
);

export const ReviewsMarquee: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 border-b border-slate-900 bg-slate-950/50 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Work Speaks For Itself</h2>
        <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Verified Real Estate Partners</p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
        
        {/* 
           We render the set of reviews twice in a single row.
           The CSS animation 'marquee' translates this container by -50%.
           Since the container holds 2 identical sets, translating -50% (the width of 1 set)
           creates a seamless loop.
        */}
        <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] px-3">
          {reviews.map((review, i) => (
            <ReviewCard key={`r1-${i}`} text={review.text} name={review.name} />
          ))}
          {/* Duplicate set for seamless loop */}
          {reviews.map((review, i) => (
            <ReviewCard key={`r2-${i}`} text={review.text} name={review.name} />
          ))}
        </div>
      </div>
    </section>
  );
};