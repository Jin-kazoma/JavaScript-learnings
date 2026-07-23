// let age = 20;
// let name = "ken";
// console.log(age); // print the stored value
// console.log(name);

// let Info = name + " is" + " " + age + " yrs. old";
// console.log(Info);

// let greetings = "Hello";
// greetings += ", ken!"
// console.log(greetings);

// let str1 = "Hello";
// let str2 = "Ken";
// let result = str1.concat(' ',str2);
// console.log(result);

// let botName = "kenny";
// let botLocation = "US";
// let favoriteLanguage = "Python";

// console.log("Hello! I'm your coding fun fact guide!");

// console.log("My name is " + botName + " and I live on " + botLocation + ".");
// console.log("My favorite programming language is "+ favoriteLanguage + ".");

// let codingFact = favoriteLanguage; // instead of favoriteLanguage i make a new varialbe named codingfact.
// console.log(codingFact);

// codingFact = "I love using "+ favoriteLanguage;
// console.log(codingFact);

// codingFact = "It's the best "+ favoriteLanguage + " Language";
// console.log(codingFact);

// console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + "."); //use of + but it's a hassle when you need to put 3 or more variable names, that's why use this method.

// the TEMPLATE LITERALS using (`) backticks
// let name = "kenny";
// let age = 20;
// let place = "QC";
// let greetings = `Hello ${name} you are ${age} years old, from ${place}`; // With this method you can put 2 or more variable names without hasle on +.
// console.log(greetings);\
// console.log(`ako
//     si
//     kenny`); // the backticks also support new line, unlike using \n each time for new line.

// let sentence = "JavaScript is awesome!, and i love JavaScript";
// let position = sentence.indexOf("awesome!"); //default syntax.
// let position = sentence.indexOf("JavaScript",10); // 35 since it search duplicate arguments, but the first word is the starting point while the other duplicate is locating.
// console.log(position); // 14 is the output since is count even the space.


// console.log("Hi there!");
// const botName = "teacherBot";

// const greeting = `My name is ${botName}.`;
// console.log(greeting);

// const subject = "JavaScript";
// const topic = "strings";

// const sentence = `Today, you will learn about ${topic} in ${subject}.`;
// console.log(sentence);

// const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
// console.log(strLengthIntro);

// console.log(subject.length);

// console.log(`Here is an example of using the length property on the word ${topic}.`);
// console.log(topic.length);

// console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

// console.log(subject[0]);

// console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
// console.log(subject[1]);

// console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

// const lastCharacter = subject[subject.length - 1];
// console.log(lastCharacter);

// const learningIsFunSentence = "Learning is fun.";

// console.log("Here are examples of finding the positions of substrings in the sentence.");

// console.log(learningIsFunSentence.indexOf("Learning"));

// console.log(learningIsFunSentence.indexOf("fun"));
// console.log(learningIsFunSentence.indexOf("learning"));

// console.log("I hope you enjoyed learning today.");



// const fccSentence = "freeCodeCamp is a great place to learn web development.";
// console.log("Here are some examples of the includes() method:");

// const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
// console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

// const hasJavaScript = fccSentence.includes("JavaScript");
// console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

// const hasLowercaseFCC = fccSentence.includes("freecodecamp");
// console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

// const message = "Welcome to freeCodeCamp!";

// console.log("Here are some examples of the slice() method:");

// const platform = message.slice(11, 23);
// console.log(`The word "${platform}" was sliced from the message.`);

// const greetingWord = message.slice(0, 7);
// console.log(`The first word is "${greetingWord}".`);

// const endPunctuation = message.slice(-1);
// console.log(`The ending punctuation mark is a "${endPunctuation}"`);

// console.log("Workshop complete! You now know how to use includes() and slice().");

// const userInput = "   Hello World!   ";
// console.log("Original input:");
// console.log(userInput);

// const cleanedInput = userInput.trim();
// console.log("Result of trimming whitespace from both ends:");
// console.log(cleanedInput);

// const trimmedStart = userInput.trimStart();
// console.log("After using the trimStart() method, leading spaces removed:");
// console.log(trimmedStart);

// const trimmedEnd = userInput.trimEnd();
// console.log("After using the trimEnd() method, trailing spaces removed:");
// console.log(trimmedEnd);

// const upperCaseInput = cleanedInput.toUpperCase();
// console.log("Result of using the toUpperCase() method:");
// console.log(upperCaseInput);

// const lowerCaseInput = cleanedInput.toLowerCase();
// console.log("Result of using the toLowerCase() method:");
// console.log(lowerCaseInput);

// const lowercaseWord = "camelcase";
// const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);
// console.log("Camel cased version:");
// console.log(camelCasedVersion);


// const originalString = "I love cats.";
// console.log("Original string:");
// console.log(originalString);

// const replacedString = originalString.replace("cats", "dogs");
// console.log("After using the replace() method:");
// console.log(replacedString);

// const exampleSentence = "I love cats and cats are so much fun!";
// console.log("Original sentence:");
// console.log(exampleSentence);

// const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
// console.log("Replacing all occurrences of cats with dogs:");
// console.log(dogsOnlySentence);

// const learningSentence = "I love learning!";
// console.log("Original learning sentence:");
// console.log(learningSentence);

// const repeatedLove = "love ".repeat(3).trimEnd();
// console.log(repeatedLove);

// const newSentence = `I ${repeatedLove} learning.`;
// console.log(newSentence);



//BOOLEAN
// const firstResult = 5 + 10;
// console.log(`5 + 10 = ${firstResult}`);

// const secondResult = "8" - 5;
// console.log(`8 - 5 = ${secondResult}`);

// const thirdResult = 1 + 5;
// console.log(`1 + 5 = ${thirdResult}`);

// const fourthResult = 0 + 8;
// console.log(`0 + 8 = ${fourthResult}`);

// const fifthResult = 10 * 2;
// console.log(`10 * 2 = ${fifthResult}`);

// const sixthResult = 0 + 22;
// console.log(`0 + 22 = ${sixthResult}`);


// const hasDeveloperJob = true;

// if (hasDeveloperJob) {
//   console.log("Timmy is employed as a developer.");
// }

// const isTimmyAGamer = false;

// if (isTimmyAGamer) {
//   console.log("Timmy loves to play World of Warcraft.");
// }

// const timmyAge = 15;

// if (timmyAge >= 16) {
//   console.log("Timmy is old enough to drive.");
// } else {
//   console.log("Timmy is not old enough to drive.");
// }


//UNARY OPERATORS
// const str = '42';
// const strToNum = +str;

// console.log(strToNum); // 42
// console.log(typeof str); // string
// console.log(typeof strToNum); // number

// const str = '42';
// const strToNegativeNum = -str;

// console.log(strToNegativeNum); // -42
// console.log(typeof str); // string
// console.log(typeof strToNegativeNum); // number

// let isOnline = true;
// console.log(!isOnline); // false
// let isOffline = false;
// console.log(!isOffline); // true

//TERNARY OPERATORS
// const temperature = 30;
// const weather = temperature > 25 ? 'sunny' : 'cool';
// console.log(`It's a ${weather} day!`);



// Math methods
// const botName = "MathBot";
// const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

// console.log(greeting);

// console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

// const randomNum = Math.random();
// console.log(randomNum);

// console.log("Now, generate a random number between two values.");

// const min = 1;
// const max = 100;

// const randomNum2 = Math.random() * (max - min) + min;
// console.log(randomNum2);

// console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

// const numRoundedDown = Math.floor(6.7);
// console.log(numRoundedDown);

// console.log("Now, generate a random integer between two values.");

// const randomInt = Math.floor(Math.random() * (max - min) + min);
// console.log(randomInt);

// console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

// const numRoundedUp = Math.ceil(3.2);
// console.log(numRoundedUp);

// console.log("The Math.round() method rounds the value to the nearest whole integer.");

// const numRounded = Math.round(2.7);
// console.log(numRounded);
// const numRounded2 = Math.round(11.2);
// console.log(numRounded2);

// console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

// const maxNum = Math.max(3, 125, 55, 24);
// console.log(maxNum);
// const minNum = Math.min(6, 90, 14, 90, 2);
// console.log(minNum);

// console.log("It was fun learning about the different Math methods with you!");

//Lab
// const fortune1 = "Your cat will look very cuddly today." ;
// const fortune2 = "The weather will be nice tomorrow.";
// const fortune3 = "Be cautious of your new neighbors.";
// const fortune4 = "You will find a new hobby soon.";
// const fortune5 = "It would be wise to avoid the color red today.";

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);

// let selectedFortune = randomNumber;

// if (randomNumber === 1) {
//   selectedFortune = fortune1;
// } else if (randomNumber === 2) {
//   selectedFortune = fortune2;
// } else if (randomNumber === 3) {
//   selectedFortune = fortune3;
// } else if (randomNumber === 4) {
//   selectedFortune = fortune4;
// } else {
//   selectedFortune = fortune5;
// }

// console.log(selectedFortune);



//FUNCTIONS LESSONS
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }
// greet("Alice"); // Hello, Alice!
// greet("Nick"); // Hello, Nick!


// function greetings(name = "Guest") {
//   console.log("Hello, " + name + "!");
// }
// greetings(); // Hello, Guest! since theres no argument/
// greetings("Anna"); // Hello, Anna!


// function calculateSum(num1, num2) {
//   return num1 + num2;
// }

// console.log(calculateSum(2, 5));
// console.log(calculateSum(10, 10));
// console.log(calculateSum(5, 5));

// function calculateDifference(num1, num2) {
//   return num1 - num2;
// }

// console.log(calculateDifference(22, 5));
// console.log(calculateDifference(12, 1));
// console.log(calculateDifference(17, 9));

// function calculateProduct(num1, num2) {
//   return num1 * num2;
// }

// console.log(calculateProduct(13, 5));

// function calculateQuotient(num1, num2) {
//   return num2 === 0 ? "Error: Division by zero" : num1 / num2;
// }

// console.log(calculateQuotient(7, 11));
// console.log(calculateQuotient(3, 0));

// function calculateSquare(num) {
//   return num ** 2;
// }

// console.log(calculateSquare(2));
// console.log(calculateSquare(9));

// function calculateSquareRoot(num) {
//   return Math.sqrt(num);
// }

// console.log(calculateSquareRoot(25));
// console.log(calculateSquareRoot(100));



//LAB ACTIVITIES!!!
// function booWho(value){
//   return typeof value === "boolean";
// }
// console.log(booWho(false));
// console.log(booWho([1,2,3]));
// console.log(booWho([].slice));
// console.log(booWho({"a":1}));
// console.log(booWho(1));
// console.log(booWho(NaN));
// console.log(booWho("a"));
// console.log(booWho("true"));
// console.log(booWho("false"));


// function maskEmail(email) {
//   // Find the position of the @ symbol
//   let atIndex = email.indexOf("@");

//   // Get the username (everything before @)
//   let username = email.slice(0, atIndex);

//   // Get the domain (everything from @ to the end)
//   let domain = email.slice(atIndex);

//   // Get the first letter of the username
//   let firstLetter = username[0];

//   // Get the last letter of the username
//   let lastLetter = username[username.length - 1];

//   // Create the correct number of * characters
//   let stars = "*".repeat(username.length - 2);

//   // Return the masked email
//   return firstLetter + stars + lastLetter + domain;
// }
// let email = "apple.pie@example.com"; // variable

// console.log(maskEmail(email)); // pass the variable as the argument


// const minIncomeForDuplex = 60000;
// const minCreditScoreForDuplex = 700;

// const minIncomeForCondo = 45000;
// const minCreditScoreForCondo = 680;

// const minIncomeForCar = 30000;
// const minCreditScoreForCar = 650;

// function getLoanMessage(annualIncome, creditScore) {
//   if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
//     return "You qualify for a duplex, condo, and car loan."
//   } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
//     return "You qualify for a condo and car loan."
//   } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
//     return "You qualify for a car loan."
//   } else {
//     return "You don't qualify for any loans."
//   }
// }

// const duplexLoanMsg = getLoanMessage(85000,850);
// console.log(duplexLoanMsg);

// const condoLoanMsg = getLoanMessage(65000,690);
// console.log(condoLoanMsg);

// const carLoanMsg = getLoanMessage(45000,660);
// console.log(carLoanMsg);

// const noLoanMsg = getLoanMessage(25000,550);
// console.log(noLoanMsg);



// function convertCtoF(celsius){
//   let fahrenheit;
//     return fahrenheit = celsius * (9/5) + 32;
// }

// convertCtoF(-30);
// convertCtoF(-10);
// convertCtoF(0);
// convertCtoF(20);
// convertCtoF(30);


// let count = 0;
// function cardCounter(card){
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//      count++;
//      break;

//      case 7:
//      case 8:
//      case 9:
//      break;

//      case 10:
//      case "J":
//      case "Q":
//      case "K":
//      case "A":
//       count--;
//       break;
//   }
//   if(count > 0){
//     return count + " Bet";
//   } else{
//     return count + " Hold";
//   }
// }


// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return `${year} is a leap year.`;
//   } else if (year % 100 === 0) {
//     return `${year} is not a leap year.`;
//   } else if (year % 4 === 0) {
//     return `${year} is a leap year.`;
//   } else {
//     return `${year} is not a leap year.`;
//   }
// }

// let year = 2024;

// let result = isLeapYear(year);

// console.log(result);



// function truncateString(string,number){
//   if(string.length > number){
//     return string.slice(0,number) + "...";
//   } else {
//     return string;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
// console.log(truncateString("A-", 1));
// console.log(truncateString("Absolutely Longer", 2));



// function confirmEnding(str,target){
//   return str.slice(-target.length) === target;  // -target lets you count at the end as a start.
// }

// console.log(confirmEnding("Bastian","n"));
// confirmEnding("Congratulation", "on");
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
// confirmEnding("He has to give me a new name", "name");
// confirmEnding("Open sesame", "sage");
// confirmEnding("Open sesame", "game");
// confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain");
// confirmEnding("Abstraction", "action");




// ARRAY LESSONS!

// const fruits = ["apple","melon","mango"]; // array syntax
// console.log(fruits);

// let addFruits = fruits.push("mango"); // syntax for adding one or more elements
// console.log(fruits);

// let removeFruits = fruits.pop(); //syntax for removing the last elements
// console.log(fruits);
// console.log(removeFruits); // returns the removed elements

// let startFruits = fruits.unshift("pineapple"); // syntax for adding one or more elements to the beginning of an array
// console.log(fruits);

// let endFruits = fruits.shift(); // syntax for removing the first elements from an array
// console.log(fruits);

// TWO TYPES OF ARRAY
// const fruits = ["apple","pineapple","melon"]; // One-dimensional array - single row
// console.log(fruits); 

//TWO-DIMENSIONAL ARRAY - consists of multiple rows and column
// const chess =[
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5]
// ];
// console.log(chess[0][2]);

//DESTRUCTURING - allows you to extract values from arrays
// const fruits = ['apple','mango','melon','pineapple'];

//first method
// let [first,second,third,fourth] = fruits; // Assign each values of arrays into variables.
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

//second method
// const first = fruits[0]; // Another method to assign array parameters into orders you want.
// const second = fruits[1];
// const third = fruits[2];
// const fourth = fruits[3];
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

//DESTRUCTURING also allow you to skip elements using comma.
// let [first, ,third,] = fruits; // here we skip the mango and pineapple using comma.
// console.log(first);
// console.log(third);


//REST SYNTAX(...rest) - allows you to capture all remaining elements as new array.
// let [first,second, ...rest] = fruits;
// console.log(first);
// console.log(second);
// console.log(rest);



function golfScore(par,strokes){
  if(strokes === 1){
    return "Hole-in-one!";
  } else if(strokes <= par - 2){
    return "Eagle";
  } else if(strokes === par - 1){
    return "Birdie";
  } else if(strokes === par + 1){
    return "Bogey";
  } else if(strokes === par + 2){
    return "Double Bogey";
  } else if (strokes >= par + 3){
    return "Go Home!";
  } else if(strokes === par) {
    return "Par";
  }
}

 console.log(golfScore(3,7));
golfScore(3,3);
