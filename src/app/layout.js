import "materialize-css/dist/css/materialize.css";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import { Ubuntu } from "next/font/google";

export const metadata = {
  title: {
    template: "%s | its-nate",
    default: "its-nate",
  },
};

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "block",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href={ubuntu.style.fontFamily} rel="stylesheet" />
      </head>
      <body className={ubuntu.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
