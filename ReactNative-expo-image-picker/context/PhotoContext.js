import React, { createContext, useState, useContext } from 'react';

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [selectedPhotoUri, setSelectedPhotoUri] = useState('https://reactjs.org/logo-og.png');

  const setPhotoUri = (uri) => {
    setSelectedPhotoUri(uri);
  };

  return (
    <PhotoContext.Provider value={{ selectedPhotoUri, setPhotoUri }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => {
  return useContext(PhotoContext);
};