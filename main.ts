import { reverseString, countCharacters, capitalizeFirstLetter, countCharsNoSpace } from "./stringUtils";
import fs from "fs";
import path from "path";

const sentence = "do you know what a palindrome is? It's a word that is spelled the same way backwards. Such as kayak, racecar, or deified."

const reverseSentence = reverseString(sentence);
fs.writeFileSync("reverseSentence.txt", reverseSentence);

const filePath = path.join(__dirname, 'reverseSentence.txt');
console.log('New text file for reversed sentence save at: ' + filePath);

console.log(countCharsNoSpace(sentence));

console.log(reverseString("sdrawkcab"));

console.log(countCharacters(sentence));

console.log(capitalizeFirstLetter("sdrawkcab"));