import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  value: string | Date;
}

export const ProductInfo = ({name, value}: Props) => {
  return (
    <View style={style.container}>
      <Text style={style.textName}>{name}</Text>
      <Text ellipsizeMode="tail" numberOfLines={2} style={style.textValue}>
        {value.toString()}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textName: {
    fontSize: 20,
    fontWeight: '400',
  },
  textValue: {
    fontSize: 20,
    fontWeight: '700',
    position: 'absolute',
    right: 0,
    width: '50%',
  },
});
