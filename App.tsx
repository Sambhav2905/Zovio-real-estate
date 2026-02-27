import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { Features } from './components/Features';
import { SystemArchitecture } from './components/SystemArchitecture';
import { RevenueCalculator } from './components/RevenueCalculator';
import { Timeline } from './components/Timeline';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { InteractiveBackground } from './components/ui/InteractiveBackground';
import { Cursor } from './components/ui/Cursor';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Global Interactive Elements */}
      <Cursor />
      <InteractiveBackground />
      
      {/* Left Scroll Progress Beam */}
      <div className="fixed left-0 top-0 w-1 h-screen z-40 hidden md:block pointer-events-none">
        <div className="w-full h-full bg-slate-900/50 relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-500 to-transparent animate-scan opacity-50"></div>
        </div>
      </div>

      <Navbar onOpenContact={openModal} />
      
      <main className="relative z-10">
        <Hero onOpenContact={openModal} />
        <PainSection />
        <Features />
        <SystemArchitecture />
        <RevenueCalculator onOpenContact={openModal} />
        <Timeline />
        <ReviewsMarquee />
      </main>
      
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;