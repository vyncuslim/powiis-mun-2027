import React from 'react';

const fallbackHeadshot = '/picture.jpeg';

type ProtectedTeamImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function ProtectedTeamImage({
  src,
  alt,
  className = '',
  imageClassName = '',
}: ProtectedTeamImageProps) {
  const [currentSrc, setCurrentSrc] = React.useState(src);

  React.useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const handleImageError = () => {
    if (currentSrc === fallbackHeadshot) return;
    setCurrentSrc(fallbackHeadshot);
  };

  const blockAssetAction = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className={`team-photo-protected relative overflow-hidden ${className}`}
      onContextMenu={blockAssetAction}
    >
      <img
        src={currentSrc}
        alt={alt}
        className={`pointer-events-none select-none ${imageClassName}`}
        referrerPolicy="no-referrer"
        onError={handleImageError}
        onDragStart={blockAssetAction}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/16 via-transparent to-white/8" />
      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
        <div className="rounded-full bg-brand-navy/55 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
          POWIIS MUN
        </div>
      </div>
    </div>
  );
}
