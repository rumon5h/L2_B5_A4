import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ["Books"]
        }),
        getBookById: builder.query({
            query: (id) => `/books/${id}`,
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: '/books',
                method: 'POST',
                body: newBook,
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: ({ id, ...updatedBook }) => ({
                url: `/books/${id}`,
                method: 'PUT',
                body: updatedBook,
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
                
            }),
            invalidatesTags: ["Books"]
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookByIdQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = baseApi;
