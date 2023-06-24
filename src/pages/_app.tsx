import { Footer, Header, Navbar } from "@/components/elements";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="text-white">
        <Navbar />
        <main className={`bg-[#1A1B2F] min-h-screen overflow-x-hidden`}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
