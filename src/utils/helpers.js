export const isOdd = (num) => num % 2 !== 0;

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}