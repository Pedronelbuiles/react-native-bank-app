import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ArrowIcon = () => {
  return <View style={style.arrow} testID="arrowIcon" />;
};

const style = StyleSheet.create({
  arrow: {
    width: 12,
    height: 12,
    transform: [{rotate: '-45deg'}],
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
});
