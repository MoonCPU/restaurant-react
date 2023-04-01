import {React, useState, lazy} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useQuery } from "react-query";
import { motion } from "framer-motion";

import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

import Loading from "../components/Loading";
import Error from "../components/Error";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState();
    
    const { data, isLoading, error } = useQuery("images", () => {
        return axios
        .get("https://api.pexels.com/v1/search?query=sushi&per_page=19&page=3", {
            headers: {
                Authorization: apiKey,
            },
        })
        .then(response => response.data);
    }, {
        retry: 3,
        refetchOnWindowFocus: false
    });

    //will wait for the data do get fetched before doing anything else
    //without this, data.photos wouldn't work because the data hasn't been fetched yet
    if (isLoading) {
        return(
            <div>
                <Loading />
            </div>
        )
    }

    if (error) {
        return(
            <div>
                <Error />
            </div>
        )
    }

    return(
        <motion.div className="h-full max-w-5xl mx-auto"
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}>
            <div>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="0.5rem">
                    {data.photos.map((photo) => (
                    <div key={photo.id} className="m-3 flex items-center justify-center ">
                        <img className="rounded-md shadow-lg dark:shadow-black/30 cursor-pointer" 
                        loading="lazy"
                        src={photo.src.medium} 
                        alt={photo.photographer} 
                        onClick={() => setSelectedImage(photo.src.large)} />
                    </div>
                    ))}
                    {/* if clicked on the image, expand it */}
                    {selectedImage && (
                    <div className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-90 flex items-center justify-center z-[150]" onClick={() => setSelectedImage(null)}>
                        <img 
                        className="max-h-full max-w-full shadow-lg dark:shadow-black/30 rounded-md"
                        loading="lazy" 
                        src={selectedImage} 
                        alt="Expanded image" 
                        onClick={() => setSelectedImage(null)} 
                        />
                    </div>
                    )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
        </motion.div>
    )
}

export default Gallery;