import React from 'react'
import {useSelector} from"react-redux"
import { Navigate } from 'react-router-dom'
const Protected = ({children}) => {
    const auth = useSelector( state => state.auth.isLoggedin)
        return auth ? children : <Navigate to="/register"/>
}

export default Protected