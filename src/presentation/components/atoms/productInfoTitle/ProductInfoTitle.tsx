import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  productId: string;
}

export const ProductInfoTitle = ({productId}: Props) => {
  return (
    <View>
      <Text style={style.productId}>ID: {productId}</Text>
      <Text style={style.infoExtra}>Información extra</Text>
    </View>
  );
};

const style = StyleSheet.create({
  productId: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 10,
  },
  infoExtra: {
    fontSize: 20,
    fontWeight: '400',
  },
});
