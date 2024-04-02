import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiColombiaSlice = createApi({
    reducerPath: "apiColombia",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-colombia.com/api/v1"
    }),
    endpoints: (builder) => ({
        getDepartments: builder.query({
            query: () => '/Department'
        }),
        getCitiesByDepartment: builder.query({
            query: (departmentId) => `/Department/${departmentId}/cities`
        })
    })
})

export const { useGetDepartmentsQuery, 
                useLazyGetCitiesByDepartmentQuery } = apiColombiaSlice