import { NavLink } from 'react-router-dom'
const SubHeader = () => {
  return (
    <div className='flex pl-2 pb-2 items-center gap-6 text-lg  bg-indigo-700 '>
        <NavLink to="/dashboard" end  
           style={({ isActive }) => ({
        color: isActive ? 'gray' : 'white',
        padding: '5px',
        borderBottom:isActive?"solid white 2px":null,
    })}
        >Tasks</NavLink>
        <NavLink to="setting"
          style={({ isActive }) => ({
        color: isActive ? 'gray' : 'white',
        padding: '5px',
        borderBottom:isActive?"solid white 2px":null,
    })}
        >Settings</NavLink>
    </div>
  )
}

export default SubHeader