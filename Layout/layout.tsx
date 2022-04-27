import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import FooterLayout from "../components/Footer/FooterLayout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface ILayout {
  children: ReactNode;
  handleToggle: any;
}

export default function Layout({ children, handleToggle }: ILayout) {
  return (
    <>
      <main className="container">
        <Navbar handleToggle={handleToggle} />
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}
