import React from 'react';
import { View, Image } from 'react-native';
import { usePhotoContext } from '../context/PhotoContext';

const PhotoView = () => {
  const { selectedPhotoUri } = usePhotoContext();

  return (
    <View>
      <Image source={{ uri: selectedPhotoUri }} style={{ height: '100%' }} />
    </View>
  );
};

export default PhotoView;