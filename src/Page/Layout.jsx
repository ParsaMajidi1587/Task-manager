import Nav from "../Components/Nav"
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import Footer from "../Components/Footer"
const Layout = () => {
  const theme = useSelector(state => state.theme.mode)
  const bg = theme ==="dark" ?'bg-black text-white' : 'bg-white text-black'
  return (
    <div className={`${bg} flex flex-col sm:min-h-screen transition-all duration-300`}>
      <Nav/>
      <main className='flex-grow'>
      <Outlet/>
    </main>
    <Footer/>    
    </div>
  )
}

export default Layout