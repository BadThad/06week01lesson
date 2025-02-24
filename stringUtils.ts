export const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
};

export const countCharacters = (str: string): number => {
    return str.length;
};

export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase();
};