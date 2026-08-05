//STUDENT PROFILE 
// const student = {
//     name: "Kenny",
//     age: 20,
//     course: "BSIT",
//     studentId: 1100,
//     gpa: 1.50,
//     enrolled: true
// };
// console.log(student);

// function changeCourse(student,newCourse){
//     return student.course = newCourse;
// };
// changeCourse(student, "CE");
// console.log(student);

// function updateGpa(student,newGpa){
//     return student.gpa = newGpa;
// };
// updateGpa(student, 2.00);
// console.log(student);

// function isEnrolled(student){
//     if(student.enrolled){
//         console.log("is enrolled");
//     } else{
//         console.log("droped");
//     }
// };
// isEnrolled(student);


// CALCULATOR
// let num1 = 5;
// let num2 = 10;

// let result = num1 * num2;
// result = num1 - num2;
// result = num2 / num1;

// console.log(result);


// STRINGS
// const text = "Welcome to wild rift, summoners!";
// console.log(text.length);
// console.log(typeof text);
// console.log(text.includes("wild"));
// console.log(text.slice(11,20));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.replace("summoners","Kenny"));

//LOGICAL OPERATORS 
// const a = 5;
// const b = 10;
// const c = 1;
// const d = 9;

// console.log(a > b);
// console.log(b > a);
// console.log(a <= b);
// console.log(d >= c);
// console.log(c === a);


//BOOLEAN
// const status = {
//     isAdmin: false,
//     isLogin: true,
//     isCustomer: false
// };

// function statusAccess(status) {
//     if (status.isAdmin) {
//         console.log("Welcome Admin");
//     } else if (status.isLogin) {
//         console.log("Welcome back, Employee");
//     } else if (status.isCustomer) {
//         console.log("Welcome Customer");
//     } else {
//         console.log("Access Denied");
//     }
// }
// console.log(status);
// statusAccess(status);



//ATM SIMULATOR - project 1
// const account = {
//     accountName: "kenny",
//     accountId: 111,
//     balance: 100,
//     pin: "ac001",
//     status: "Active",
//     isLocked: false     
// };

// function displayAccount(accountInfo){
//     console.log(accountInfo);
// };
// displayAccount(account);


// function deposit(amount){
//     if(account.isLocked){
//         console.log("Account is locked!");
//         return;
//     }

//     if(account.balance <= 0){
//         console.log("Invalid amount!");
//     }

//     account.balance += amount;
//     console.log(`Current Balance: ${account.balance}`);
// };
// deposit(800);

// function withdraw(withdrawalAmount){
//     if(account.isLocked){
//         console.log("Cant withdraw, Account is locked!");
//         return;
//     }

//     if(withdrawalAmount <= account.balance){
//         console.log("\nWithdraw Successfully.\n");
//     } else{
//         console.log("\nInsufficient Balance!\n");
//     }

//     account.balance -= withdrawalAmount;

//     console.log(`Withdraw amount: ${withdrawalAmount}`);
//     console.log(`Remaining Balance: ${account.balance}`);
// };
// withdraw(300);

// // function changePin(newPin){
// //     account.pin = newPin;
// //     console.log("\nPIN successfully changed!\n");
// // };
// // changePin("ac221");
// // console.log(account);

// function lockAccount(){
//     account.isLocked = true;
//     console.log("\nAccount is locked!\n");
// };
// lockAccount();

// function unlockAccount(){
//    account.isLocked = false;
//    console.log("Account is unlocked!");
// };
// unlockAccount();

// function checkStatus(account){
//     if(account.isLocked === true){
//         console.log("\nAccount status is: locked\n");
//     } else{
//         console.log("\nAccount status is: unlocked\n");
//     }
// };
// checkStatus(account);





//USER LOGIN SYSTEM - PROJECT 2
// const user = {
//     username: "kenny",
//     password: "kenn111",
//     email: "ken@gmail.com",
//     isLoggedIn: false,
//     loginAttempts: 0,
//     isLocked: false
// };

// function displayUser(userInfo){
//     console.log(userInfo);
// };
// displayUser(user);

// function login(username,password){
//     if(user.isLocked){
//         console.log("\naccount locked, cant sign in!");
//         return;
//     }

//     if(username === user.username && password === user.password ){
//         console.log("Login successful");
//         user.isLoggedIn = true;
//         user.loginAttempts = 0;
//         return;
//     } else{
//         console.log("\nInvalid username or password!");
//     }

//     user.loginAttempts++;

//     if(user.loginAttempts >= 3){
//         console.log("account locked");
//         user.isLocked = true;
//         return;
//     } else {
//         console.log(`Attempts: ${user.loginAttempts}/3`);
//     }
// };
// login("ken","ken111");
// login("ket","ket11");
// login("kenny","kenn111");
// console.log(user);
// // login("kenny","kenn111");// check the th attempt, should log the condition of if statement in logout.

// function logout(){
//     if(user.isLoggedIn){
//         console.log("\nlog out successfully");
//         user.isLoggedIn = false; // execute after the log, the start is true but with this block of code it became false
//     } else{
//         console.log("\nalready log out");
//         return;
//     }
// };
// logout();
// console.log(user.isLoggedIn);

// function changePassword(newPassword){
//     if(user.isLoggedIn){
//         user.password = newPassword;
//         console.log("\nPassword change success!");
//     } else{
//         console.log("login first!");
//         return;
//     }

//     console.log(`\nPassword changed succesfully: ${newPassword}`);
// };
// changePassword("kenny01");



// LOOPS practice
// for(i = 0; i < 10; i++){
//     console.log(`The number is: ${i}`);
// };

// let i = 0;
// while(i < 10){
//     console.log(`The number is: ${i}`);
//     i++;
// };

// let i = 0;
// do{
//     console.log(`The number is: ${i}`);
//     i++;
// }while(i < 10);

//NUMBER ANALYZER
// const number = [12,5,20,18,3];
// const evenNum =[];
// const oddNum = [];

// let total = 0;
// for(let i = 0; i < number.length; i++){
//     if(number[i] % 2 === 0){
//         evenNum.push(number[i]);
//     }else{
//         oddNum.push(number[i]);
//     }
//      otal += grade[i];
// }
// console.log(number);
// console.log("Even: ",evenNum);
// console.log("Odd: ",oddNum);
// console.log("Sum: ",total);


// GRADE CALCULATOR
// const grades = [95, 88, 75, 60, 98];

// let total = 0;
// let highest = grades[0];
// let lowest = grades[0];

// for (let i = 0; i < grades.length; i++) {
//     let grade = grades[i];

//     console.log("\nGrade:", grade);

//     if (grade === 100) {
//         console.log("Grade: A+");
//     } else if (grade >= 90) {
//         console.log("Grade: A");
//     } else if (grade >= 80) {
//         console.log("Grade: B");
//     } else if (grade >= 70) {
//         console.log("Grade: C");
//     } else if (grade >= 60) {
//         console.log("Grade: D");
//     } else {
//         console.log("Grade: FAILED");
//     }

//     total += grade;

//     if (grade > highest) {
//         highest = grade;
//     }

//     if (grade < lowest) {
//         lowest = grade;
//     }
// }

// let average = total / grades.length;

// console.log("---------------------");
// console.log("Average:", average);
// console.log("Highest Grade:", highest);
// console.log("Lowest Grade:", lowest);
