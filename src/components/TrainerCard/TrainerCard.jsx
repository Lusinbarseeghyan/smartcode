import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import classes from "./TrainerCard.module.css";
const TrainerCard = ({ image, proffesion, name }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const videoRef = useRef();

    useEffect(() => {
        function func() {
            if (videoRef.current) {
                if (videoRef.current.currentTime >= videoRef.current.duration) {
                    videoRef.current.currentTime = videoRef.current.duration;
                    videoRef.current.pause();
                } else {
                    videoRef.current.currentTime += 0.1;
                }
            }
        }

        function func2() {
            if (videoRef.current) {
                if (videoRef.current.currentTime <= 0) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.pause();
                } else {
                    videoRef.current.currentTime -= 0.1;
                }
            }
        }
        if (isMouseOver) {
            setInterval(func, 20);
        } else {
            clearInterval(func);
            setInterval(func2, 20);
            setTimeout(() => {
                clearInterval(func2);
            }, 1000);
        }
    }, [isMouseOver]);

    return (
        <div className={classes.card}>
            <div
                className={classes.card_image}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseOut={() => setIsMouseOver(false)}
            >
                <video ref={videoRef} src={image} />
            </div>
            <div className={classes.card_bottom}>
                <h6>{name}</h6>
                <p>{proffesion.proffesion_name}</p>
            </div>
            <div className={classes.card_icon}>
                <img src={proffesion.proffesion_image} alt="" />
            </div>
        </div>
    );
};

export default TrainerCard;
