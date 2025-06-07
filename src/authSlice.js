import {createSlice} from "@reduxjs/toolkit"

const userFromStorage = JSON.parse(localStorage.getItem("user"));

export const authSlice=createSlice({
    
    name:"auth",
    
    initialState:{
        isLoggedin: !!userFromStorage,
        user: userFromStorage || null
    },
    reducers:{
        setCredintials:(state,action)=>{
            state.user = action.payload.user
            state.isLoggedin= true
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        logout:(state)=>{
            state.user=null
            state.isLoggedin=false
            localStorage.removeItem("user")
        }
    }
})

export const {logout,setCredintials} = authSlice.actions
export default authSlice.reducer