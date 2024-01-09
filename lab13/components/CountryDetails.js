import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CountryDetails = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://flagcdn.com/w80/${country.cca2.toLowerCase()}.png` }}
        style={styles.flag}
      />
      <Text style={styles.detailText}>{`Country: ${country.name.common}`}</Text>
      <Text style={styles.detailText}>{`Region: ${country.region}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flag: {
    width: 80,
    height: 50,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default CountryDetails;