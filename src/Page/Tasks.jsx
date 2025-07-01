import React from 'react'
import * as Yup from "yup"
import {useFormik} from "formik"
import { useGetTodosQuery ,useAddTodoMutation ,useDeleteTodoMutation} from '../todosApi'
import { Link, useLocation } from 'react-router-dom'
const Tasks = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const {data : todos , isLoading , error}=useGetTodosQuery(user?.id)
  const [addTodo] = useAddTodoMutation()
  const [deleteTodo]= useDeleteTodoMutation()
  const location = useLocation()
  
  
  const validationSchema = Yup.object({
    task:Yup.string().required('please enter your todos!!!').min(4,"your todos are short!")
  })

  const formik = useFormik({
    initialValues:{
      task:''
    },
    validationSchema,
    onSubmit: async (values , { resetForm }) => {
      await addTodo({ task: values.task, userId: user.id })
      resetForm()
    }
  })
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>There was An error</p>
  return (
    <>
    <form className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto my-6"
     onSubmit={formik.handleSubmit}>
       <h1 className=' sm:text-2xl my-4 text-black'>Todo Lists!</h1>
       <div class="w-full">
  <div class="relative">
    <input type="text" name='task' onChange={formik.handleChange} value={formik.values.task}
     className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="What is your Plan?" />
    <button
      className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type='submit'
    >
      Add
    </button>
  </div>
        {formik.touched.task && formik.errors.task && (
          <label className='text-red-500'> <strong>{formik.errors.task}</strong></label>
        )}
      </div>
  </form>
      <div className="w-full max-w-md mx-auto flex flex-col gap-4 bg-white rounded-2xl mt-6">
        {todos?.map((todo) => (
          <div key={todo.id} className='flex justify-between p-4'>
            <Link to={`${todo.id}`} state={{backgroundLocation: location}}>
          <h1 className='text-base sm:text-lg text-slate-800 font-medium'>
            {todo.task}
          </h1>
          </Link>
             <button onClick={()=> deleteTodo(todo.id)}
             className=' bg-red-500 hover:bg-red-600 cursor-pointer text-white text-sm px-4 py-1.5 rounded-lg transition'>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tasks