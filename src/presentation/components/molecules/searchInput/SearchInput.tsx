import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputText} from '../../atoms/textInput/TextInput';
import {useEffect} from 'react';
import {useProduct} from '../../../store/product-store';

export const SearchInput = () => {
  const [term, setTerm] = useState('');
  const changeProduct = useProduct(state => state.changeProduct);

  useEffect(() => {
    changeProduct(term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <View style={styles.container}>
      <InputText onChangeInput={setTerm} value={term} placeHolder="Buscar..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
