import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeComponents} from '../../components/organisms/homeComponents/Homecomponentes';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeComponents />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
