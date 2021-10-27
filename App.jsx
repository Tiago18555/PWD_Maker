import React from 'react';
import { View, StatusBar } from 'react-native'
import Home from '../PWD_Maker/src/components/Home'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/store/shared/shared.reduce'

export default function App() {
  
  const store = createStore(reducers)

  return (
    <Provider store={store}>
      <View>
        <StatusBar />
        <Home />
      </View>
    </Provider>
  );
}
