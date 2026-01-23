import React from 'react';
import { getAssetUrl } from '../utils/assets';
import { usePhotoCarousel } from '../context/PhotoCarouselContext';

const Gallery = ({ images }) => {
  const { openCarousel } = usePhotoCarousel();

  // Return null if no images provided
  if (!images || images.length === 0) {
    return null;
  }

  const handleImageClick = (index) => {
    openCarousel(images, index);
  };

  return (
    <section>
      <h2 className="text-2xl font-serif text-stone-800 mb-6">Galerie Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={getAssetUrl(image)}
            alt={`Galerie ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-zoom-in"
            loading="lazy"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
