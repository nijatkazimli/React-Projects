import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import { launchCameraAsync } from 'expo-image-picker';
import { usePhotoContext } from '../context/PhotoContext';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const CameraView = () => {
  const { setPhotoUri } = usePhotoContext();
  const navigation = useNavigation();
  const [aspectRatio, setAspectRatio] = useState([4, 3]); // Default aspect ratio

  useEffect(() => {
    const { width, height } = Dimensions.get('window');

    const deviceAspectRatio = width > height ? [height, width] : [width, height];

    setAspectRatio(deviceAspectRatio);
  }, []);

  const openCamera = async () => {
    let result = await launchCameraAsync({
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
      <Button title="Open Camera" onPress={openCamera} />
    </View>
  );
};

export default CameraView;