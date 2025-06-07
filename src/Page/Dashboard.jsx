import React from 'react'
import SubHeader from '../Components/SubHeader'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
      <SubHeader/>
      <Outlet/>
    </div>
  )
}

export default Dashboard