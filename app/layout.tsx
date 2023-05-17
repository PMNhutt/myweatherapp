import "@styles/globals.css";
import { Inter } from "next/font/google";

// ** components
import Nav from "@components/Nav/Nav";

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
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
