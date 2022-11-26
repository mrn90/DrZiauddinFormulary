/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Navigation from './src/Navigation';
import { colors } from './src/utils/theme';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});


export default App;
