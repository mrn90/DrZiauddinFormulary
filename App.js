/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Navigation from './src/Navigation';
import { colors } from './src/utils/theme';
import AnimatedSplash from "react-native-animated-splash";
const App = () => {

  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

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
