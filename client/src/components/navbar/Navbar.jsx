import Navhead from './Navhead'
import SearchBar from './SearchBar'
import { useState } from "react";
import ResponsiveNavlinks from "./ResponsiveNavlinks";
import Navlinks from "./Navlinks";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='border-b border-gray-200 fixed  top-0 left-0 w-full z-100'>
      <Navhead />
      <div className='max-w-screen-xl mx-auto px-4 h-20 flex justify-between items-center bg-white relative'>
        {/* Navlinks and logo */}
        <div className='flex items-center justify-between gap-32'>
          <Link to={'/'} className='text-3xl font-extrabold'>Logo</Link>
          <div className="xl:flex gap-10 hidden">
            <Navlinks />
          </div>
        </div>

        {/* NavSearchbar and utils */}
        <div className='xl:flex items-center gap-3.5 hidden'>
          <SearchBar />
          <div>
            <Link to={'/signup'}>
              <i className='fas fa-user mr-3'></i>
            </Link>
            <i className='fas fa-bucket'></i>
          </div>
        </div>

        <button className="xl:hidden" onClick={() => setMenuOpen(prev => !prev)}>
          <i className="fas fa-bars text-2xl"></i>
        </button>
        <ResponsiveNavlinks menuOpen={menuOpen} />
      </div>
    </nav>
  )
}

export default Navbar