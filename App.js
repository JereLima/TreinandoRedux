import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
//Telas
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/Navigation/StackNavigation';
//Redux
import {store, persistor} from './src/Store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';

// store = createStore(Reducers);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
