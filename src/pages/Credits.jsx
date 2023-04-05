import {React} from "react";

import { motion } from "framer-motion";

import {SiTailwindcss} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {TbBrandFramerMotion} from 'react-icons/tb';

const Credits = () => {
    return(
        <motion.div id="menu-color"
        className="w-full"
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.2}}}
        >
            <div className="max-w-lg mx-auto flex flex-col items-center justify-center">
                <div className="my-10 mx-10">
                    <h1 className="font-bold text-5xl text-center">Disclaimer</h1>
                    <div className="mt-10 max-w-md">
                        <h1 className="text-3xl">Dear Visitor,</h1>
                        <p className="text-xl">
                        Thank you for your interest in Ichiban Sushi. I apologize for any confusion, but please be advised that this website is <span className="font-bold">not</span> a real restaurant website. I created this website for studying purposes only and not for commercial use. <br />
                        Although I do not have a physical location or menu to offer you, I hope that you find the design and functionality of this website informative and useful in your own studies.
                        </p> 
                        <h1 className="text-xl mt-5">
                            Sincerely, <br />
                            Moon Hyuk Kang    
                        </h1>  
                        <h1>PS: I do not own any of the images used in this website. They are free stock photos from <span className="underline"><a href="https://www.pexels.com/api/" target="_blank">Pexels</a></span>, including the ones in the Gallery page.</h1>
                    </div>
                    <div className="mt-10 text-xl">
                        <h1 className="text-3xl text-center font-semibold">DevBlog</h1>
                        <h1 className="text-3xl text-center font-semibold">Making Of Ichiban Sushi</h1>
                        <div className="mt-5">
                            <h1>The base framework I used to develop Ichiban Sushi is React.</h1>
                            <h1>Although React only offer the bare minimum when it comes to developing features, it was designed to be that way as to allow developers to build custom UI components that fit their specific needs.</h1>
                            <h1>The result is that you can do a lot of cool things with React through the use of third-party libraries. Like this smooth animation in the home page with Framer-Motion:</h1>
                            <img className="h-60 sm:h-80 max-w-full rounded-md shadow-lg dark:shadow-black/30 my-5 border-2" src="/animation.gif" alt="animationGif" />
                            <h1>Creating smooth animations in vanilla CSS and Javascript can be tedious and complicated. Framer-Motion not only makes it easy and fast, it also allows you to create the kind of animation you would only expect see on the most high-end of professional websites.</h1>
                        </div>
                    </div>
                    <div className="mt-10 text-xl">
                        <h1>If you passed by the home page before coming here, you might have noticed that the animations play out as they come into view when you scroll down the page.</h1>
                        <h1><span className="italic">"How do I know when my page elements come into view?"</span>, you might reasonably ask. A great library that let me know with ease when my divs come into view is called <span className="underline"> <a href="https://www.npmjs.com/package/react-intersection-observer" target="_blank">react-intersection-observer</a></span>.</h1>
                    </div>
                    <div className="mt-10 text-xl">
                        <h1>Another great tool I used for this project is Tailwind.</h1>
                        <h1>Tailwind allows you to write utility classes as a property directly inside your element tags, meaning you don't have to go back and forth between CSS and HTML files, making styling much easier and more efficient.</h1>
                        <h1 className="mt-2">Some people might argue that this approach causes the HTML tags to become bloated and hard to understand, which is a fair argument.</h1>
                        <h1 className="bg-[#1E1E1E] h-36 sm:h-32 w-full text-white text-lg flex items-center my-5">
                            <code className="px-2">&lt;<span className="text-blue-400">div</span> <span className="text-blue-300">className</span>=&quot;<span className="text-orange-300">h-80 sm:h-50 max-w-full rounded-md shadow-lg dark:shadow-black/30 z-[52]</span>&quot; /&gt;</code>
                        </h1>
                        <h1>However, in Tailwind, the class names are meaningful and you can understand exactly what they do, even after weeks or months without touching the code. The same can hardly be said for the class or id names a developer came up with on the spur of the moment.</h1>
                        <div className="mt-10">
                            I guess that's it for this project. I spent more time I would like to admit on this fairly simple project, but I actually learned a ton. How to consume APIs, how to animate page transitions, styling and debugging.
                            <h1>This is the first of the 4 coding projects I planned for the first semester of 2023. When you visit the other three subsequent projects, I hope they are much better than this one. I'll see you then!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>


    )
}

export default Credits;