import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { CoinItem } from '../components/CoinItem';
import { CoinSearch } from '../components/CoinSearch';
import Http from '../libs/http';
import Colors from '../res/colors';

export const CoinsScreen = ({ navigation }) => {
  const [state, setState] = useState({
    coins: [],
    allCoins: [],
    loading: true,
    text: '',
  });
  const getCoins = async () => {
    const coins = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    setState({ coins: coins.data, allCoins: coins.data, loading: false });
  };
  useEffect(() => {
    getCoins();
  }, []);
  const handleOnPress = coin => {
    navigation.navigate('DetailStack', { coin: coin });
  };
  const handleSearch = value => {
    setState({ ...state, text: value });
    const coinsFilter = state.allCoins.filter(
      coin =>
        coin.name.toLowerCase().includes(value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(value.toLowerCase()),
    );

    setState({ ...state, coins: coinsFilter });
  };
  return (
    <View style={styles.container}>
      {state.loading ? (
        <ActivityIndicator color="#000" size="large" />
      ) : (
        <>
          <CoinSearch text={state.text} onChange={handleSearch} />
          <FlatList
            data={state.coins}
            renderItem={({ item }) => (
              <CoinItem data={item} onPress={() => handleOnPress(item)} />
            )}
          />
        </>
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
});
