import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CountryList" component={CountryList} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;