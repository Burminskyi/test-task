import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { carsReducer } from "./Cars/slice";
// import { themeReducer } from './Theme/slice';

const carsPersistConfig = {
  key: "cars",
  storage,
  whitelist: ["favoriteCars"],
};

// const themesPersistConfig = {
//   key: 'theme',
//   storage,
//   whitelist: ['themeStyle'],
// };

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carsReducer),
    // theme: persistReducer(themesPersistConfig, themeReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
