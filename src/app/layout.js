import Head from "next/head";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: {
    template: "%s | its-nate",
    default: "its-nate",
  },
  metadataBase: new URL("https://its-nate.dev"),
  openGraph: {
    title: "its-nate",
    description: "It's me, Nate",
    url: "https://its-nate.dev",
    siteName: "its-nate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "its-nate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
