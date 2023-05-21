import "@styles/globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import VideoBackground from "@components/VideoBackground";

import Providers from "./Redux/provider";

// ** components
import Nav from "@components/Nav/Nav";
import Footer from "@components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thời tiết hum nay",
  description: "Ứng dụng xem thời tiết hum nay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className=''></div> */}
        <Providers>
          <main className="">
            <div className="fixed top-0 bottom-0 left-0 w-full h-full">
              {/* create a compoent render dynamic Image */}
              {/*  */}
              <VideoBackground />
            </div>
            <Nav />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
