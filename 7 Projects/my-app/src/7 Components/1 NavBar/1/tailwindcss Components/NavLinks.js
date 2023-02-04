import React,{useState} from 'react'
import { BsChevronDown } from "react-icons/bs";
import {links} from './Mylinks'
const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");

    return (
    <>
    
    {
      links.map(link=>(
        <div>
            <div className='px-3 text-left md:cursor-pointer group '>
                <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5' onClick={()=>{heading!==link.name? setHeading(link.name):setHeading('');
              setSubheading("");}}>
                    {link.name}
                <span className='text-xl md:mt-1 md:ml-2 inline'>
                <BsChevronDown ></BsChevronDown>
                </span>
                </h1>
                
                {link.submenu && (
                   <div>
                        <div className='absolute top-20  hidden group-hover:md:block hover:md:block'>
                          <div className='py-3'>
                                <div className='w-4 h-4 left-3 absolute mt-5 bg-white rotate-45'></div>
                          </div>
                          <div className='bg-white p-3 grid grid-cols-3 gap-10'>
                            {
                              link.sublinks.map((mysublinks)=>(
                                  <div>
                                    <h1 className='text-lg font-semibold '>
                                      {mysublinks.Head}
                                    </h1>
                                    {mysublinks.sublink.map((slink)=>(
                                      <li className='text-sm my-2.5 text-gray-600'>
                                        <a href={slink.link} className='hover:text-blue-600'>{slink.name}</a></li>
                                     
                                     ))}
                                  </div>
                            ) )
                            }
                          </div>
                        </div>
                   </div>
                   )}
            </div>
            {/* Mobile menu */}
            <div className={`
            ${heading===link.name? 'md:hidden':'hidden'}`}>
              {
                link.sublinks.map((slinks)=>(
                  <div>
                    <div>
                      <h1 onClick={()=>{subheading !== slinks.Head ? setSubheading(slinks.Head):setSubheading(''); setSubheading("");}
                    } className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slinks.Head}</h1>
                   <div className={`${
                    subheading=== slinks.Head ? "md:hidden":"hidden"

                   }`}>
                    {slinks.sublink.map(slink=>(
                      <li className='py-3 pl-14'>
                        <a href={slink.link} className='hover:text-blue-600 '>{slink.name}</a>
                      </li>
                    ))}
                   </div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
        
      ))
    }
    </>
  )
}

export default NavLinks
