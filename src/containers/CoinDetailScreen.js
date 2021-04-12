import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const CoinDetailScreen = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate('Coins');
  };
  return (
    <View style={styles.container}>
      <Text>Coin Detail Screen</Text>
      <Pressable style={styles.button} onPress={handleOnPress}>
        <Text>Ir a Coins</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
    margin: 10,
    padding: 10,
  },
});
