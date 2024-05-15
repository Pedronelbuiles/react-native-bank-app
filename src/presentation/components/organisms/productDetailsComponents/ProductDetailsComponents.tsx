import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProductInfoTitle} from '../../atoms/productInfoTitle/ProductInfoTitle';
import {ProductData} from '../../molecules/productdata/ProductData';
import {Button} from '../../atoms/button/Button';
import {Product} from '../../../../core/entities/product.entity';

interface Props {
  product: Product;
}

export const ProductDetailsComponents = ({product}: Props) => {
  return (
    <View style={style.container}>
      <View style={style.containerInfo}>
        <ProductInfoTitle productId={product.id} />
        <ProductData
          name={product.name}
          description={product.description}
          revision={product.revision}
          liberation={product.release}
          url={product.logo}
        />
      </View>
      <View style={style.containerButtons}>
        <Button title="Editar" onPress={() => {}} />
        <Button title="Eliminar" onPress={() => {}} type="danger" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInfo: {
    flex: 3,
  },
  containerButtons: {
    flex: 1,
  },
});
