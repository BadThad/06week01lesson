export const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
};

export const countCharacters = (str: string): number => {
    return str.length;
};

// In the code below the expression (/\s/g, "") tells the function to replace all
// match whitespace (\s) detected globally (g), and not just the first space, with 
// an empty space ("").

export const countCharsNoSpace = (str: string): number => {
    return str.replace(/\s/g, "").length
}

export const capitalizeFirstLetter = (str: string): string => {
    const firstLetter = str.slice(0, 1);
    return firstLetter.toUpperCase() + str.substring(1);
};