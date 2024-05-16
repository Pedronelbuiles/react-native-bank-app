import React from 'react';
import {StyleSheet, View} from 'react-native';

export const IconBank = () => {
  return (
    <View style={style.container}>
      <View style={style.backFrame} />
      <View style={style.frontFrame}>
        <View style={style.circle} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 36,
    height: 30,
  },
  backFrame: {
    width: 30,
    height: 18,
    borderColor: '#0f265c',
    borderWidth: 3,
    position: 'absolute',
    borderRadius: 6,
    top: 4,
  },
  frontFrame: {
    width: 30,
    height: 18,
    borderColor: '#0f265c',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: 'white',
    top: 10,
    right: 6,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: '#0f265c',
    borderRadius: 50,
  },
});
