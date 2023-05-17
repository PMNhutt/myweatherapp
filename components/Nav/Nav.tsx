import React from 'react'
import Image from 'next/image' 

const Nav = () => {
  return (
    <div>
      {/* logo */}
      <div className='flex gap-2 flex-center'>
      <Image
          alt="logo"
          width={40}
          height={40}
          className="object-contain"
          src="/assets/images/logo.png"
        />

        <p className="logo_text ">Thời tiết hum nay</p>
      </div>
    </div>
  )
}

export default Nav