import React,{useState} from 'react'
import { FaStripe } from "react-icons/fa";
import { MdMenu,MdClose } from "react-icons/md";

const TailwindFourmain = () => {
    const [open, setOpen] = useState(false);
    return (
    <div className='font-[Poppins,san-serif] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen'>
     <header className='bg-white'>
    <nav className={`flex justify-between items-center w-[92%] mx-auto`}>
            <div>
            <FaStripe  size='100' className=''/>                
            </div>
        <div className={`md:static absolute  bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  ${open ? 'top-[15%]':'top-[-100%]'} w-full flex md:items-center px-5`}>
            <ul className='flex md:flex-row flex-col items-center md:gap-[4vw] gap-8  md:justify-center  mx-auto  text-xl relative '>
                <li>
                    <a href="#" className='hover:text-gray-500'>Products</a>
                </li>
                <li>
                    <a href="#" className='hover:text-gray-500'>Solution</a>
                </li>
                <li>
                    <a href="#" className='hover:text-gray-500'>Resource</a>
                </li>
                <li>
                    <a href="#" className='hover:text-gray-500'>Developers</a>
                </li>
                <li>
                    <a href="#" className='hover:text-gray-500'>Pricing</a>
                </li>
            </ul>
            </div>
            <div className="flex items-center gap-6">
            <button className='bg-[#a6c1ee] text-white px-5 py-3 rounded-full hover:bg-[#87acec]'>Sign In</button>
           <div className='flex'>
             < MdMenu size='50' className= {`cursor-pointer md:hidden  ${open && 'hidden'} `} onClick={()=>setOpen(true)}/>
           <MdClose size='50' className={`cursor-pointer md:hidden ${!open && 'hidden'}`} onClick={()=>setOpen(false)}/>
            </div>
            </div>
                     </nav>
            </header> 
    </div>
  )
}

export default TailwindFourmain
