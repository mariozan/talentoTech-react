import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3003',
    }), // Hace las veces de Axios
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/user'
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
