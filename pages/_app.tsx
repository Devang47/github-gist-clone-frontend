import { Auth0Provider } from "@auth0/auth0-react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={
        process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ||
        "https://dev-eaxtjvb0.us.auth0.com"
      }
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
      }}
    >
      <Component {...pageProps} />;
    </Auth0Provider>
  );
}

export default MyApp;
