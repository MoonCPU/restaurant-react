import React from "react";

import { motion } from "framer-motion";

const Menu = () => {
    return(
        <motion.div className="h-72 sm:h-screen w-full"
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >

        </motion.div>


    )
}

export default Menu;