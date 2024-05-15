import React from 'react';
import {View} from 'react-native';
import {SearchInput} from '../../molecules/searchInput/SearchInput';
import {ProductsList} from '../productsList/ProductsList';

export const HomeComponents = () => {
  return (
    <View>
      <SearchInput />
      <ProductsList />
    </View>
  );
};
