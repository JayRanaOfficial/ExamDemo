/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Ceramic from './src/screens/Ceramic';
import {GlobalStyle} from './src/utils/styles';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View style={GlobalStyle.container}>
        <SafeAreaView style={GlobalStyle.subContainer} />
        <Ceramic />
      </View>
    </Provider>
  );
}

export default App;
