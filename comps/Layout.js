import React from "react";
import Navbar from "../comps/Navbar";
import Footer from "../comps/footer";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
