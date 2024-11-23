import React from 'react'
import Link  from 'next/link'
import { GiSunglasses } from "react-icons/gi";

const Header = () => {
  return (
   <header className="header">
    <h1 className="logo">Eyes more</h1>
    <GiSunglasses style={{ color:'black' , fontSize:'50px'}} />

    <nav> <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About-Us</Link>     
    </nav>
   </header>
  )
}

export default Header