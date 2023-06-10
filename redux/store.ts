'use client';
import authSlice from "./state";
import {configureStore} from "@reduxjs/toolkit"


 const store = configureStore({
      reducer:{
        arr: authSlice
      }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;