import { Footer, Navbar } from "@/components/elements";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-white">
      <Navbar />
      <main className={`bg-[#1A1B2F] min-h-screen`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
