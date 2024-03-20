import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }), // Hace las veces de Axios
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/user',
            providesTags: ['Users'], // Me permite ejecutar un llamado
            transformResponse: response => response.sort((a, b) => 
             (a.name[0].toUpperCase() < b.name[0].toUpperCase()) ? -1 
            : (a.name[0].toUpperCase() > b.name[0].toUpperCase())  ? 1 : 0)
        }),
        getUserById: builder.query({
            query: (_id) => '/user/' + _id,
            providesTags: ['User']
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/user',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ["Users"] // Se ejecuta cuando hay un cambio en la BD
        })
    })    
})

/** Segun la nomenclatura de la libreria se usa use al principio 
 * y Query o Mutation al final segun corresponda */
export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = apiSlice
