
// // let user  = prompt("Enter city name:");
// // user = user.toUpperCase();
// // let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// // for(let i =0;i<5;i++){
    
// //     if(user  == cities[i]){
// //         alert("City found");
// //         break;
// //     }
   
// // }

// //  var cityToCheck = prompt("Enter your city");
// //  cityToCheck = cityToCheck.toLowerCase();
// //  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// //  for (var i = 0; i <= 4; i++) {
// //  if (cityToCheck === cleanestCities[i]) {
// //      alert("It's one of the cleanest cities");
// //  }
// // else{
// //     alert("City not found");
// //     break;
// // }
// //  }



// // let firstName = "hasan"
// // let lastName = "ashraf"

// // let firstChar = firstName[0].toUpperCase()
// // let LastChar = lastName[0].toUpperCase()
// // let fullName = firstChar + firstName.slice(1) +  " " +LastChar+lastName.slice(1)
// // console.log(fullName)

// let para = "my name is hasan"

// let returnVal = para.split(" ")

// for(let i = 0 ; i < returnVal.length ; i++){
//     // console.log(returnVal[i])
//     let upper = returnVal[i][0].toUpperCase() 
//     // console.log(upper);
//     let removeFirstChar = returnVal[i].slice(1)
//     // console.log(removeFirstChar);
    
//     let updatedValue= " " + upper    + removeFirstChar 
//     para += updatedValue
//     // console.log(para);
    
// }
// let newPara =para.split(" ").slice(4).join(" ")
// console.log(newPara)


// // console.log(firstName.length)


console.log("Hello World!");
console.log("----------Chap(21-25)----------");

//ques 1//
//ans 1//
// let user1 = prompt("Enter your first name:");
// let firstChar = user1[0].toUpperCase();
// let user2 = prompt("Enter your last name:");
// let lastChar = user2[0].toUpperCase();

// let fullName = firstChar + user1.slice(1)+ " "+lastChar+user2.slice(1);
// alert("Welcome " + fullName);
// console.log("Welcome " + fullName);

//ques 2//
//ans 2//

// let favPhone=prompt("Enter your favorite phone model:");
// let length = favPhone.length;
// console.log(favPhone);
// console.log("The length of this mobile phones is",length);

//ques 3//
//ans 3//
let word = "Pakistani";
let index = word.lastIndexOf("n");
console.log(word);
console.log("The last index of 'n':",index);

// ques 4//
//ans 4//
let word2 = "hello world";
let index2 = word2.lastIndexOf("l");
console.log(word2)
console.log("The last index of 'l' :",index2);

//ques 5//
//ans 5//

let word3 = "Pakistani";
let index3 = word3.charAt(3);
console.log(word3);
console.log("the Character at index 3 is :",index3);

//ques 6//
//ans 6//

// let firstName = prompt("Enter your first name:");
// let firstChar = firstName[0].toUpperCase();
// let lastName = prompt("Enter your last name:");
// let lastChar = lastName[0].toUpperCase()
// let fullName = firstChar.concat(firstName.slice(1)+" ".concat(lastChar.concat(lastName.slice(1))))

// alert("Welcome " + fullName);

//ques 7//
//ans 7//
 
let city = "Hyderabad";
let repalce = city.replace("Hyder","Islam");
console.log(city);
console.log(repalce);
//ques 8//
//ans 8//
let message = "Ali and Sami are best friends.They play cricket and football together.";
console.log(message);
let replace2 = message.replace("and","&")
console.log(replace2);

//ques 9//
//ans 9//
let value = "472";
console.log("value :",value);
console.log("Type of value is ",typeof value);

value =Number(value);
console.log("value :",value);
console.log("Type of value is ",typeof value);

// //ques 10//
// //ans 10//
// let userInput =prompt("Enter any word:");
// console.log(userInput)
// userInput =userInput.toUpperCase();
// console.log("Uppercase :",userInput);

// //ques 11//
// //ans 11//

let para = "javascript is a fun programming language";
let returnVal = para.split(" ");
// console.log(returnVal);
for(let i=0;i<returnVal.length;i++){
    // console.log(returnVal[i]);
let upper = returnVal[i][0].toUpperCase();
let remain = returnVal[i].slice(1);
let  update = upper + remain;
// console.log(update);
para += " "+update
}
let newPara = para.split(" ").slice(6).join(" ");
console.log(newPara);


 
//ques 12//
//ans 12//
let num = 35.36;
let converon =num.toFixed(2).replace(".","");
console.log("Number :",num);
console.log("Result :",converon);

// // //ques 13//
// // //ans 13//
// let username = prompt("Enter your username:");
// for(let i =0;i<username.length;i++){
//        if(username[i]=="!" || username[i]=="." ||  username[i]==","){
//         alert("Please enter a valid password");
//         break;
//        }
//        console.log(username);
//        break    
// }

// //ques 14//  
// //ans 14//
//  let a = ["cake", "apple pie", "cookie", "chips", "patties"];
//  let userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

//  userSearch = userSearch.toLowerCase();
   
//     for(let i =0;i<a.length;i++){
//         if(userSearch ==a[i]){
//             console.log(userSearch,"is available at ",i,"index in our bakery"); 
//          }
//          else if (userSearch !=a[i]){
//             console.log("WE are sorry.",userSearch," is not available in our bakery");          
//          break;       
//         }
        
//     }
// //ques 15//
// //ans 15//

// //ques 16//
// //ans 16//
let university = "University of karachi";
let split = university.split("");
console.log(split);
for (let i=0;i<split.length;i++){
    console.log(split[i]); 
}

// // //ques 17//
// // //ans 17//
// let userInput2 = prompt("Enter any word:");
// let last = userInput2.charAt(userInput2.length -1)
// console.log(userInput2);
// console.log("Last character of input is :",last);

// //ques 18//
//ans 18//
let text = "The quick brwon fox jumps over the lazy dog.";
let count = 0;
 for(let i = 0 ;i<text.length;i++){
    if(text.slice(i,i+3) == "the" || text.slice(i,i+3) == "The"){
       console.log(text.slice(i,i+3));
       count= count+1;
       
 }}

console.log("Text ==>",text);
console.log(`There are ${count} occurence of the word "the"`);


