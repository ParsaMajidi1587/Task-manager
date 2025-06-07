import React from 'react'
import SubHeader from '../Components/SubHeader'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
const Dashboard = () => {
  return (
    <>
    <div className='flex flex-col gap-2 '>
    <SubHeader/>
      <Outlet/>
    </div>
    </>
  )
}

export default Dashboard