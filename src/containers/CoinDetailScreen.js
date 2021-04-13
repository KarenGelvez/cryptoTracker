import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CoinMarketItem } from '../components/CoinMarketItem';
import Http from '../libs/http';
import Storage from '../libs/storage';
import Colors from '../res/colors';

export const CoinDetailScreen = ({ navigation, route }) => {
  const { coin } = route.params;

  const [state, setState] = useState({
    markets: [],
    isFavorite: false,
  });

  useEffect(() => {
    getMarkets(coin.id);
    getFavorite();
    navigation.setOptions({ title: coin.symbol });
  }, []);

  const getMarkets = async coinId => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    setState({ ...state, markets: markets });
  };

  const getFavorite = async () => {
    const key = `favorite-${coin.id}`;
    try {
      const favStr = await Storage.instance.get(key);
      if (favStr != null) setState({ ...state, isFavorite: true });
    } catch (error) {
      console.log('get error: ', error);
    }
  };

  const toggleFavorite = () => {
    if (state.isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  const addFavorite = async () => {
    const coin = JSON.stringify(coin);
    const key = `favorite-${coin.id}`;
    const stored = await Storage.instance.store(key, coin);
    if (stored) setState({ ...state, isFavorite: true });
  };

  const removeFavorite = async () => {
    Alert.alert('Remove favorite', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: async () => {
          const key = `favorite-${coin.id}`;
          await Storage.instance.remove(key);
          setState({ ...state, isFavorite: false });
        },
        style: 'destructive',
      },
    ]);
  };

  const getSymbloIcons = coinNameId => {
    if (coinNameId) {
      return `https://c1.coinlore.com/img/25x25/${coinNameId}.png`;
    }
  };

  const getSections = coin => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={{ uri: getSymbloIcons(coin.nameid) }}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
        <Pressable
          onPress={toggleFavorite}
          style={[
            styles.buttonFavorite,
            state.isFavorite
              ? styles.buttonFavoriteRemove
              : styles.buttonFavoriteAdd,
          ]}>
          <Text style={styles.textButton}>
            {state.isFavorite ? 'Remove favorite' : 'Add favorite'}
          </Text>
        </Pressable>
      </View>
      <SectionList
        style={styles.section}
        sections={getSections(coin)}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
      <Text style={styles.marketTitle}>Markets</Text>
      <FlatList
        keyExtractor={item => item.id}
        style={styles.list}
        data={state.markets}
        renderItem={({ item }) => <CoinMarketItem data={item} />}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
  },
  wrapper: {
    flexDirection: 'row',
  },
  image: {
    height: 25,
    width: 25,
    marginRight: 14,
  },
  titleText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '100',
  },
  buttonFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  buttonFavoriteAdd: {
    backgroundColor: Colors.picton,
  },
  buttonFavoriteRemove: {
    backgroundColor: Colors.carmine,
  },
  textButton: {
    color: Colors.white,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: Colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketTitle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    margin: 16,
  },
  list: {
    maxHeight: '10%',
    paddingStart: 5,
  },
});
