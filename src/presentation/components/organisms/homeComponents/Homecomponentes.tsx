import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchInput} from '../../molecules/searchInput/SearchInput';
import {ProductsList} from '../productsList/ProductsList';
import {Button} from '../../atoms/button/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';

export const HomeComponents = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={style.container}>
      <View style={style.searchContainer}>
        <SearchInput />
      </View>
      <View style={style.productListContainer}>
        <ProductsList />
      </View>
      <View style={style.addButton}>
        <Button
          title="Agregar"
          onPress={() =>
            navigation.navigate('ProductDataCreateOrModify', {
              createOrModify: 'create',
            })
          }
          type="primary"
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  addButton: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
  },
  productListContainer: {
    flex: 8,
  },
});
