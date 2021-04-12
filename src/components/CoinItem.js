import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../res/colors';

export const CoinItem = ({ data }) => {
  const getImageArrow = () => {
    if (data.percent_change_1h > 0) {
      return require('../assets/arrow_up.png');
    } else {
      return require('../assets/arrow_down.png');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.symbolText}>{data.symbol}</Text>
        <Text style={styles.nameText}>{data.name}</Text>
        <Text style={styles.priceText}>${data.price_usd}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.percentText}>{data.percent_change_1h}</Text>
        <Image style={styles.image} source={getImageArrow()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Colors.zircon,
    justifyContent: 'space-between',
    padding: 16,
    marginLeft: 10,
  },
  wrapper: {
    flexDirection: 'row',
  },
  symbolText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: Colors.white,
    fontSize: 14,
    marginRight: 14,
  },
  priceText: {
    color: Colors.white,
    fontSize: 14,
  },
  percentText: {
    color: Colors.white,
    fontSize: 13,
    marginRight: 8,
  },
  image: {
    height: 20,
    width: 20,
  },
});
