import React, { useState } from 'react';

export const Logo = ({ className, size = "md" }: { className?: string, size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('/powiis-crest.png');

  const dimensions = {
    sm: 'w-11 h-11',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  const handleImageError = () => {
    if (currentSrc === '/powiis-crest.png') {
      setCurrentSrc('/picture.jpeg');
    } else {
      setError(true);
    }
  };

  return (
    <div 
      className={`relative bg-white rounded-[1rem] border border-brand-navy/10 shadow-sm flex items-center justify-center ${dimensions[size]} ${className} overflow-hidden group/logo`}
      aria-label="POWIIS Official Crest"
    >
      {!error ? (
        <img 
          src={currentSrc} 
          alt="POWIIS Official Crest" 
          className="w-full h-full object-contain p-1.5 group-hover/logo:scale-[1.03] transition-transform duration-500"
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-brand-navy font-display font-black leading-none">
          <span className={size === 'sm' ? 'text-[8px]' : 'text-xs'}>POWIIS</span>
          <span className={size === 'sm' ? 'text-[7px]' : 'text-[10px] text-brand-gold'}>Official</span>
        </div>
      )}
    </div>
  );
};
