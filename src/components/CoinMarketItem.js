import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../res/colors';

export const CoinMarketItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{data.name}</Text>
      <Text style={styles.priceText}>{data.price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: Colors.zircon,
    borderWidth: 0.5,
    padding: 16,
    marginRight: 8,
  },
  nameText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  priceText: {
    color: Colors.white,
  },
});
