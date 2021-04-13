import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import Colors from '../res/colors';

export const CoinSearch = ({ text, onChange }) => {
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.os === 'ios' ? styles.textInputiOS : styles.textInputAndroid,
        ]}
        onChangeText={onChange}
        value={text}
        placeholder="Search Coin"
        placeholderTextColor={Colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInput: {
    height: 46,
    color: Colors.white,
    backgroundColor: Colors.charade,
    padding: 16,
    margin: 5,
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputiOS: {
    margin: 8,
    borderRadius: 8,
  },
});
