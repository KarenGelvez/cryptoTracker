import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackCoinsNavigator, StackFavoritesNavigator } from './StackNavigator';
import { Image } from 'react-native';
import Colors from '../../res/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.blackPearl,
          borderStartColor: Colors.blackPearl,
        },
      }}>
      <Tab.Screen
        name="Coins"
        component={StackCoinsNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              style={{ tintColor: color, width: size, height: size }}
              source={require('../../assets/bank.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={StackFavoritesNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              style={{ tintColor: color, width: size, height: size }}
              source={require('../../assets/star.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
