
import React from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router'
function Header() {
    return (
        <header className="bg-black text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">MyApp</h1>

            <nav className="space-x-4">
                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-white"} hover:text-gray-400`}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-white"} hover:text-gray-400`}>About</NavLink>
                <NavLink to="/Github" className={({ isActive }) => `${isActive ? "text-orange-600" : "text-white"} hover:text-gray-400`}>Github</NavLink>
            </nav>
        </header>
    )
}

export default Header
