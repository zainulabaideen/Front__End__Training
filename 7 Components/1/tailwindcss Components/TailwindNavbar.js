import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import NavLinks from './NavLinks';
import slogo  from "./slogo.png";
import { IoIosMenu } from "react-icons/io";
const TailwindNavbar = () => {
  const [open, setOpen] = useState(false);
  return(      
     <nav className='bg-white'>
        <div className="flex items-center font-medium justify-around">
            <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                <img src={slogo} alt="Logo" className='md:cursor-pointer h-12'/>
           <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
            <IoIosMenu name={`${open ? "close" : "menu"}`}></IoIosMenu>
           </div>
            </div>
<ul className='md:flex hidden uppercase items-center gap-8 font-[Inter]'>
    <li>
        <a href="/" className="py-7 px-3 inline-block">
            Home
        </a>
            
    </li>
    <NavLinks />
</ul>
<div className='md:block hidden '>
  <Button />
</div>
{/* Mobile Nav */}
<ul className={`md:hidden py-24 pl-4 bg-white absolute w-full h-full bottom-0
duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
  <li>
    <a href="/" className='py-7 px-3 inline-block'>
      Home
    </a>
  </li>
  <NavLinks />
  <div className='py-5 '>
    <Button />

  </div>
</ul>
        </div>
      </nav>
    
)}

export default TailwindNavbar
