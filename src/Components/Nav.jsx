import  {NavLink}  from 'react-router-dom'
export const Nav = () => {
  const styles ={
    color:"#808080",
    border:"solid black 1px"
  }
  return (
    <div className='flex  top-0 left-0 w-full px-3 gap-8 items-center h-20 bg-indigo-700 md:text-lg'>
        <NavLink to="/"
         style={({ isActive }) => ({
        color: isActive ? 'white' : 'black',
        padding: '5px',
        borderBottom:isActive?"solid white 2px":null,
    })}
        >Home</NavLink>
        <NavLink to="dashboard"
         style={({ isActive }) => ({
        color: isActive ? 'white' : 'black',
        padding: '5px',
        borderBottom:isActive?"solid white 2px":null,
    })}
        >Dashboard</NavLink>
        <NavLink to="register"
         style={({ isActive }) => ({
        color: isActive ? 'white' : 'black',
        padding: '5px',
        borderBottom:isActive?"solid white 2px":null,
    })}
        >Register</NavLink>
    </div>
  )
}
export default Nav