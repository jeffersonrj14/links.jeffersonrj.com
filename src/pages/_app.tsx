import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "@/components/layout/DefaultLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AnimatePresence>
  );
}

export default MyApp;
