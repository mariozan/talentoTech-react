import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3003',
    }), // Hace las veces de Axios
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/user',
            providesTags: ["Users"], // Funcion que se ejecuta al hacer un llamado en conjutno con el invalidate
            transformResponse: response => response.sort((a, b) => b._id - a._id) // Transforma y reordena
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/user',
                method: 'POST',
                body: newUser
            })
        })
    })    
})

export const { useGetUsersQuery, useCreateUserMutation } = apiSlice
