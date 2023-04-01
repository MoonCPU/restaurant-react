import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Menu from "../pages/Menu";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" index element={<Home />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="menu" element={<Menu />} />
            </Routes>            
        </AnimatePresence>
    )
}

export default AnimatedRoutes;