import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface ILayout {
  children: ReactNode;
  handleToggle: any;
}

export default function Layout({ children, handleToggle }: ILayout) {
  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <div>{children}</div>

      <Footer />
    </>
  );
}
