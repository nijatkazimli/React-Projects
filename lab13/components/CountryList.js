import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sortNames = (data) => {
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  const fetchAllCountries = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      sortNames(data);
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
        if (data.status !== 404) {
          sortNames(data);
          setCountries(data);
        } else {
          setCountries([]);
        }
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

  const renderCountry = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { country: item })}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{`${index + 1}. ${item.name.common}`}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search countries..."
        onChangeText={(text) => searchCountries(text)}
      />
      <Text style={styles.resultText}>
        {countries.length > 0
        ? `${countries.length} ${countries.length === 1 ? 'country' : 'countries'}`
        : 'No countries found'}
      </Text>
      {loading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={styles.flatList}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  resultText: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 16,
  },
  loader: {
    marginTop: 20,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  listItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 14,
  },
});

export default CountryList;