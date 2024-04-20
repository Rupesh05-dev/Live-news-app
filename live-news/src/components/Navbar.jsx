
import {  NavLink  } from "react-router-dom"
import logo from "../Assets/Logo.png"


export default function Navbar(){

const toggle = ()=>{
   document.querySelector("#navbar-default").classList.toggle('hidden')
}
    return(
        <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 z-50 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div  className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className="h-10 bg-[#fff]" src={logo} alt="" />
            </div>
            <button onClick={toggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className= "w-fullmd:block w-[12] md:w-auto  fixed md:static top-[3rem] right-0"   id="navbar-default">
            <ul className="font-medium flex gap-2 md:gap-0 flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-900  dark:border-gray-900">
                <li>
                <NavLink to="/" className={  ({isActive})=> `   ${isActive ? "text-orange-600" : " text-gray-50 " }`  }> General</NavLink>  
                </li>
                <li>
                <NavLink to="/business" className={({isActive})=> `  ${isActive ? " text-orange-600" : " text-gray-50 " }`}> Business</NavLink> 
            </li>
                <li>
                <NavLink to="/entertainment" className={({isActive})=> `  ${isActive ? " text-orange-600" : " text-gray-50 " }`}> Entertainment</NavLink>
                    </li>
                <li>
                <NavLink to="/health" className={({isActive})=> `  ${isActive ? " text-orange-600" : " text-gray-50 " }`}> Health</NavLink>
            </li>
                <li>
                <NavLink to="/science" className={({isActive})=> `  ${isActive ? " text-orange-600" : " text-gray-50 " }`}> Science</NavLink>
                </li>
                <li>
                <NavLink to="/sports" className={({isActive})=> `  ${isActive ? " text-orange-600" : " text-gray-50 " }`}> Sports</NavLink>
                </li>
                <li>
                <NavLink to="/technology" className={({isActive})=> `  ${isActive ? " text-orange-600" : " text-gray-50 " }`}>Technology</NavLink>  
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>


    )
}