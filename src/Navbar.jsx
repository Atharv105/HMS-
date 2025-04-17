import React from 'react'
import Logo from './assets/logo.jpeg'
export default function navbar() {
  return (
    <div>
      <nav className=' bg-amber-400 flex justify-between items-center'>
        <div className="logo flex w-[5vh] m-1" >
          <img className=' rounded-[5px] ' src={Logo} alt="" />
        </div>
        <h2 className='p-1 font-bold text-2xl'>MediConnect</h2>
        <ul className='flex items-center justify-center gap-[5vw] m-1'>
          <li>Home</li>
          <li>About</li>
          <li>Care</li>

        </ul>
         <img src="" alt="" />
      </nav>
    </div>
  )
}
