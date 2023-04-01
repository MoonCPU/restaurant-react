import React from "react";

import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion";
import { Parallax } from 'react-parallax';

const Home = () => {
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    const [ref2, inView2] = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    
    const [ref3, inView3] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [ref4, inView4] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const variants = {
        visible: {
          opacity: 1,
          y: 50,
        },
        hidden: {
          opacity: 0,
          y: 0,
        },
    };

    const variants2 = {
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: 50,
        },
    };

    const variants3 = {
        visible: {
          opacity: 1,
          x: 0,
        },
        hidden: {
          opacity: 0,
          x: 50,
        },
    };

    const variants4 = {
        visible: {
          opacity: 1,
          x: 50,
        },
        hidden: {
          opacity: 0,
          x: 0,
        },
    };

    return(
        <motion.div 
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <div className="h-72 sm:h-[500px] w-full">
                <div className="sm:h-full">
                    <video className='min-w-full h-full object-cover aspect-video' autoPlay loop muted>
                        <source src="video1.mp4" type='video/mp4' />
                    </video>                
                </div>
            </div>

                <div className="max-w-2xl mx-auto">
                    <div className="mt-16 mb-10 text-center flex flex-col items-center justify-center px-5">
                        <h1 className="text-4xl">Over 20 years of Success</h1>
                        <hr className="w-[50%] mt-4 mb-6 border border-black" />
                        <h1 className="text-xl">
                            Welcome to <span className="text-2xl">Ichiban Sushi</span>, where we have been serving delicious and authentic Japanese cuisine for over 20 years.
                        </h1>
                    </div>    
                    <div className="flex items-center justify-center">
                        <h1 className="mt-4 text-4xl font-bold text-[#D80D05] serpentine">寿司</h1>                          
                    </div>  
                </div>

                <article id="article-4">
                    <motion.div 
                    ref={ref4}
                    initial="hidden"
                    animate={inView4 ? 'visible' : 'hidden'}
                    variants={variants4}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl mx-auto my-10 sm:my-36">
                        <div className="flex items-center justify-center">
                            <h1 className="text-4xl">About us / 私たちについて</h1>
                        </div>
                    </motion.div>                     
                </article>

                <article id="article-1">
                    <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto mt-8 sm:mt-10 flex flex-col sm:flex-row">
                        <div className="sm:w-[50%] mx-6 sm:mx-3 flex">
                            <div className="flex flex-row items-center justify-center">
                                <div className="pt-[50px]">
                                    <h1 id="kanji" className="text-3xl text-[#0F0C0A]">駄津緖 <span className="text-[#D80D05]">獅同</span></h1>    
                                </div>
                                
                                <div className="px-2">
                                    <h1 className="text-5xl font-medium border-b-2">MEET THE CHEF</h1>
                                    <h1 className="text-4xl font-medium">Tatsuo Shido</h1>    
                                    <p className="text-lg leading-6">Our sushi master with over 15 years of experience crafting exquisite Japanese cuisine takes great pride in sourcing the freshest ingredients, from the finest cuts of fish to the highest quality rice, to ensure that every piece of sushi is a culinary masterpiece.</p>  
                            
                                </div>                      
                            </div>
                        </div>
                        <div className="sm:w-[50%] mt-8 mx-4 sm:mt-0 sm:mx-0 sm:pl-4">
                            <img className="object-contain h-80 max-w-full rounded-full shadow-lg dark:shadow-black/30 mx-auto" src="/chef2.png" alt="chef" />
                        </div>
                    </motion.div>                     
                </article>

                <article id="article-2">
                    <motion.div 
                    ref={ref2}
                    initial="hidden"
                    animate={inView2 ? 'visible' : 'hidden'}
                    variants={variants2}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl mx-auto mt-28 mb-20 sm:my-36">
                        <div className="flex items-center justify-center">
                            <h1 className="text-4xl">Service Hours</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col flex-1 px-5 items-center justify-center mt-6">
                                <h1 className="text-2xl mb-3">IN PERSON</h1>
                                <ul className="text-center text-lg">
                                    <li>Monday: 17:00 to 23:00</li>
                                    <li>Tuesday to Friday: 11:30 to 23:00</li>
                                    <li>Saturday: 11:30 to 22:00</li>
                                    <li>Sunday: 11:30 to 20:00</li>
                                </ul>
                            </div>
                            <div className="mt-6 sm:mt-[4rem] sm:rotate-180">
                                <hr class="border border-gray-300 w-[50%] mx-auto sm:h-28"></hr>                                
                            </div>
                            <div className="flex flex-col flex-1 px-5">
                                <div className="text-center items-center justify-center mt-6">
                                    <h1 className="text-2xl mb-3">DELIVERY</h1>                                    
                                </div>
                                <ul className="text-center text-lg">
                                    <li>Tuesday to Friday: 11:00 to 22:00</li>
                                    <li>Saturday: 11:00 to 21:00</li>
                                    <li>Sunday: 11:00 to 19:00</li>
                                </ul>
                            </div>                            
                        </div>
                    </motion.div>                     
                </article>

                <article id="article-3">
                    <motion.div 
                    ref={ref3}
                    initial="hidden"
                    animate={inView3 ? 'visible' : 'hidden'}
                    variants={variants3}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto my-10 sm:my-36">
                        <div className="flex items-center justify-center">
                            <h1 className="text-4xl">Units</h1>
                        </div>
                    </motion.div>                     
                </article>


        </motion.div>            
    )
}

export default Home;