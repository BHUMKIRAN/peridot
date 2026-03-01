import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const persistConfig = {
  key: "auth",
  storage:
    typeof window !== "undefined"
      ? createWebStorage("local")
      : {
          getItem: async () => null,
          setItem: async (_key: string, value: unknown) => value,
          removeItem: async () => undefined,
        },
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { auth: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
