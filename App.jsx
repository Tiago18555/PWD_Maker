import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Home from '../PWD_Maker/src/components/Home'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/store/shared/shared.reduce'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <StatusBar />
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({

  
});
