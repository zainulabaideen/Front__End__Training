import React from 'react'
import { AiFillStar ,AiFillEye } from 'react-icons/ai'
import { BsStarHalf,BsFillHeartFill,BsStar  } from 'react-icons/bs'
const Cards = () => {
   const cards=[
    {
      title:'HeadPhones',
      link:'https://p4.wallpaperbetter.com/wallpaper/129/883/652/headphones-yellow-background-music-wallpaper-preview.jpg',
      rupee:'400.00'
    },
   ]
  return (
    <div className="font-[Readex Pro] h-screen bg-gray-100 flex items-center justify-center gap-10" >
      <div className="card">
        <img src="https://p4.wallpaperbetter.com/wallpaper/129/883/652/headphones-yellow-background-music-wallpaper-preview.jpg" alt="HeadPhones" width="550px" className=' h-full object-cover ' />
        <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <span className='badge'>stock ready</span>
                <span className='badge'>official store</span>
            </div>
            <h2 className='product-title' title='Best Headphone '>
                Best Headphone 
            </h2>
            <div>
                <span className="text-xl font-bold">Rp 400.00</span>
                <div className='flex items-center gap-2 mt-1 '>
                <span className='text-sm line-through opacity-50'>Rp 500.00</span>
                <span className='discount-percent'>
                    save 20%
                </span>
                </div>
                </div>
                <span className='flex items-center mt-1'>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    
                    <BsStarHalf  size='20' className='text-yellow-400'/>
                    <BsStar  size='20' className='text-yellow-400'/>
                    <span className='text-xs  ml-2 pt-1 text-gray-500'>
                        20k reviews
                    </span>
                </span>
               <div className='mt-5 flex gap-2'>
                <button className='button-primary'>
                    Add to cart
                </button>
                <button className='button-icon'>
                   <BsFillHeartFill size='24' className='opacity-50'/> 
                   </button>
                   <button className='button-icon'>
                   <AiFillEye size='24'/>
                   </button>
               
                
                </div> 
        </div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwc2hvZXN8ZW58MHx8MHx8&w=1000&q=80" alt="Shoes"  className=' h-full object-cover ' />
        <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <span className='badge'>stock ready</span>
                <span className='badge'>official store</span>
            </div>
            <h2 className='product-title' title='Best Shoes '>
                Best Shoes 
            </h2>
            <div>
                <span className="text-xl font-bold">Rp 400.00</span>
                <div className='flex items-center gap-2 mt-1 '>
                <span className='text-sm line-through opacity-50'>Rp 500.00</span>
                <span className='discount-percent'>
                    save 20%
                </span>
                </div>
                </div>
                <span className='flex items-center mt-1'>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    
                    <BsStarHalf  size='20' className='text-yellow-400'/>
                    <BsStar  size='20' className='text-yellow-400'/>
                    <span className='text-xs  ml-2 pt-1 text-gray-500'>
                        20k reviews
                    </span>
                </span>
               <div className='mt-5 flex gap-2'>
                <button className='button-primary bg-red-500 hover:bg-red-600'>
                    Add to cart
                </button>
                <button className='button-icon'>
                   <BsFillHeartFill size='24' className='opacity-50'/> 
                   </button>
                   <button className='button-icon'>
                   <AiFillEye size='24'/>
                   </button>
               
                
                </div> 
        </div>
      </div>
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2015/10/16/18/28/camera-991619__340.jpg" alt="camera"  className=' h-[250px] w-full object-cover ' />
        <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <span className='badge'>stock ready</span>
                <span className='badge'>official store</span>
            </div>
            <h2 className='product-title' title='Best Camera '>
                Best Cameras 
            </h2>
            <div>
                <span className="text-xl font-bold">Rp 600.00</span>
                <div className='flex items-center gap-2 mt-1 '>
                <span className='text-sm line-through opacity-50'>Rp 700.00</span>
                <span className='discount-percent'>
                    save 20%
                </span>
                </div>
                </div>
                <span className='flex items-center mt-1'>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    <AiFillStar  size='20' className='text-yellow-400'/>
                    
                    <BsStarHalf  size='20' className='text-yellow-400'/>
                    <BsStar  size='20' className='text-yellow-400'/>
                    <span className='text-xs  ml-2 pt-1 text-gray-500'>
                        20k reviews
                    </span>
                </span>
               <div className='mt-5 flex gap-2'>
                <button className='button-primary bg-gray-500 hover:bg-gray-600'>
                    Add to cart
                </button>
                <button className='button-icon'>
                   <BsFillHeartFill size='24' className='opacity-50'/> 
                   </button>
                   <button className='button-icon'>
                   <AiFillEye size='24'/>
                   </button>
               
                
                </div> 
        </div>
      </div>
    </div>
  )
}

export default Cards
