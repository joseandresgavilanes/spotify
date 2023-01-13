import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./features/PlayerSlice"
import { ShazamCoreApi } from "./services/ShazamCore";
export const Store = configureStore( {
  reducer : {
    [ShazamCoreApi.reducerPath] : ShazamCoreApi.reducer,
    player : PlayerReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamCoreApi.middleware),
});

