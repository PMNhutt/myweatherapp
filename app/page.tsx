import Image from "next/image";

// ** components
import Main from "@components/Main/Main";
import Side from "@components/Side/Side";

export default function Home() {
  return (
    <main className="pt-24">
      <div className="main" />

      {/* main content */}
      <div className="flex-center">
        <div className="container relative z-10 sm:px-24 px-6">
          <Main />
          <Side />
        </div>
      </div>
    </main>
  );
}
