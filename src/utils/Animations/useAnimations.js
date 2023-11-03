import { filter } from "lodash";

const useAnimations = () => {
    const leftAnimation = {
        hidden: {
            x: -200,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        }),
    };

    const leftAnimationVariant = (custom) => {
        return {
            variants: leftAnimation,
            custom,
        };
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

    const rightAnimationVariant = (custom) => {
        return {
            variants: rightAnimation,
            custom,
        };
    };

    const topAnimation = {
        hidden: {
            y: -200,
            opacity: 0,
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,

            transition: { delay: custom * 0.2 },
        }),
    };

    const topAnimationVariant = (custom) => {
        return {
            variants: topAnimation,
            custom,
        };
    };

    const opacityAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { delay: custom * 0.3 },
        }),
    };

    const opacityAnimationVariant = (custom) => {
        return {
            variants: opacityAnimation,
            custom,
        };
    };

    const blurAnimation = {
        hidden: {
            filter: "blur(5px)",
        },
        visible: (custom) => ({
            filter: "blur(0)",
            transition: { delay: custom * 0.3 },
        }),
    };

    const blurAnimationVariant = (custom) => {
        return {
            variants: blurAnimation,
            custom,
        };
    };
    return {
        leftAnimation,
        leftAnimationVariant,
        rightAnimation,
        rightAnimationVariant,
        topAnimation,
        topAnimationVariant,
        opacityAnimation,
        opacityAnimationVariant,
        blurAnimation,
        blurAnimationVariant,
    };
};

export default useAnimations;
