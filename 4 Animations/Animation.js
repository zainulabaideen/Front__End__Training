import React from 'react'
import { FaLaptop } from "react-icons/fa"
import { BsGraphUp } from "react-icons/bs"
import { BiCoinStack } from "react-icons/bi"
// import { BiCoinStack } from "react-icons/bi"
// import { BiCoinStack } from "react-icons/bi"
const Animation = () => {
  const data=[
    {  title:"Web Design",
    icon:< FaLaptop/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    
    {  title:"Marketing",
    icon:< BsGraphUp/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    {  title:"DataBase",
    icon:< BiCoinStack/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    {  title:"Web Design",
    icon:< FaLaptop/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    {  title:"Web Design",
    icon:< FaLaptop/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    {  title:"Web Design",
    icon:< FaLaptop/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    {  title:"Web Design",
    icon:< FaLaptop/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    {  title:"Web Design",
    icon:< FaLaptop/>,
    description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
    

  ]
    return (
    <div>
      <div className='text-2xl pt-4 text-center'>
     
       
      </div>
      
      <div className='max-w-[1320px] md:py-[80] py-5  mx-auto  '>
      <h1 className='text-4xl text-center'>  Our Services</h1>
      </div>
      
      <div className='max-w-[1200px] mx-auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6 '>
      {data.map((menu,index)=>(
        <>
        <div className='shadow-lg p-4 text-center hover:bg-blue-500  duration-500 group hover:text-white'>
        <div className=' text-2xl text-blue-500 mx-[45%] group-hover:text-white duration-1000 animate-bounce'>{menu.icon}</div>
        <h3 className='text-xl py-2 ' >
           {menu.title}
            </h3>
           
            <p>{menu.description}</p>
            </div>
            
            
            </>
            
            
      )
      )}
            </div>
      {/* <p>{data.map((menu)=>(
        menu.description
      ))}</p> */}
       
     
      
    </div>
  )
}

export default Animation
