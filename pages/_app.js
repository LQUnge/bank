import "../styles/globals.css";

import Head from "next/head";

// font:
import { Inter } from "@next/font/google";
const poppins = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Head>
        <meta name="description" content="CYBERIAL portfolio page" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
