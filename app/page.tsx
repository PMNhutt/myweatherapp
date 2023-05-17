import Image from "next/image";

// ** components
import Main from "@components/Main/Main";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image
        src="/assets/images/party-cloudy.webp"
        fill
        className="object-cover"
        quality={100}
        alt="background-image"
      />

      {/* main content */}
      <div className="relative z-10">
        <Main />
      </div>
    </main>
  );
}
