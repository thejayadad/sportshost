'use client'
import React from 'react'
import Logo from './Logo'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
      <nav className='flex justify-between items-center max-w-screen-lg mx-auto'>
      <Logo size={'120px'} />
      <AuthLinks  />
      </nav>
    </header>
  )
}

export default Navbar