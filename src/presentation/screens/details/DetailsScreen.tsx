import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {ProductDetailsComponents} from '../../components/organisms/productDetailsComponents/ProductDetailsComponents';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {product} = route.params;

  return (
    <View style={style.container}>
      <ProductDetailsComponents product={product} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
