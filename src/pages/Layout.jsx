import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 h-[50px]">
        <ul className="flex gap-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/CelToFah">Celsius to Fahrenheit</Link></li>
          <li><Link to="/FahToCel">Fahrenheit to Celsius</Link></li>
          <li><Link to="/MToKm">Meter to Kilometer</Link></li>
          <li><Link to="/KmToM">Kilometer to Meter</Link></li>
        </ul>
      </nav>
      <Outlet/>
      <footer>
      <div className="text-white flex justify-center bg-white border-gray-200 py-2 dark:bg-gray-900">
        <p>Built using React & Tailwind</p>
      </div>
      </footer>
    </>
  )
}

export default Layout