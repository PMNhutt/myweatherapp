import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="fixed w-full z-20">
      {/* logo */}
      <div className="flex-center nav">
        <div className="container items-center flex gap-2 sm:px-24 px-6 py-3">
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
    </nav>
  );
};

export default Nav;
