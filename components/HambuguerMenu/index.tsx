'use client'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const HamburguerMenu = () => (
  <nav className="">
    <button
      style={{ animationDelay: '3s' }}
      className="fade-in-top-bottom mb-2"
      onClick={() => {
        const menu = document.querySelector('.mobile-menu')
        menu && menu.classList.toggle('hidden')
        menu && menu.classList.toggle('block')
      }}
      type="button"
    >
      <GiHamburgerMenu className="inline w-8 h-8 rounded-sm hover:bg-gray-400 sm:hidden" />
    </button>
    <ul
      className="mobile-menu hidden z-10 flex-col gap-12 absolute top-16 right-16 p-5 bg-white border border-gray-400 rounded-md sm:bg-transparent sm:p-0 sm:border-0 sm:flex sm:flex-row sm:static"
      id="navbar-default"
    >
      <li className="fade-in-top-bottom mb-2">
        <Link href="/">
          <p className="text-black md:text-white">Home</p>
        </Link>
      </li>
      <li className="fade-in-top-bottom mb-2">
        <Link href="/blog">
          <p className="text-black md:text-white">Blog</p>
        </Link>
      </li>
      <li className="fade-in-top-bottom">
        <Link href="/">
          <p className="text-black md:text-white">Portifolio</p>
        </Link>
      </li>
    </ul>
  </nav>
)

export { HamburguerMenu }
