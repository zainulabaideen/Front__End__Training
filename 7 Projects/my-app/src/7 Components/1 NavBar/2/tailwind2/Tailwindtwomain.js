import React,{useState} from 'react'
import {BsArrowLeftShort,BsSearch,BsChevronDown,BsFillImageFill,BsPerson,BsReverseLayoutTextSidebarReverse} from "react-icons/bs"
import {AiFillEnvironment,AiOutlineFileText,AiOutlineBarChart,AiOutlineLogout,AiOutlineSetting,AiOutlineMail} from "react-icons/ai"
import { RiDashboardFill } from "react-icons/ri"


const Tailwindtwomain = () => {
    const[open,setOpen]=useState(true)
    const[submenuOpen,setSubmenuOpen]=useState(false)
    
  const Menu =[
    {  title:"Dashboard"},
    { title:"Pages", icon:< AiOutlineFileText/>},
   { title:"Media",spacing:true , icon:< BsFillImageFill/>},
   {
    title:"Projects",
    icon:<BsReverseLayoutTextSidebarReverse />,
    submenu:true,
    submenuItems:[
      {title:"Submenu 1"},
      {title:"Submenu 2"},
      {title:"Submenu 3"},
    ],
  },
  {title:"Analytics", icon:<AiOutlineBarChart />},
  {title:"Inbox", icon:<AiOutlineMail />},
  {title:"Profile",spacing:true, icon:<BsPerson />},
  {title:"Setting", icon:<AiOutlineSetting />},
  {title:"Logout", icon:<AiOutlineLogout />},
   
    
  ]
    return (
    <div>
      <div className="flex">
        <div className={`bg-dark-purple h-screen duration-300 p-5 pt-8 ${open? 'w-72':'w-20'} relative`}>
            <BsArrowLeftShort className={`bg-white text-dark-purple border border-dark-purple cursor-pointer text-3xl rounded-full ${!open && "rotate-180"} absolute -right-3 top-9`} 
            onClick={()=>setOpen(!open)} />
     
        <div className="inline-flex">
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 ${open && "rotate-[360deg]"} duration-500`} />
       <h1 className={`text-white origin-left font-medium text-2xl ${!open && "scale" && 'hidden'} duration-300`}>Tailwind</h1>
        </div>
        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open? "px-2.5":  "px-4"} px-4 py-2`}>
      <BsSearch  className={`text-white text-lg block float-left cursor-pointer   ${open && "mr-2"}`}/>
     <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
     </div>
     <ul className="pt-2">
      {Menu.map((menu,index)=>(
        <>
        <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${menu.spacing ? "mt-9": "mt-2"}`}>
         <span className='text-2xl block float-left'> {menu.icon ? menu.icon :<RiDashboardFill />}</span>
         <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
        {menu.submenu && (
          <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={()=>setSubmenuOpen(!submenuOpen)} />
        ) }
        </li>
        {menu.submenu && submenuOpen && open && (
          <ul>
            {menu.submenuItems.map((submenuItem,index)=>(
              <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md" >
              {submenuItem.title}
              </li>
            ))}
          </ul>
        )}
        </>
      ))}
     </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
     
      
     
      </div>

    </div>
  )
}

export default Tailwindtwomain
