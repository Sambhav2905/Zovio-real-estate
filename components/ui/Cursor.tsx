import React, { useEffect, useState, useRef } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Ref for the trailing circle
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    let animationFrameId: number;
    
    const moveTrailing = () => {
      if (trailingRef.current) {
        const currentX = parseFloat(trailingRef.current.style.left || '0');
        const currentY = parseFloat(trailingRef.current.style.top || '0');
        
        // Linear interpolation for smooth follow
        const x = currentX + (position.x - currentX) * 0.15;
        const y = currentY + (position.y - currentY) * 0.15;
        
        trailingRef.current.style.left = `${x}px`;
        trailingRef.current.style.top = `${y}px`;
      }
      animationFrameId = requestAnimationFrame(moveTrailing);
    };
    
    moveTrailing();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main pointer */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
        }} 
      />
      {/* Trailing circle */}
      <div 
        ref={trailingRef}
        className={`fixed top-0 left-0 rounded-full border border-emerald-500/50 pointer-events-none z-[9998] transition-all duration-300 ease-out ${isHovering ? 'w-12 h-12 bg-emerald-500/20 border-emerald-400' : 'w-8 h-8'}`}
        style={{ 
          transform: 'translate(-50%, -50%)',
        }} 
      />
    </>
  );
};