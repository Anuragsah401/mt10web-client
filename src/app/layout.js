import "./globals.css";

import Footer from "components/UI/Footer/Footer";
import Header from "components/UI/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
