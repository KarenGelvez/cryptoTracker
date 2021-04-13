import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CoinItem } from '../components/CoinItem';
import Storage from '../libs/storage';
import Colors from '../res/colors';

export const FavoritesScreen = ({ navigation }) => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    //getFavorites();
    navigation.addListener('focus', getFavorites);
    return () => {
      navigation.removeListener('focus', getFavorites);
    };
  }, []);

  const getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter(key => key.includes('favorite-'));
      const allFavorites = await Storage.instance.multiGet(keys);
      const favorites = allFavorites.map(fav => JSON.parse(fav[1]));
      setstate(favorites);
    } catch (error) {
      console.log('Error Get Favorites: ', error);
    }
  };
  const handleOnPress = coin => {
    navigation.navigate('DetailStack', { coin: coin });
  };
  return (
    <View style={styles.container}>
      {state.length == 0 ? (
        <Text style={styles.text}>You don't have any favorite yet</Text>
      ) : (
        <FlatList
          data={state}
          renderItem={({ item }) => (
            <CoinItem data={item} onPress={() => handleOnPress(item)} />
          )}
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
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
