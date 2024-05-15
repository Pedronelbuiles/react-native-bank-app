import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBank} from '../../atoms/iconBank/IconBank';

export const HeaderApp = () => {
  return (
    <View style={style.container}>
      <IconBank />
      <Text style={style.headerText}>BANCO</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  headerText: {
    fontSize: 20,
    color: '#0f265c',
    fontWeight: '400',
  },
});
