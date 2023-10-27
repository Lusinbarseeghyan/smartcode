import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMain from "../../components/HomeMain/HomeMain";
import HomeSection from "../../components/HomeSection/HomeSection";

import classes from './Home.module.css'
const Home = () => {
    const leftAnimation = {
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

    const rightAnimation = {
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

    const topAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };
    return (
        <div className={classes.home}>
            <HomeHeader
                leftAnimation={leftAnimation}
                rightAnimation={rightAnimation}
            />
            <HomeMain
                topAnimation={topAnimation}
                leftAnimation={leftAnimation}
                rightAnimation={rightAnimation}
            />
            <HomeSection
                topAnimation={topAnimation}
                leftAnimation={leftAnimation}
                rightAnimation={rightAnimation}
            />
        </div>
    );
};

export default Home;
