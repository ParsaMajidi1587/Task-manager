import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetTodosQuery , useGetTaskByIdQuery } from '../todosApi'

const PopUp = () => {
    const navigate = useNavigate()
    const {id} =useParams() 
    const {data , isLoading , error}=useGetTaskByIdQuery(id)
    if (isLoading) return <div className="modal">Loading...</div>;
    if (error) return <div className="modal">Error fetching task</div>;
    if (!data) return <div className="modal">No data available</div>;
    console.log(data)
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  backdrop-blur-sm bg-opacity-30">
  <div className="bg-[#f6f6f6] w-full max-w-lg mx-4 rounded-2xl py-4 px-6 flex flex-col gap-6 shadow-xl">
    <div className=" p-3 rounded text-black">
      <p className="md:text-2xl font-semibold">Task:{data.task}</p>
    </div>

    <div className="flex justify-end">
      <button
        onClick={() => navigate(-1)}
        className="rounded-3xl bg-red-500 text-white py-2 px-8 hover:bg-red-600 cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
</div>

  )
}

export default PopUp