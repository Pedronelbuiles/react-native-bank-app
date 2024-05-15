import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ArrowIcon} from '../../atoms/arrowIcon/ArrowIcon';

interface Props {
  onPress: () => void;
  productName: string;
  productId: string;
  lastProduct: boolean;
}

export const ProductButton = ({
  productName,
  productId,
  lastProduct,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({pressed}: {pressed: boolean}) => ({
        ...style.productButton,
        opacity: pressed ? 0.5 : 1,
        borderBottomColor: 'gray',
        borderBottomWidth: lastProduct ? 1 : 0,
        borderBottomLeftRadius: !lastProduct ? 20 : 0,
        borderBottomRightRadius: !lastProduct ? 20 : 0,
      })}
      onPress={() => onPress()}>
      <View>
        <Text style={style.textName}>{productName}</Text>
        <Text style={style.textId}>ID: {productId}</Text>
      </View>
      <ArrowIcon />
    </Pressable>
  );
};

const style = StyleSheet.create({
  productButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
    paddingBottom: 10,
  },
  textName: {
    fontSize: 24,
    fontWeight: '500',
  },
  textId: {
    fontSize: 20,
  },
});
