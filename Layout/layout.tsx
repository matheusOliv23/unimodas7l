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
  
  let today = new Date();
  let year = today.getFullYear();
  return (
    <>
      <main className="container">
        <Navbar handleToggle={handleToggle} />
        <div>{children}</div>
      </main>
      <Footer />
      <div
        style={{
          background: "#2C070C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        @{year} | Todos os Direitos Reservados
      </div>
    </>
  );
}
