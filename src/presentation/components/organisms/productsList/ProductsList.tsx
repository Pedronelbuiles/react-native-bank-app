import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {ProductButton} from '../../molecules/productButton/ProductButton';
import {useProducts} from '../../../hooks/useProducts';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';
import {useProduct} from '../../../store/product-store';
import {Product} from '../../../../core/entities/product.entity';

export const ProductsList = () => {
  const {isLoading, productsFind} = useProducts();
  const [productsListData, setProductsListData] = useState<Product[]>();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const term = useProduct(state => state.term);

  useEffect(() => {
    if (term.length === 0) {
      setProductsListData(productsFind);
    } else {
      setProductsListData(
        productsFind?.filter(productFind => productFind.name.includes(term)),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <FlatList
      data={productsListData}
      style={style.container}
      renderItem={({item, index}) => (
        <ProductButton
          onPress={() => navigation.navigate('Details', {product: item})}
          productName={item.name}
          productId={item.id}
          lastProduct={
            productsListData && index < productsListData?.length - 1
              ? true
              : false
          }
        />
      )}
    />
  );
};

const style = StyleSheet.create({
  container: {
    width: '85%',
    maxHeight: '80%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
  },
});
