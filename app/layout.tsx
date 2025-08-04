import {Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// const outfit = Outfit({
//   variable: "--font-outfit",
//   subsets: ["latin"],
// });
//

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${poppins.variable} antialiased`}
    >
    <div>
      <Header/>

      {/* Main Content */}
      <main>
        {children}
      </main>

      <Footer/>
    </div>
    </body>
    </html>
  );
}
