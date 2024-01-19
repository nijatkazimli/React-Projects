import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { usePhotoContext } from '../context/PhotoContext';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const GalleryView = () => {
  const { setPhotoUri } = usePhotoContext();
  const navigation = useNavigation();
  const [aspectRatio, setAspectRatio] = useState([4, 3]); // Default aspect ratio

  useEffect(() => {
    const { width, height } = Dimensions.get('window');

    const deviceAspectRatio = width > height ? [height, width] : [width, height];

    setAspectRatio(deviceAspectRatio);
  }, []);

  const openGallery = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: aspectRatio,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
      navigation.goBack();
    }
  };

  return (
    <View>
      <Button title="Open Gallery" onPress={openGallery} />
    </View>
  );
};

export default GalleryView;