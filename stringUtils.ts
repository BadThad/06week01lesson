export const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
};

export const countCharacters = (str: string): number => {
    return str.length;
};

export const countCharsNoSpace = (str: string): number => {
    return str.split("").length;
}

export const capitalizeFirstLetter = (str: string): string => {
    const firstLetter = str.slice(0, 1);
    return firstLetter.toUpperCase() + str.substring(1);
};