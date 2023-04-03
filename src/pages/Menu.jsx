import React from "react";

import { motion } from "framer-motion";

const Menu = () => {
    return(
        <motion.div id="menu-color"
        className="h-screen w-full"
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.2}}}
        >

        </motion.div>


    )
}

export default Menu;