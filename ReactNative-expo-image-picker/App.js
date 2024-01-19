import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraView from './components/CameraView';
import GalleryView from './components/GalleryView';
import PhotoView from './components/PhotoView';
import { PhotoProvider } from './context/PhotoContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PhotoProvider>
        <Tab.Navigator initialRouteName="Photo">
          <Tab.Screen name="Photo" component={PhotoView} />
          <Tab.Screen name="Camera" component={CameraView} />
          <Tab.Screen name="Gallery" component={GalleryView} />
        </Tab.Navigator>
      </PhotoProvider>
    </NavigationContainer>
  );
}