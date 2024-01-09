import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const navigation = useNavigation();

  const renderCountry = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { country: item })}>
      <View>
        <Text>{item.name.common}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.cca2}
          renderItem={renderCountry}
        />
      )}
    </View>
  );
};

export default CountryList;