import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  type?: string;
}

export const Button = ({title, onPress, type = 'normal'}: Props) => {
  return (
    <Pressable
      style={({pressed}: {pressed: boolean}) => [
        style.button,
        type === 'normal' && style.normalButton,
        type === 'danger' && style.dangerButton,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={() => onPress()}>
      <Text
        style={[
          style.buttonText,
          type === 'normal' && style.normalText,
          type === 'danger' && style.dangerText,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
  },
  normalText: {
    color: '#375ebe',
  },
  dangerText: {
    color: 'white',
  },
  normalButton: {
    backgroundColor: '#e9ecf3',
  },
  dangerButton: {
    backgroundColor: '#d50707',
  },
});
