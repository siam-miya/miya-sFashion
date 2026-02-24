
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const MainLayout = ({ cartCount }) => {
  return (
    <>
    <Navbar cartCount={cartCount}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
