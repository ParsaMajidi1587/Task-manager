import React from 'react'
import Login from '../Components/Login'
import Signup from "../Components/Signup"
const Register = () => {

  const[switching , setswitching]=React.useState("login")
  const styles={
    backgroundColor:"#3F51B5"
  }
  return (
    <div className=' flex flex-col items-center justify-center px-4 py-6 bg-white rounded-2xl  w-full max-w-md mx-auto my-6'>
    <div className='w-full max-w-md bg-white text-slate-800  rounded-3xl p-6  '>
      <div className='flex justify-center'>
      <div className=' bg-white rounded-4xl border-2 border-black overflow-hidden'>
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