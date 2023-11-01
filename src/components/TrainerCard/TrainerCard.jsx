import React, { useRef } from "react";
import { motion } from "framer-motion";

import classes from "./TrainerCard.module.css";
const TrainerCard = ({ image, proffesion, name }) => {
    const videoRef = useRef();
    const handlePlay = async () => {
        if (videoRef.current.paused) {
            await videoRef.current.play();
            videoRef.current.loop = true;
        }
        videoRef.current.play();
    };

    const handlePause = () => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                if (videoRef.current.currentTime <= 0) {
                    videoRef.current.pause();
                    clearInterval(interval);
                } else {
                    videoRef.current.currentTime -= 0.1;
                }
            }
        }, 20);
    };
    return (
        <div className={classes.card}>
            <div
                className={classes.card_image}
                onMouseEnter={handlePlay}
                onMouseLeave={handlePause}
            >
                <motion.video ref={videoRef} src={image} muted />
            </div>
            <div className={classes.info}>
                <h6>{name}</h6>
                <div className={classes.proffesion_icon}>
                    <img src={proffesion.proffesion_image} alt="" />
                </div>
            </div>

            <div className={classes.card_bottom}>
                <p>{proffesion.proffesion_name}</p>
            </div>
        </div>
    );
};

export default TrainerCard;
