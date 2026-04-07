import React, { useState } from 'react';

export const Logo = ({ className, size = "md" }: { className?: string, size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('/picture.png');

  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  const handleImageError = () => {
    if (currentSrc === '/picture.png') {
      setCurrentSrc('/picture.jpeg');
    } else {
      setError(true);
    }
  };

  return (
    <div 
      className={`relative bg-white rounded-full shadow-lg flex items-center justify-center ${dimensions[size]} ${className} ring-2 ring-brand-gold/30 overflow-hidden group/logo`}
      aria-label="POWIIS MUN Official Logo"
    >
      {!error ? (
        <img 
          src={currentSrc} 
          alt="POWIIS MUN Logo" 
          className="w-full h-full object-contain p-1 group-hover/logo:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-brand-navy font-display font-black leading-none">
          <span className={size === 'sm' ? 'text-[8px]' : 'text-xs'}>POWIIS</span>
          <span className={size === 'sm' ? 'text-[8px]' : 'text-xs text-brand-gold'}>MUN</span>
        </div>
      )}
    </div>
  );
};
