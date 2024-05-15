import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProductInfo} from '../../atoms/productInfo/ProductInfo';
import {ProductLogo} from '../../atoms/productLogo/ProductLogo';

interface Props {
  name: string;
  description: string;
  url: string;
  liberation: Date;
  revision: Date;
}

export const ProductData = ({
  name,
  description,
  url,
  liberation,
  revision,
}: Props) => {
  return (
    <View style={style.container}>
      <View style={style.containerText}>
        <ProductInfo name="Nombre" value={name} />
      </View>
      <View style={style.containerText}>
        <ProductInfo name="Descripción" value={description} />
      </View>
      <ProductLogo url={url} />
      <View style={style.containerText}>
        <ProductInfo name="Fecha liberación" value={liberation} />
      </View>
      <View style={style.containerText}>
        <ProductInfo name="Fecha revisión" value={revision} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerText: {
    height: 80,
    width: '100%',
  },
});
