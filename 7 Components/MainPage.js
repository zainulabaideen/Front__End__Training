import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className='absolute mx-[50%] pt-16'> 
      <h2 className='text-5xl '>Cards</h2>
      <ul className='text-xl'>
    <Link to='/card1'>  <li>Card 1</li></Link>
    <Link to='/card2'>  <li>Card 2</li></Link>
    <Link to='/card3'><li>Card 3</li></Link>
    
      </ul>
      <h2 className='text-5xl pt-16'>Navbars</h2>
      <ul className='text-xl'>
    <Link to='/navbar1'>  <li>Navbar 1</li></Link>
    <Link to='/navbar2'>  <li>Navbar 2</li></Link>
    <Link to='/navbar3'><li>Navbar 3</li></Link>
    <Link to='/navbar4'>  <li>Navbar 4</li></Link>
    <Link to='/navbar5'><li>Navbar 5</li></Link>
    
      </ul>
    </div>
  )
}

export default MainPage
