// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const onLoginClick = ()=>{
        navigate('/login')
    }

  return (
    <nav className='flex justify-between items-center border px-3'>
        <div className="logo w-[100px] rounded-full px-2">
            <img src="assets/logo.png" width={"75px"} alt="No image" />
        </div>
        <div className="routes">
            <ul className='flex gap-3 font-bold text-lg'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/posts'>Posts</Link></li>

                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/about'>About Us</Link></li>
            </ul>
        </div>
        <button 
        onClick={onLoginClick}
        className="login_logout border p-1 px-3 rounded bg-blue-600 text-white font-bold active:scale-95">Login</button>
    </nav>
  )
}

export default Navbar
