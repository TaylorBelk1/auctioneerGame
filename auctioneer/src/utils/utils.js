export const getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const getRandomIntRounded = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}