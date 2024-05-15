import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  onChangeInput: Dispatch<SetStateAction<string>>;
  value: string;
  placeHolder?: string;
}

export const InputText = ({
  onChangeInput,
  value,
  placeHolder = 'example...',
}: Props) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeInput}
      value={value}
      placeholder={placeHolder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: '85%',
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
  },
});
