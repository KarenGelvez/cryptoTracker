import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CoinsScreen } from '../CoinsScreen';
import { CoinDetailScreen } from '../CoinDetailScreen';
import Colors from '../../res/colors';
import { FavoritesScreen } from '../FavoritesScreen';

const Stack = createStackNavigator();

const StackCoinsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowOpacity: 0, // Quitar sombra del header en iOS
          shadowColor: Colors.charade, // El mismo color del screen para ocultar la sombra en Android
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="CoinsStack" options={{ title: 'Coins' }}>
        {props => <CoinsScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="DetailStack" options={{ title: 'Coin Detail' }}>
        {props => <CoinDetailScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const StackFavoritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowOpacity: 0, // Quitar sombra del header en iOS
          shadowColor: Colors.charade, // El mismo color del screen para ocultar la sombra en Android
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="FavoritesStack" options={{ title: 'Favorites' }}>
        {props => <FavoritesScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export { StackCoinsNavigator, StackFavoritesNavigator };
