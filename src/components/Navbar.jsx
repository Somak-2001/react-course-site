import React from 'react'
import Logo from '../img/OIP.jpeg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between p-5 bg-slate-200'>
      <div className='flex'>
      <Link to='/'>
        <img src={Logo} alt='Logo' className='w-[70px] h-[70px] object-cover rounded-full'></img>
        </Link>

        <h1 className='text-4xl font-bold'>Technical Hub</h1>
        </div>
        <nav className='flex space-x-10 m-4'>
            <li className='hover:text-lg hover:text-orange-500'><Link to='/'>Home</Link></li>
            <li className='hover:text-lg hover:text-orange-500'><Link to='/about'>About Us</Link></li>
            <li className='hover:text-lg hover:text-orange-500'><Link to='contact'>Contact Us</Link></li>
            <li className='hover:text-lg hover:text-orange-500'><Link to='course'>Courses</Link></li>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
