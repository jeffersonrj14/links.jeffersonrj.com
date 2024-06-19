import { AppProps } from "next/app";
import DefaultLayout from "@/components/layout/DefaultLayout";

import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
