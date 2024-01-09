import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAllCountries = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching all countries:', error);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const searchCountries = async (query) => {
    try {
      if (query.length >= 3) {
        setLoading(true);
        setSearchQuery(query);
        const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        const data = await response.json();
        setCountries(data);
      } else if (query.length === 0) {
        fetchAllCountries();
        setSearchQuery('');
      }
    } catch (error) {
      console.error('Error searching countries:', error);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = () => {
    searchCountries(searchQuery);
  };

  const navigation = useNavigation();

  const renderCountry = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { country: item })}>
      <View>
        <Text>{item.name.common}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10 }}
        placeholder="Search countries..."
        onChangeText={(text) => searchCountries(text)}
      />
      <Text style={{ textAlign: 'center', marginVertical: 5 }}>
        {countries.length} countries
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.cca2}
          renderItem={renderCountry}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default CountryList;