import "@styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "@context/AuthContext";
import { MentorshipContextProvider } from "@context/MentorshipContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <MentorshipContextProvider>
        <Component {...pageProps} />
      </MentorshipContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
