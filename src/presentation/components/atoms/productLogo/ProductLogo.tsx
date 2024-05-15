import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface Props {
  url: string;
}

export const ProductLogo = ({url}: Props) => {
  return (
    <View style={style.container}>
      <Text style={style.textLogo}>Logo</Text>
      <View style={style.logoContainer}>
        <Image source={{uri: url}} style={style.logo} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 20,
  },
  textLogo: {
    fontSize: 20,
    marginBottom: 10,
  },
  logoContainer: {
    width: '100%',
    height: 180,
    alignItems: 'center',
  },
  logo: {
    width: '75%',
    height: 180,
    borderRadius: 10,
  },
});
