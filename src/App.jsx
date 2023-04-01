import {React, lazy} from "react"
import { BrowserRouter } from "react-router-dom";

//lazy loading to improve performance
const Navbar = lazy(() => import("./components/Navbar"));
const AnimatedRoutes = lazy(() => import("./components/AnimatedRoutes"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}