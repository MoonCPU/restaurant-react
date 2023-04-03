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



    return(
        <motion.div id="menu-color"
        className="w-full"
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.2}}}
        >
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
                <div className="my-10 mx-8">
                    <h1 className="font-bold text-5xl text-center">Disclaimer</h1>
                    <div className="mt-10 max-w-lg">
                        <h1 className="text-3xl">Dear Visitor,</h1>
                        <p className="text-xl">
                        Thank you for your interest in Ichiban Sushi. I apologize for any confusion, but please be advised that this website is <span className="font-bold">not</span> a real restaurant website. I created this website for studying purposes only and not for commercial use. <br />
                        Although I do not have a physical location or menu to offer you, I hope that you find the design and functionality of this website informative and useful in your own studies.
                        </p> 
                        <h1 className="text-xl mt-5">
                            Sincerely, <br />
                            Moon Hyuk Kang    
                        </h1>  
                    </div>
                    <div className="mt-10 text-xl">
                        <h1 className="text-3xl text-center font-semibold">DevBlog</h1>
                        <div className="mt-5">
                            <h1>The base framework I used to develop Ichiban Sushi is React.</h1>
                            <h1>Although React only offer the bare minimum when it comes to developing features, it was designed to be that way as to allow developers to build custom UI components that fit their specific needs.</h1>
                            <h1>The result is that you can do a lot of cool things with React through the use of third-party libraries. Like this smooth animation in the home page with Framer-Motion:</h1>
                            <img className="h-80 max-w-full rounded-md shadow-lg dark:shadow-black/30 my-5 border-2" src="/animation.gif" alt="animationGif" />
                            <h1>Creating smooth animations in vanilla CSS and Javascript can be tedious and complicated. React-Framer not only makes it easy and fast, it also allows you to create the kind of animation you would only expect see on the most high-end of professional websites.</h1>
                        </div>
                    </div>
                    <div className="mt-10 text-xl">
                        <h1>If you passed by the home page before coming here, you might have noticed that the animations play out as they come into view when you scroll down the page.</h1>
                        <h1><span className="italic">"How do I know when my page elements come into view?"</span>, you might reasonably ask. Another great library that let me know when my divs come into view is called <span className="underline"> <a href="https://www.npmjs.com/package/react-intersection-observer" target="_blank">react-intersection-observer</a></span>.</h1>
                        <h1>Despite the janky name, the features it provides are invaluable. In vanilla Javascript, you would have to write this:</h1>
                        <div className="my-6">
                            <AceEditor
                            mode="javascript"
                            theme="monokai"
                            name="code-editor"
                            readOnly={true}
                            value={code1}
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ useWorker: false, fontSize: 13 }}
                            />                            
                        </div>
                        <h1>Using react-intersection, you only have to write this:</h1>
                        <div className="my-6">
                            <AceEditor
                            mode="javascript"
                            theme="monokai"
                            name="code-editor"
                            readOnly={true}
                            value={code2}
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ useWorker: false, fontSize: 13 }}
                            style={{ width: '500px', height: '100px' }}
                            />                            
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>


    )
}

export default Credits;