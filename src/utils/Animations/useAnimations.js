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
            transition: { delay: custom * 0.1 },
        }),
    };

    const opacityAnimationVariant = (custom) => {
        return {
            variants: opacityAnimation,
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
    };
};

export default useAnimations;
