import React from "react";

import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion";

import {AiFillStar} from 'react-icons/ai';
import {SiIfood, SiUbereats} from 'react-icons/si';

const Home = () => {
    const [ref, inView] = useInView({
        threshold: 0.7,
        triggerOnce: true,
    });

    const [ref2, inView2] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    
    const [ref3, inView3] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const [ref4, inView4] = useInView({
        threshold: 0.8,
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
          x: 50,
        },
        hidden: {
          opacity: 0,
          x: 0,
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
        exit={{x: window.innerWidth, transition: {duration: 0.2}}}
        >
            <div className="h-72 sm:h-[560px] w-full">
                <div className="sm:h-full">
                    <video className='min-w-full h-full object-cover aspect-video' autoPlay loop muted>
                        <source src="video1.mp4" type='video/mp4' />
                    </video>                
                </div>
            </div>

                <div className="max-w-2xl mx-auto">
                    <div className="mt-10 mb-24 lg:my-36 text-center flex flex-col items-center justify-center px-5">
                        <h1 className="text-4xl">Over 20 years of Success</h1>
                        <hr className="w-[50%] mt-4 mb-6 border border-black" />
                        <h1 className="text-xl">
                            Welcome to <span className="text-2xl">Ichiban Sushi</span>, where we have been serving delicious and authentic Japanese cuisine for over 20 years.
                        </h1>
                    </div>    
                </div>
                <div className="h-full bg-[#1E1E1E] py-20 text-white">
                    <motion.div 
                    ref={ref4}
                    initial="hidden"
                    animate={inView4 ? 'visible' : 'hidden'}
                    variants={variants4}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto relative left-[-50px]"
                    >
                        <div className="flex flex-col items-center justify-center mx-8">
                            <h1 className="text-[1.5rem] font-semibold text-red-600 serpentine">私たちについて / About Us</h1>
                            <div className="flex flex-row my-2">
                              <AiFillStar size={20} color="#ffcd3c" />   
                              <AiFillStar size={20} color="#ffcd3c" />   
                              <AiFillStar size={20} color="#ffcd3c" />   
                              <AiFillStar size={20} color="#ffcd3c" />   
                              <AiFillStar size={20} color="#ffcd3c" />   
                            </div>
                           
                            <h1 className="font-[Asian] text-center sm:text-left text-3xl mt-2 text-gray-200">Top-rated on Trip Advisor and Google:</h1>
                            <h1 className="font-[Asian] text-center sm:text-left text-3xl mb-3 text-gray-200">
                                Our Commitment to Excellence
                            </h1>
                            <h1 className="max-w-lg text-lg text-left">
                            Since 1997, we have been committed to providing the highest quality ingredients to our valued customers. Our efforts paid off; Ichiban Sushi has consistently earned some of the highest ratings on both Trip Advisor and Google reviews. We are grateful for the trust and loyalty of our customers, and we hope to continue to provide an exceptional dining experience for many years to come.
                            </h1>
                        </div>    
                    </motion.div>

                    <article id="article-1">
                        <motion.div 
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl mx-auto mt-16 flex flex-col sm:flex-row relative bottom-[50px]">
                            <div className="sm:w-[50%] mx-6 sm:mx-3 flex">
                                <div className="flex flex-row items-center justify-center">
                                    <div className="pt-[80px] sm:pt-[51px]">
                                        <h1 id="kanji" className="serpentine text-3xl text-[#f40009]">駄津緖 獅同</h1>    
                                    </div>
                                    <div className="px-2 max-w-xs">
                                        <h1 className="text-4xl sm:text-5xl font-medium border-b-2 serpentine">MEET THE CHEF</h1>
                                        <h1 className="text-3xl sm:text-4xl font-medium">Tatsuo Shido</h1>    
                                        <p className="text-lg leading-6">Our sushi master with over 15 years of experience crafting exquisite Japanese cuisine takes great pride in sourcing the freshest ingredients, from the finest cuts of fish to the highest quality rice, to ensure that every piece of sushi is a culinary masterpiece.</p>  
                                    </div>                      
                                </div>
                            </div>
                            <div className="sm:w-[50%] mt-10 sm:my-auto mx-4 sm:mt-0 sm:mx-0 sm:pl-4">
                                <img className="h-60 sm:h-80 max-w-full rounded-full shadow-lg dark:shadow-black/30 mx-auto" src="/chef2.png" alt="chef" />
                            </div>
                        </motion.div>                     
                    </article>
                </div>


                <article id="article-2">
                    <motion.div 
                    ref={ref2}
                    initial="hidden"
                    animate={inView2 ? 'visible' : 'hidden'}
                    variants={variants2}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl mx-auto mt-20 mb-16 sm:my-28">
                        <div className="flex items-center justify-center">
                            <h1 className="text-4xl">Service Hours</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col flex-1 px-5 items-center justify-center mt-8">
                                <h1 className="text-2xl mb-3">IN PERSON</h1>
                                <ul className="text-center text-lg">
                                    <li>Monday: 17:00 to 23:00</li>
                                    <li>Tuesday to Friday: 11:30 to 23:00</li>
                                    <li>Saturday: 11:30 to 22:00</li>
                                    <li>Sunday: 11:30 to 20:00</li>
                                </ul>
                            </div>
                            <div className="mt-6 sm:mt-[4rem] sm:rotate-180">
                                <hr className="border border-gray-300 w-[50%] mx-auto sm:h-28"></hr>                                
                            </div>
                            <div className="flex flex-col flex-1 px-5">
                                <div className="text-center items-center justify-center mt-8 flex flex-row">
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
                    className="max-w-5xl mx-auto mb-20 relative right-[50px] px-5">
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-[50%] text-center sm:text-left flex-col text-xl">
                                <h1 className="text-xl text-red-600">ぜひご来店ください</h1>
                                <h1 className="text-5xl sm:text-6xl">Come Visit Us!</h1>
                                <div className="text-2xl mb-5">
                                    <h1 className="mt-3">555 East Main Street, Los Angeles</h1>
                                    <h1>+1 (213) 555-1234</h1>
                                    <h1>info@ichibansushila.com</h1>                                         
                                </div>
                                <div className="flex flex-row text-2xl sm:mt-14 mb-8 sm:mb-0 items-center justify-center sm:justify-start">
                                    <SiUbereats size={50} color="#3FC060" className="mr-5" />
                                    <SiIfood size={50} color="#e32929" className="mr-6" />   
                                    <img className="h-11 max-w-full" src="/rappi.png" alt="rappi logo" />  
                                </div>

                            </div>
                            <div className="sm:w-[50%] flex items-end justify-end relative my-3 sm:my-0">
                                <img className="h-80 max-w-full rounded-md shadow-lg dark:shadow-black/30 z-[52]" src="/restaurant.jpg" alt="restaurant" />
                            </div>
                        </div>
                    </motion.div>                     
                </article>


        </motion.div>            
    )
}

export default Home;