import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { logout } from '../authSlice'
import { useDeleteuserMutation } from '../authApi'
import { themeToggle } from '../themeSlice'
import { useNavigate } from 'react-router-dom'
import { useGetTodosQuery } from '../todosApi'
import { useDeleteTodoMutation } from '../todosApi'
const Settings = () => {
  const navigate = useNavigate()
  const theme = useSelector(state => state.theme.mode)
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const { data: todos } = useGetTodosQuery(user?.id)
  const [deleteTodo] = useDeleteTodoMutation()
  const [deleteuser] = useDeleteuserMutation()
  const bg = theme ==="dark" ?'bg-black text-white' : 'bg-white text-black'
  const color =  theme ==="dark" ?' text-white' : ' text-black'
  
  const handleDelete = async () => {
   try {
    if (todos?.length > 0) {
      await Promise.all(todos.map((todo) => deleteTodo(todo.id)))
    }
    await deleteuser(user.id).unwrap()
    localStorage.removeItem("user")  
    navigate("/register")
  } catch (error) {
    console.error("There was some error:", error)
  }
  }
  console.log("User in settings:", user);
  return (
    <div className={`${bg} w-full  mx-auto my-10 rounded-2xl shadow-lg p-6 transition-all duration-300`}>
      <div className='flex items-center justify-between text-white'>
        <p className={color}>Toggle Theme:</p>
        <button onClick={()=>dispatch(themeToggle())}
        className={`${theme==='dark'?'bg-white text-black' :'bg-black text-white'} rounded-full px-6 py-2 font-medium shadow-md transition-colors duration-300`}>
          {theme==='dark'?'Light':'Dark'}</button>
      </div>
      <div className='bg-white my-2 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl p-5 space-y-4 shadow'>
          <p><span className='font-medium'>Name:</span> {user.name}</p>
          <hr className='border-gray-300 dark:border-gray-600' />
          <p><span className='font-medium'>Email:</span> {user.email}</p>
          <hr className='border-gray-300 dark:border-gray-600' />
          <p><span className='font-medium'>Password:</span> {user.password}</p>
      </div>
      <div className='flex gap-4 mb-4'>
      <button onClick={()=>dispatch(logout())}
      className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow transition-all'>Logout</button>
      <button onClick={handleDelete}
      className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow transition-all'>Delete Account</button>
      </div>
    </div>
  )
}

export default Settings