import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchInput} from '../../molecules/searchInput/SearchInput';
import {ProductsList} from '../productsList/ProductsList';
import {Button} from '../../atoms/button/Button';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';

export const HomeComponents = () => {
  const {height} = useSafeAreaFrame();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View>
      <SearchInput />
      <ProductsList />
      <View style={{...style.addButton, bottom: height - height * 1.44}}>
        <Button
          title="Agregar"
          onPress={() => navigation.navigate('ProductDataCreateOrModify')}
          type="primary"
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  addButton: {
    width: '85%',
    alignSelf: 'center',
  },
});
