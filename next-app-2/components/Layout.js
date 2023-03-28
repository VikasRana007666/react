import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}
