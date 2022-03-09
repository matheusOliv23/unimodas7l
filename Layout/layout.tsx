import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Navbar handleToggle={handleToggle} /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
