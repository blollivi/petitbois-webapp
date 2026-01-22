import React, { createContext, useState, useContext } from 'react';

const PhotoCarouselContext = createContext();

export const PhotoCarouselProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (photoArray, index = 0) => {
    setPhotos(photoArray);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => {
    setIsOpen(false);
    setCurrentIndex(0);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrentIndex(index);
  };

  return (
    <PhotoCarouselContext.Provider 
      value={{ 
        isOpen, 
        photos, 
        currentIndex, 
        openCarousel, 
        closeCarousel, 
        nextPhoto, 
        previousPhoto,
        goToPhoto
      }}
    >
      {children}
    </PhotoCarouselContext.Provider>
  );
};

export const usePhotoCarousel = () => {
  const context = useContext(PhotoCarouselContext);
  if (context === undefined) {
    throw new Error('usePhotoCarousel must be used within a PhotoCarouselProvider');
  }
  return context;
};
