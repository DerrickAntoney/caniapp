import HamburgerMenu from "../Menu/Menu"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
    <div className="flex justify-center">
      <div className="w-[90%]">
      <div className="flex flex-row justify-between py-2">
        <div className="relative">
          <img className="w-14 h-14 rounded-full object-cover" src="https://images.pexels.com/photos/11805711/pexels-photo-11805711.jpeg" alt=""/>
          <span className="top-0 left-10 absolute  w-3.5 h-3.5 bg-violet-600 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="hidden md:block">
        <nav className="flex flex-row gap-10 py-2 text-slate-700">
          <Link to={'/'}>About</Link>
          <Link to={'/Courses'}>Courses</Link>
          <Link to={'/Books'}>Books</Link>
          <Link to={'/Youtube'}>Youtube</Link>
          <Link to={'Contact'}>Contact</Link>
          <Link className='bg-lime-600 text-white px-4 py-2 font-semibold rounded-sm' to={'#'}>Log in</Link>
        </nav>
        </div>
        <HamburgerMenu />
        </div>
      </div>
    </div>
    <hr className="h-px bg-gray-200 border-0"/>
    </div>
  )
}

export default Navbar