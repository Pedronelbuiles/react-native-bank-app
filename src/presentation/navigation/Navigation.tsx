import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailsScreen} from '../screens/details/DetailsScreen';
import {ProductDataCreateOrModify} from '../screens/productDataCreateOrModify/ProductDataCreateOrModifyScreen';

export type RootStackParams = {
  Home: undefined;
  Details: undefined;
  ProductDataCreateOrModify: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen
        name="ProductDataCreateOrModify"
        component={ProductDataCreateOrModify}
      />
    </Stack.Navigator>
  );
};
