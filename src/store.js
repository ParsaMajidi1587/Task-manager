import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import { authApi } from "./authApi"
import { todoApi } from "./todosApi"
import themeReducer from "./themeSlice"
export const store = configureStore({
        reducer:{
            theme:themeReducer,
            auth:authReducer,
            [authApi.reducerPath]:authApi.reducer,
            [todoApi.reducerPath]:todoApi.reducer
        },
        middleware:(getdefaultMiddleware)=>
        getdefaultMiddleware().concat(authApi.middleware,todoApi.middleware)
      
})