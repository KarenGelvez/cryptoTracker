import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { CoinItem } from '../components/CoinItem';
import Http from '../libs/http';
import Colors from '../res/colors';

export const CoinsScreen = ({ navigation }) => {
  const [state, setState] = useState({
    coins: [],
    loading: true,
  });
  const getCoins = async () => {
    const coins = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    setState({ coins: coins.data, loading: false });
  };
  useEffect(() => {
    getCoins();
  }, []);
  const handleOnPress = () => {
    navigation.navigate('Detail');
  };
  return (
    <View style={styles.container}>
      {state.loading ? (
        <ActivityIndicator color="#000" size="large" />
      ) : (
        <FlatList
          data={state.coins}
          renderItem={({ item }) => <CoinItem data={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    justifyContent: 'center',
    width: '100%',
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
