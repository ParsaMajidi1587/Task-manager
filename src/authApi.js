import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const authApi = createApi({
    reducerPath :"authApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    endpoints: (builder)=>({
        register:builder.mutation({
            query(userdata){
                return{
                url : "users",
                method:"POST",
                body:userdata
                }
            }
        }),
        login: builder.mutation({
            query:({email,password}) =>({
            url: `users?email=${email}&password=${password}`,
            method: "GET",
            })
        }),
        deleteuser : builder.mutation({
            query:(id)=>({
                url:`users/${id}`,
                method:"DELETE"
            })
        })
    })
})

export const {useRegisterMutation , useLoginMutation , useDeleteuserMutation}= authApi