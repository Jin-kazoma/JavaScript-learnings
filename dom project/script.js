// 1
// const name = document.getElementById("name");
// console.log(name);
// name.textContent = "ken"; // change the name

// const course = document.querySelector("#course");
// console.log(course);
// course.textContent = "BSCS";

// const info = document.querySelectorAll(".info");
// console.log(info);

// const infos = document.querySelector(".info");
//infos.innerHTML = "Age: 21";

// 2
// const storeName = document.getElementById("store-name");
// storeName.textContent = "kenny's Tech Store";
// console.log(storeName);

// const product1 = document.querySelector(".product");
// product1.innerHTML = "Mother Board";
// console.log(product1);

// const products = document.querySelectorAll(".product");

//   if(products.length > 1){
//     const product2 = products[1];
//     product2.textContent = " pad";
//   }
// console.log(products);

// 3
// const restaurant = document.getElementById("restaurant");
// restaurant.textContent = "Mcdo";
// console.log(restaurant);

// const menu1 = document.querySelector(".menu-item");
// menu1.innerHTML = "Burger steak - 120";
// console.log(menu1);

// const menu = document.querySelectorAll(".menu-item");
//  if(menu.length > 1){
//     const menu2 = menu[1];
//     menu2.textContent = "Lazania - 120";
//  }
//  if(menu.length > 2){
//     const menu3 = menu[2];
//     menu3.textContent = "Pansit - 120";
//  }



// 4
// const username = document.getElementById("username");
// const age = document.querySelector("#age");

// console.log(username.value);
// console.log(age.value);

// const profile =` Username: ${username.value} \n age: ${age.value}`;
// console.log(profile);


// 5 
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// console.log(username.value);
// console.log(password.value);

// if(username.value === "admin" && password.value === "12345"){
//     console.log("Login Successfull");
// } else {
//     console.log("Invalid username or password");
// }

// 6
// const food = document.querySelectorAll(".food");

// for(let i = 0; i < food.length; i++){
//     console.log(`Order: ${food[i].value}`);
// };



// ADDEVENTLISTENER EXERCISE
// const input = document.getElementById("input");
// input.addEventListener("input", () => {
//     console.log(input.value);
// })

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => alert ("Submitted"));

// const form = document.querySelector("#myForm");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();// used to stop refreash of page and recover the info

//     console.log("Form submitted without refreshing!");
// });

//2.2 
// const form = document.querySelector("#profileForm");
// const username = document.querySelector("#username");
// const course = document.querySelector("#course");
// const button = document.querySelector("button")
// const preview = document.querySelector("#preview");
// const message = document.querySelector("#message");

// username.addEventListener("input", function(event){
//     console.log(username.value);
//     preview.textContent = username.value;
// });

// course.addEventListener("change", function(event){
//     console.log(course.value);
// });

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     message.textContent = "Profile Submitted!";
// });

// button.addEventListener("click", function(event){
//     console.log("Button Clicked!");
//     console.log(event.target);
// });
