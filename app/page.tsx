import Image from "next/image";

// ** components
import Main from "@components/Main/Main";
import Side from "@components/Side/Side";

export default function Home() {
  return (
    <main className="pt-24">
      <div className='fixed top-0 bottom-0 left-0 w-full h-full'>
        <Image
          src="/assets/images/Moderate-or-heavy-rain-with-thunder.webp"
          fill
          className="object-cover"
          quality={100}
          alt="background-image"
        />
      </div>

      <div className="main" />

      {/* main content */}
      <div className="relative z-10 px-24">
        <Main />
        <Side />
      </div>
    </main>
  );
}
