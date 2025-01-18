import Link from 'next/link'
import React from 'react'

// type Props = {}

const links = [
  {
    name: 'Event Detail',
    href: '#event-detail'

  },
  {
    name: 'Menu',
    href: '#menu'
  },
  {
    name: 'Pricing',
    href: '#pricing'
  },
  {
    name: 'Contact Us',
    href: '#contact-us'
  }
]

const Navbar = () => {
  return (
    <nav className='absolute px-10 py-5 bg-black/50 top-0 z-30 w-full flex items-center justify-between '>
      <aside className='flex items-center gap-7'>
        {
          links.map((link, index) => {
            const halfLength = links.length / 2
            if (index < halfLength) {
              return (
                <Link key={index} href={link.href}>
                  <span style={{fontFamily: "var(--font-noto-sans)"}} className='text-white text-lg font-bold '>{link.name}</span>
                </Link>
              )
            }
          })
        }
      </aside>
      <aside className='text-white'>Logo</aside>
      <aside className='flex items-center gap-7'>
        {
          links.map((link, index) => {
            const halfLength = links.length / 2
            if (index >= halfLength) {
              return (
                <Link key={index} href={link.href}>
                  <span style={{fontFamily: "var(--font-noto-sans)"}} className='text-white text-lg font-bold '>{link.name}</span>
                </Link>
              )
            }
          })
        }
      </aside>
      {/* <span className='text-white'>Hello</span> */}
    </nav>
  )
}

export default Navbar