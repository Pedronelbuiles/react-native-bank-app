import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  onChangeInput: Dispatch<SetStateAction<string>>;
  value: string;
  placeHolder?: string;
  editable?: boolean;
  error?: boolean;
}

export const InputText = ({
  onChangeInput,
  value,
  placeHolder = 'example...',
  editable = true,
  error,
}: Props) => {
  return (
    <TextInput
      style={[styles.input, error && styles.inputError]}
      onChangeText={onChangeInput}
      value={value}
      placeholder={placeHolder}
      editable={editable}
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
    fontSize: 20,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
