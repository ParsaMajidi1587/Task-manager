import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes:['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
    query: (userId) => `/tasks?userId=${userId}`,
    providesTags: (result, error, userId) => [{ type: 'Todos', id: userId }] 
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/tasks",
        method: "POST",
        body: todo
      }),
    invalidatesTags: (result, error, todo) => [{ type: 'Todos', id: todo.userId }] 
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:['Todos']
    }),
      getTaskById:builder.query({
        query:(id)=>`tasks/${id}`
      })
  })
})



export const {useGetTodosQuery , useAddTodoMutation , useDeleteTodoMutation , useGetTaskByIdQuery} = todoApi