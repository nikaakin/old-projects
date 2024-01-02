import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
// import { jsonplaceholderApi } from "../services/jsonPlaceholder";

export const store = configureStore({
  reducer: {
    // [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
    todos: todoReducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware().concat(jsonplaceholderApi.middleware);
  // },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
