import React from 'react'
import Login from '../Components/Login'
import Signup from "../Components/Signup"
const Register = () => {

  const[switching , setswitching]=React.useState("login")
  const styles={
    backgroundColor:"white"
  }
  return (
    <div className=' flex justify-center my-4 overflow-hidden'>
    <div className='w-full max-w-md bg-gray-400 rounded-3xl p-6 shadow-lg overflow-y-hidden'>
      <div className='flex justify-center'>
      <div className=' bg-gray-400 rounded-4xl border-2 border-black overflow-hidden'>
        <button className=' rounded-3xl py-2 px-6 cursor-pointer'
        style={ switching === "login" ?  styles:null}
         onClick={()=>{setswitching("login")}}
        >Login</button>
        <button className=' rounded-3xl py-2 px-6 cursor-pointer'
        style={ switching ==="register" ?  styles:null}
         onClick={()=>{setswitching("register")}}
        >Register</button>
      </div>
       </div>
        {switching==="login" ? <Login/> : <Signup/>}
    </div>
    </div>
  )
}

export default Register