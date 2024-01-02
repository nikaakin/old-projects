import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonplaceholderApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    // builder.query<any, any>  (first for data return type, second for argument type)
    getTodos: builder.query<any, any>({ query: () => `/todos?userId=1` }),
  }),
});

export const { useGetTodosQuery, reducer } = jsonplaceholderApi;
