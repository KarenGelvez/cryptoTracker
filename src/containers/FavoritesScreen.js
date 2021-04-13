import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../res/colors';

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have any favorite yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.charade,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
