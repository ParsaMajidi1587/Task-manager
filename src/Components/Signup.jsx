import React from 'react'
import * as Yup from"yup"
import {useFormik} from "formik"
import { useRegisterMutation } from '../authApi'
import { setCredintials } from '../authSlice'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const dispatch = useDispatch()
  const [register,{isLoading,isError,isSuccess}]=useRegisterMutation()
  const navigate = useNavigate()
  const validationpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  const validationSchema = Yup.object({
      name: Yup.string().required("enter your name"),
      email:Yup.string().required("please enter your email").email("invalid email"),
      password: Yup.string().matches(validationpass,"password required 8 characters symbols number")
      .required("password requierd").min(4,"must be more than 4 characters"),
      repeatpassword: Yup.string().oneOf([Yup.ref('password'),null],'password must match')
      .required('enter repeat password')
    })
  
    const formik = useFormik({
      initialValues:{
        name:'',
        email:'',
        password:'',
        repeatpassword:''
      },
      validationSchema,
      onSubmit: async (values) => {
      try {
        const { name, email, password } = values;
        const response = await register({ name, email, password }).unwrap();
        dispatch(setCredintials({user:response}))
        navigate("/dashboard")
        console.log("ثبت نام موفق:", response);

      } catch (error) {
      console.error("ثبت‌نام ناموفق:", error);
      }
    }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='flex  flex-col gap-4 sm:px-1 my-4'>
            <h1 className='text-3xl text-center my-2'>Sign Up</h1>
            <div className='grid sm:grid-cols-2  gap-4'>
            <input
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:black"
              placeholder="Enter your Name"
            />
               <input
               className="w-full border  border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:black"
               placeholder="Email"
               value={formik.values.email}
               onChange={formik.handleChange}
               name='email'
             />
             { formik.touched.name && formik.errors.name && (
              <label className="block  text-red-500 text-sm font-medium">{formik.errors.name}</label>
              )}
               { formik.touched.email && formik.errors.email && (
                <label className="block  text-red-500 text-sm font-medium">{formik.errors.email}</label>
              )}
              </div>
            <input
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:black"
              placeholder="Password"
            />
             { formik.touched.password && formik.errors.password && (
              <label className="block  text-red-500 text-sm font-medium">{formik.errors.password}</label>
              )}
            <input
              name='repeatpassword'
              value={formik.values.repeatpassword}
              onChange={formik.handleChange}
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:black"
              placeholder="Repeat Password"
            />
             { formik.touched.repeatpassword && formik.errors.repeatpassword && (
              <label className="block  text-red-500 text-sm font-medium">{formik.errors.repeatpassword}</label>
              )}
            <button type='submit'
             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition">submit</button>
            {isLoading ? <p>Loading...</p>:null}
            {isSuccess ? <p>the Signup was successful</p>:null}
            {isError? <p>the Signup was failed</p>:null}
        </form>
    </div>
  )
}

export default Signup