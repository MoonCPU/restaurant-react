import {React} from "react";

import { motion } from "framer-motion";

import {SiTailwindcss} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {TbBrandFramerMotion} from 'react-icons/tb';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';

const Credits = () => {
    const code1 = `
function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var handler = onVisibilityChange(el, function() {
    /* Your code go here */
});

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false);
    addEventListener('load', handler, false);
    addEventListener('scroll', handler, false);
    addEventListener('resize', handler, false);
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler); 
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
}        
    `;

    const code2 = `
const [ref, inView] = useInView({
    threshold: 1,
}); 
    `;

    const code3 = `
#my_div {
    display: flex;
    align-items: center;
    justify-content: center;
}
    `;

    const code4 = `
<div className="flex items-center justify-center"></div>
    `;

    const code5 = `
    <div className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-90 flex items-center justify-center z-[150]"</div>        
    `;


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
                            <img className="h-80 max-w-full rounded-md shadow-lg dark:shadow-black/30 my-5 border-2" src="/animation.gif" alt="animationGif" />
                            <h1>Creating smooth animations in vanilla CSS and Javascript can be tedious and complicated. Framer-Motion not only makes it easy and fast, it also allows you to create the kind of animation you would only expect see on the most high-end of professional websites.</h1>
                        </div>
                    </div>
                    <div className="mt-10 text-xl">
                        <h1>If you passed by the home page before coming here, you might have noticed that the animations play out as they come into view when you scroll down the page.</h1>
                        <h1><span className="italic">"How do I know when my page elements come into view?"</span>, you might reasonably ask. Another great library that let me know when my divs come into view is called <span className="underline"> <a href="https://www.npmjs.com/package/react-intersection-observer" target="_blank">react-intersection-observer</a></span>.</h1>
                        <h1>Despite the janky name, the features it provides are invaluable. In vanilla Javascript, you would have to write this:</h1>
                        <div className="m-6">
                            <AceEditor
                            mode="javascript"
                            theme="monokai"
                            name="code-editor"
                            readOnly={true}
                            value={code1}
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ useWorker: false, fontSize: 13 }}
                            style={{ width: '400px', height: '455px' }}
                            />                            
                        </div>
                        <h1>Using react-intersection, you only have to write this:</h1>
                        <div className="m-6">
                            <AceEditor
                            mode="javascript"
                            theme="monokai"
                            name="code-editor"
                            readOnly={true}
                            value={code2}
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ useWorker: false, fontSize: 13 }}
                            style={{ width: '400px', height: '100px' }}
                            />                            
                        </div>
                        <h1>Yep, that's it. No catch. In three lines, you can tell when your element on the page is in viewport or not. And before you ask, the code editors on web you just saw are implemented by yet another libary, <span className="underline"> <a href="https://www.npmjs.com/package/react-ace" target="_blank">react-ace</a></span>.</h1>
                    </div>
                    <div className="mt-10 text-xl">
                        <h1>But that's enough about React and its ever-growing army of very specific, but highly useful packages. Let's address the elephant in the room: the CSS.</h1>
                        <img className="h-72 max-w-full rounded-md shadow-lg dark:shadow-black/30 z-[52] mx-auto my-5" src="/css.jpg" alt="css_is_awesome" />                        
                        <h1>This website has 3 pages and 5 components. So even though there should be 8 css files for each page and component, only one file called "index.css" is used for general styling like background color and text shadow. This is thanks to the use of the Tailwind CSS framework.</h1>
                        <h1 className="mt-10">In Tailwind, styles are represented by class names. So insted of coding this:</h1>
                        <div className="m-6">
                            <AceEditor
                            mode="javascript"
                            theme="monokai"
                            name="code-editor"
                            readOnly={true}
                            value={code3}
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ useWorker: false, fontSize: 13 }}
                            style={{ width: '400px', height: '100px' }}
                            />                            
                        </div>
                        <h1>You would code this:</h1>
                        <div className="m-6">
                            <AceEditor
                            mode="javascript"
                            theme="monokai"
                            name="code-editor"
                            readOnly={true}
                            value={code4}
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ useWorker: false, fontSize: 13 }}
                            style={{ width: '400px', height: '50px' }}
                            />                            
                        </div>
                        <h1>With Tailwind, you don't have to go back and forth between CSS and HTML files, making styling much easier and more efficient</h1>
                        <h1 className="mt-2">Some people might argue that this approach causes the HTML tags to become bloated and hard to read, which it's a valid argument.</h1>
                        <div className="m-6">
                            <AceEditor
                                mode="javascript"
                                theme="monokai"
                                name="code-editor"
                                readOnly={true}
                                value={code5}
                                editorProps={{ $blockScrolling: true }}
                                setOptions={{ useWorker: false, fontSize: 13 }}
                                style={{ width: '400px', height: '60px' }}
                                />                                
                        </div>
                        <h1>But it still beats having to deal with several different files with arbitrary identificator names for dozens of elements in your website. In Tailwind, the names are meaningful and you know exactly what they do, even after weeks or months without touching the code. Can't say the same, however, for the class or id names I came up on the spur of the moment.</h1>
                        <div className="mt-10">
                            I guess that's it for this project. I spent more time I would like to admit on this fairly simple project, but I actually learned a ton. How to consume APIs, how to animate page transitions, styling and debugging.
                            <h1>This is the first of the 4 coding projects I planned for the first semester of 2023. When you visit the other three subsequent projects, I hope they are much better than this one. Until then, see you later!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>


    )
}

export default Credits;