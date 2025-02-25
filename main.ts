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

// Just as a note. I had to install tsx (npm install -D tsx) to enable myself to run the file main.ts.
// I kept running into TypeError for the file extension .ts and from what I could find out online
// it appears to be an issue with Node.js and the recommendation was to do the tsx install.
// If you end up needing to take this step as well the command to run the file with tsx is
// npx tsx ./main.ts.