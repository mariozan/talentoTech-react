import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiMessageSlice = createApi({
    reducerPath: "messageApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: () => '/message'
        }),
        createMessage: builder.mutation({
            query: (newMessage) => ({
                url: '/message',
                method: 'POST',
                body: newMessage
            })
        })
    })
})

export const {
    useGetMessagesQuery,
    useCreateMessageMutation
} = apiMessageSlice