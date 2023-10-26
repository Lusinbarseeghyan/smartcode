import { motion } from "framer-motion";
import bgVideo from "../../assets/videos/banner.mp4";
import FormBox from "../../Components/FormBox/FormBox";
import HomeSection from "../../Components/HomeSection/HomeSection";

import classes from "./Home.module.css";
const Home = () => {
    const textAnimation = {
        hidden: {
            x: -200,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.5 },
        }),
    };

    const formAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    return (
        <div id="home">
            <motion.header
                className={classes.home_header}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
            >
                <div className={classes.home_bg}>
                    <video src={bgVideo} autoPlay muted loop></video>
                </div>
                <div className={`container ${classes.header_content}`}>
                    <div className={classes.header_text}>
                        <motion.h1
                            variants={textAnimation}
                            custom={1}
                            className={classes.header_title}
                        >
                            Smart Code
                        </motion.h1>
                        <motion.p
                            variants={textAnimation}
                            custom={2}
                            className={classes.header_intro}
                        >
                            <span>Սովորի՛ր</span> ծրագրավորում <br />
                            <span>Դարձի՛ր</span> պահանջված մասնագետ
                        </motion.p>
                        <motion.p
                            variants={textAnimation}
                            custom={3}
                            className={classes.header_intro}
                        >
                            Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված
                            աշխատանք։
                        </motion.p>
                    </div>
                    <motion.div
                        className={classes.header_form}
                        variants={formAnimation}
                        custom={4}
                    >
                        <FormBox />
                    </motion.div>
                </div>
            </motion.header>
            <HomeSection textAnimation={textAnimation} />
            <main className={classes.main}>
                <div className={classes.main_bg}></div>
            </main>
        </div>
    );
};

export default Home;
