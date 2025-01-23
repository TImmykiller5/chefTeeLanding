import Image from 'next/image'
import React from 'react'

// type Props = {}

const Footer = () => {
  return (
    <footer
    style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full text-white  md:px-20 px-4 py-10  pb-20 flex flex-col  relative bg-black"
    >
      <div className="flex items-center md:items-start flex-col md:flex-row md:justify-between gap-4">
      <div className='flex flex-col items-center md:items-start gap-4'>
        <Image width={80} height={80} src="/images/logo.png" alt="" />
        <span className="text-white text-2xl font-semibold">
          Chef{" "}
          <span className="text-red-700">Tees</span> Pot
        </span>
      </div>
      <div className='md:self-end'>
        <span className="text-white text-ld font-semibold">
        © {new Date().getFullYear()} Ife by Chef Tee. All rights reserved.
        </span>
      </div>
      </div>
    </footer>
  )
}

export default Footer