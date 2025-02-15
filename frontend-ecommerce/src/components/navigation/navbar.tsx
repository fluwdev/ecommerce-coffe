'use client'

import Link from 'next/link'
import { BaggageClaim, Heart, ShoppingCart } from 'lucide-react'
import MenuList from './menu-list'
import ItemsMenuMobile from './items-menu-mobile'
import { ModeToggle } from '../mode-toogle'
import { useCart } from '@/hooks/use-cart'

export default function Navbar() {
  const { items } = useCart()
  return (
    <header className='flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-4xl md:max-w-6xl'>
      <Link href={'/'}>
        <h1 className='text-2xl'>
          fluw
          <span className='font-bold text-orange-700'>Coffee</span>
        </h1>
      </Link>
      <nav className='items-center justify-between hidden sm:flex'>
        <MenuList />
      </nav>
      <nav className='flex sm:hidden'>
        <ItemsMenuMobile />
      </nav>
      <div className='flex items-center justify-between gap-2 sm:gap-7'>
        <Link href={'/cart'}>
          {items.length === 0 && (
            <ShoppingCart strokeWidth={1.25} className='cursor-pointer' />
          )}
          {items.length > 0 && (
            <div className='flex gap-1'>
              <BaggageClaim strokeWidth={1.25} className='cursor-pointer' />
              <p>{items.length}</p>
            </div>
          )}
        </Link>
        <Link href={'/loved-products'}>
          <Heart strokeWidth={1.25} className='cursor-pointer' />
        </Link>
        {/* <Link href={'/user'}>
          <User strokeWidth={1.25} className='cursor-pointer' />
        </Link> */}
        <ModeToggle />
      </div>
    </header>
  )
}
