import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMain from "../../components/HomeMain/HomeMain";
import HomeSection from "../../components/HomeSection/HomeSection";

import classes from "./Home.module.css";
const Home = () => {
    return (
        <div className={`mb-footer ${classes.home}`}>
            <HomeHeader />
            <HomeMain />
            <HomeSection />
        </div>
    );
};

export default Home;
