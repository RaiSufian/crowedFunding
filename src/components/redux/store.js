import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userDetails from './slice/userDetails';
import activeproject from './slice/project';
import Loader from './slice/loader';
import payment from './slice/payment';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  userDetails,
  activeproject,
  Loader,
  payment
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)