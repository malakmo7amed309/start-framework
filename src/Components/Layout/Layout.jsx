import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Navbar";


import { ThemeProvider } from "../Theme/ThemeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <Nav />

      <Outlet />
      <Footer />

    </ThemeProvider>
  )
}
