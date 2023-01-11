import React,{useState} from 'react'
import {BsAppIndicator,BsJustifyLeft,BsFillChatLeftFill,BsSearch,BsFillBookmarkCheckFill,BsFillCaretDownFill  } from 'react-icons/bs'
import { AiFillHome,AiOutlineLogout,AiOutlineClose } from 'react-icons/ai'
// import { GrLogout } from 'react-icons/gr'

const Tailwindfivemain = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  
  
  return (
    <div className='bg-sky-600 w-full h-full font-[Poppins]'>
      <span className={` absolute ext-4xl top-5 left-4 cursor-pointer text-white ${!close && 'hidden'}`}>
      <BsJustifyLeft size='35' className='bg-gray-900 rounded-md' onClick={()=>{setClose(!close)}} />
      {/* ${close && 'hidden'} */}
          </span>
      <div className={`sidebar fixed top-0 bottom-0 duration-300 lg:left-0 ${close && 'left-[-300px]'  } p-2 w-[300px] overflow-y-auto text-center bg-gray-900`}>
        
        <div className="text-gray-100 text-xl">
            <div className="p-2 5 mt-1 flex items-center">
            <BsAppIndicator size='35' className='px-2 py-1 rounded-md bg-blue-600'/>
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                   Tailwindbar </h1>
                   <AiOutlineClose className='cursor-pointer ml-28  lg:hidden' onClick={()=>setClose(!close)}/>
            </div>
            <hr className='my-2 text-gray-600'/>
        </div>
      <div className="p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700">
        <BsSearch />
        <input type="text" placeholder='Search' className='text-[15px] ml-4 w-full bg-transparent focus:outline-none'/>
      </div>
      <div className="p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">

        <AiFillHome size='24'/><span className='text-[18px] mt-2 ml-4 text-gray-200'>Home</span>
      </div>
      <div className="p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">

<BsFillBookmarkCheckFill size='24'/>
<span className='text-[18px] mt-2 ml-4 text-gray-200'>Bookmark</span>
</div>
<hr className='my-4 text-gray-600'/>
<div className="p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">

<BsFillChatLeftFill size='24' />
<div className="flex justify-betwen w-full items-center">
    <span className='text-[18px]  ml-4 text-gray-200'>Chatbox</span>
<span className='text-md  mx-[59%]'><BsFillCaretDownFill className={`${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/></span>
</div>
</div>
<div className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 ${!open && "hidden"}`}>
     <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Social</h1>
     
     <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Persontal</h1>
     
     <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Friends</h1>
     
     </div>
     <div className="p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">

<AiOutlineLogout size='24' className='text-white'/>
<span className='text-[18px]  ml-4 text-gray-200'>LogOut</span>
</div>
      </div>

    </div>
  )
}

export default Tailwindfivemain
