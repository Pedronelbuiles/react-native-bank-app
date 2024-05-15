import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ProductButton} from '../../molecules/productButton/ProductButton';
import {useProducts} from '../../../hooks/useProducts';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';

export const ProductsList = () => {
  const {isLoading, productsFind} = useProducts();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <FlatList
      data={productsFind}
      style={style.container}
      renderItem={({item, index}) => (
        <ProductButton
          onPress={() => navigation.navigate('Details', {product: item})}
          productName={item.name}
          productId={item.id}
          lastProduct={
            productsFind && index < productsFind?.length - 1 ? true : false
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
