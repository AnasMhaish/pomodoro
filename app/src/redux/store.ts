import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/index.ts";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2,
  };
  
  const persistedReducer = persistReducer<ReturnType<typeof appReducer>>(
    persistConfig,
    appReducer
  );
  
  export const store = configureStore({
    reducer: persistedReducer,
  });

  export const persistor = persistStore(store);