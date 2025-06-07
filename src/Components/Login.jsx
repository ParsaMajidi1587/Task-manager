import React from 'react'
import * as Yup from "yup"
import {useFormik} from"formik"
import { setCredintials } from '../authSlice'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../authApi'
const Login = () => {
  const [loginError,setLoginError] = React.useState('')
  const dispatch = useDispatch()
  const [login] = useLoginMutation()
  const [alert , setalert]= React.useState('')
  const validationSchema = Yup.object({
    email:Yup.string().required("please enter your email").email("invalid email"),
    password: Yup.string().required("password requierd")
  })

  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema,
    onSubmit: async (values) => {
      try{
          const result = await login(values).unwrap();
        if (result.length > 0) {
          dispatch(setCredintials({ user: result[0] }));
        } else {
          setalert("User not found");
        }
      } catch (err) {
        console.error("Login failed:", err);
      }
    }
  });
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6 my-6'>
            <h1 className='text-3xl text-center'>Login</h1>
             {loginError && (
          <p className="text-red-600 text-sm mb-2">{loginError}</p>
        )}
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:black"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              name='email'
            />
               { formik.touched.email && formik.errors.email && (
                <label className="block mb-1 text-red-500 text-sm font-medium">{formik.errors.email}</label>
              )}
            <input
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:black"
              placeholder="Enter your password"
            />
             { formik.touched.password && formik.errors.password && (
              <label className="block mb-1 text-red-500 text-sm font-medium">{formik.errors.password}</label>
              )}
            <button
            className="w-full bg-[#f74c06]  text-white font-semibold py-2 px-4 rounded-md transition"
            type='submit'
            >submit</button>
        </form>
        <h1 className='text-red-500 text-center text-2xl'>{alert}</h1>
    </div>
  )
}

export default Login