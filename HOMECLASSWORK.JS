// prompt 1
// ========
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}
console.log(maxOfTwoNumbers(18, 9));

// prompt 2
// ========
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log(maxOfThree(18, 9, 15));

// prompt 3
// ========
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isCharacterAVowel(argument) {
  var text;
  var argument = argument.toLowerCase();

  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i <= vowels.length; i++) {
    if (argument != vowels[i]) {
      continue;
    }
    return true;
  }
  return false;
}

// See if "A" is a vowel
var char = "A";

if (isCharacterAVowel(char)) {
  console.log(char + " is a vowel");
} else {
  console.log(char + " is not a vowel");
}

// prompt 4
// ========
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// Addition
function sumArray(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
// Print out the total to the console
console.log(sumArray([1, 2, 3, 4]));

//Multiplication
function multiplyArray(numbers) {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total = total * numbers[i];
  }
  return total;
}
// Print out the total to the console
console.log(multiplyArray([1, 2, 3, 4]));

// prompt 5
// ========
//Write a function that returns the number of arguments passed to the function when called.

/*The arguments is an object which is local to a function. You can think of it as a local variable that is available with all functions by default except arrow functions in JavaScript. 

This object (arguments) is used to access the parameter passed to a function. It is only available within a function. We can’t access it outside the function. Arguments object allow you to access all of the arguments that are passed to a function. We can access these arguments using indexes. for Akbar info*/

function ArgCounter() {
  return arguments.length;
}
ArgCounter(10); //1
ArgCounter(); //0
ArgCounter(10, 20, 30, 40, 50); //5
console.log(ArgCounter(10, 20, 30, 40, 50));

// prompt 6
// ========
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(argument) {
  var text = "";

  for (var i = argument.length - 1; i >= 0; i--) {
    text += argument[i];
    continue;
  }
  return text.toLowerCase();
}
console.log(reverseString("jag testar"));

// prompt 7
// ========
//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// prompt 8
// ========
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

var filterLongWords = function (array, int) {
  var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
};
console.log(
  filterLongWords(["This", "was not", "was", "very", "hard", "question"], 3)
);
