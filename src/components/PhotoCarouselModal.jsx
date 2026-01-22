import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePhotoCarousel } from '../context/PhotoCarouselContext';

const PhotoCarouselModal = () => {
  const { isOpen, photos, currentIndex, closeCarousel, nextPhoto, previousPhoto, goToPhoto } = usePhotoCarousel();

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCarousel();
      if (e.key === 'ArrowLeft') previousPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCarousel, nextPhoto, previousPhoto]);

  if (!isOpen || photos.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[70] flex flex-col items-center justify-center p-4 transition-all duration-300"
      onClick={closeCarousel}
    >
      {/* Close button */}
      <button 
        onClick={closeCarousel}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-[80]"
        aria-label="Fermer"
      >
        <X className="w-8 h-8 text-white" />
      </button>

      {/* Photo counter */}
      <div className="absolute top-4 left-4 text-white text-lg font-semibold z-[80]">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Main image container */}
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {/* Previous button */}
        {photos.length > 1 && (
          <button
            onClick={previousPhoto}
            className="absolute left-4 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-[75]"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}

        {/* Current image */}
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Next button */}
        {photos.length > 1 && (
          <button
            onClick={nextPhoto}
            className="absolute right-4 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-[75]"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-full overflow-x-auto z-[80]">
          <div className="flex gap-2 px-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-white scale-110' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={photo}
                  alt={`Miniature ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoCarouselModal;
