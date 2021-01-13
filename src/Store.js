import React from 'react';
import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import Reducers from './reducers/index';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AuthReducer', 'Auth'], //Os reducers que vão se manter gravados
    // blacklist: [],//Os reducers que NAO vão se manter gravados
  },
  Reducers,
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};
