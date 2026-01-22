import React from 'react';
import { getAssetUrl } from '../utils/assets';
import { usePhotoCarousel } from '../context/PhotoCarouselContext';

// Vite-specific glob import to collect all images from the public/photos folder
// Note: We use eager: true to get the values immediately
const allImages = import.meta.glob('../../public/photos/**/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  import: 'default'
});

const Gallery = ({ folder, images: propImages }) => {
  const { openCarousel } = usePhotoCarousel();
  // Use images from props if provided, otherwise filter from the glob
  let galleryImages = propImages || [];

  if (folder) {
    // Filter the globbed images by the folder name
    // The key format will be: ../../public/photos/folder/image.jpg
    const matchedImages = Object.keys(allImages)
      .filter((path) => path.includes(`/photos/${folder}/`))
      .map((path) => {
        // Convert the filesystem path to a public URL path
        // From: ../../public/photos/l-etable/img1.jpg 
        // To:   /photos/l-etable/img1.jpg
        return getAssetUrl(path.replace('../../public', ''));
      });
    
    galleryImages = [...galleryImages, ...matchedImages];
  }

  // Fallback demo/guidance if no images found
  if (galleryImages.length === 0) {
    if (folder) {
      return (
        <section className="mt-12 p-8 border-2 border-dashed border-stone-200 rounded-lg text-center bg-stone-50">
          <h2 className="text-xl font-serif text-stone-800 mb-2">Galerie Photos: {folder}</h2>
          <p className="text-stone-500">
            Pour afficher des photos, créez le dossier :<br/>
            <code className="bg-white px-2 py-1 rounded border border-stone-200 mt-2 inline-block text-sm">
              public/photos/{folder}/
            </code>
            <br/>
            <span className="text-xs mt-2 block italic text-stone-400">
              (Formats supportés: png, jpg, jpeg, svg, webp)
            </span>
          </p>
        </section>
      );
    }
    return null;
  }

  const handleImageClick = (index) => {
    openCarousel(galleryImages, index);
  };

  return (
    <section>
      <h2 className="text-2xl font-serif text-stone-800 mb-6">Galerie Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
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
