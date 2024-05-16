import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProductInfoTitle} from '../../atoms/productInfoTitle/ProductInfoTitle';
import {ProductData} from '../../molecules/productdata/ProductData';
import {Button} from '../../atoms/button/Button';
import {Product} from '../../../../core/entities/product.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';
import {useProductCreateStore} from '../../../store/product-create-store';

interface Props {
  product: Product;
}

export const ProductDetailsComponents = ({product}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const changeProductCreate = useProductCreateStore(
    state => state.changeProductCreate,
  );

  const editProduct = () => {
    changeProductCreate(
      product.id,
      product.name,
      product.description,
      product.logo,
      product.release,
    );
    navigation.navigate('ProductDataCreateOrModify', {
      createOrModify: 'modify',
      product,
    });
  };

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
        <Button title="Editar" onPress={editProduct} />
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
