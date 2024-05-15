import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputText} from '../../atoms/textInput/TextInput';

export const SearchInput = () => {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.container}>
      <InputText onChangeInput={setTerm} value={term} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
