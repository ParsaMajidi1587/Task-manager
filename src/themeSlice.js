import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        mode: localStorage.getItem('theme') || 'light'
    },
    reducers:{
        themeToggle:(state)=>{
            state.mode = state.mode === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.mode);
        }
    }
})


export const {themeToggle} = themeSlice.actions
export default themeSlice.reducer