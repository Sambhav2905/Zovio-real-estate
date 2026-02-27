import React, { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateX = ((mouseY - centerY) / (rect.height / 2)) * -8; // Reduced rotation slightly for sharpness
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 8;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`interactive ${className}`}
      style={{
        perspective: '1200px', // Increased perspective for less distortion
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="transition-transform duration-150 ease-out w-full h-full"
        style={{
          // Removed scale() to fix blurriness
          // Added translateZ(0) to force hardware acceleration without blur
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(0)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform', // Hint to browser for optimization
          backfaceVisibility: 'hidden', // Helps with edge aliasing
        }}
      >
        {children}
        
        {/* Holographic Shine */}
        <div 
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-0 transition-opacity duration-300 rounded-inherit"
            style={{
                opacity: isHovering ? 0.3 : 0,
                background: `linear-gradient(${105 + rotation.y}deg, transparent 40%, rgba(255, 255, 255, 0.3) 45%, transparent 50%)`,
                transform: 'translateZ(1px)', // Ensure shine sits above content
            }}
        />
      </div>
    </div>
  );
};