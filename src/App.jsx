import { useState } from 'react'
import { BrowserRouter , Route , Routes, useLocation } from 'react-router-dom'
import Home from "./Page/Home"
import Dashboard from "./Page/Dashboard"
import Layout from "./Page/Layout"
import Protected from "./Page/Protected"
import Tasks from "./Page/Tasks"
import Settings from "./Page/Settings"
import Register from "./Page/Register"
import GuestOnly from "./Components/GuestOnly"
import { useSelector } from 'react-redux'
import PopUp from './Components/PopUp'
function App() {
  const location = useLocation()
  const state = location.state
  const background = state?.backgroundLocation || location
  return (
    <>
          <Routes location={background}>
             <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='dashboard' element={
                  <Protected>
                  <Dashboard/>
                  </Protected>
                  }>
                   <Route index element={<Tasks/>}/>
                   <Route path='setting' element={<Settings/>}/>
                </Route>
               <Route path='register' element={
                <GuestOnly>
                  <Register/>
                </GuestOnly>
                }/>
             </Route>
          </Routes>
         { state?.backgroundLocation && ( <Routes>
            <Route path='dashboard/:id' element={<PopUp/>}/>
          </Routes>)}
    </>
  )
}

export default App
