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



//ATM SIMULATOR 
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
