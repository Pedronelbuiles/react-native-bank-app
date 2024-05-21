import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {ProductButton} from '../../molecules/productButton/ProductButton';
import {useProducts} from '../../../hooks/useProducts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';
import {useProduct} from '../../../store/product-store';
import {Product} from '../../../../core/entities/product.entity';

export const ProductsList = () => {
  const {isLoading, productsFind, callFetch} = useProducts();
  const [productsListData, setProductsListData] = useState<Product[]>();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const term = useProduct(state => state.term);
  const reload = useProduct(state => state.reload);

  const changeReload = useProduct(state => state.changeReload);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (term.length === 0) {
      setProductsListData(productsFind);
    }
  });

  useEffect(() => {
    setProductsListData(
      productsFind?.filter(productFind => productFind.name.includes(term)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  useEffect(() => {
    const reloadProducts = async () => {
      const callResult = await callFetch();
      setProductsListData(callResult);
      changeReload(false);
    };

    if (reload) {
      reloadProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

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
    maxHeight: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    paddingBottom: 5,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
  },
});
