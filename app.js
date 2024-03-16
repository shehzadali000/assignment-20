// Chapter 14 (If statements nested)


// 1.



// var password = ""; 

// if (password !== "") {
//     if (password.length <= 5) {
//         alert("Password must be greater than 5");
//     } else {
//         alert("OK");
//     }
// }



// 2.

// if (a === 1) {
//     if (c === "Max") {
//         alert("OK");
//     }
// }


// 3.



// if (a === 1 && c === "Max") {
//     alert("OK");
// }





// 4.



// var firstVariable = 10;
// var secondVariable = 10;

// if (firstVariable === secondVariable) {
//     if (firstVariable <= secondVariable) {
//         alert("Test passed: The first variable equals the second variable and is less than or equal to it.");
//     }
// }



// 5.



// Chapter 15 (Array I)



// 1.




// var myArray = [];



// 2.



// var myArray = ["baber"];


// 3.


// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]); 



// 4.



// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var totalLength = alphabet.length;
// alert(totalLength); 


// 5.


// var myArray = ["firstElement"];

// myArray[1] = "secondElement";

// alert(myArray[1]); 



// Chapter 16 (Array II)


// 1.



// var myArray = ["firstElement"]; 

// myArray.push("secondElement"); 

// var lastElement = myArray[myArray.length - 1]; 

// alert(lastElement);


// 2.



// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop(); 

// console.log(Alphabet); 

// 3.


// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(123); 

// console.log(Alphabet); 


// Chapter 16 (Array III)



// 1.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();

// console.log(sizes); 


// 2.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3); 

// console.log(sizes); 



// 3.


// var myArray = ["firstElement"]; 

// myArray.unshift("secondElement"); 

// alert(myArray[0]); 



// 4.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];


// var indexM = sizes.indexOf("M");


// sizes.splice(indexM + 1, 0, "L");

// console.log(sizes);


// 5.



// var sizes = ["S", "M", "XL", "XXL", "XXXL"];


// var reSizes = sizes.slice(0, 3);

// console.log(reSizes);



// 6.


// var pets = ["dog", "cat", "ox", "duck", "frog"];


// var indexDog = pets.indexOf("dog");


// pets.splice(indexDog + 1, 0, "parrot", "hamster");


// pets.splice(indexDog + 1, 3);

// console.log(pets); 


// 7.


// var pets = ["dog", "cat", "ox", "duck", "frog"];


// var indexCat = pets.indexOf("cat");
// var indexOx = pets.indexOf("ox");


// pets.splice(indexCat, 1);
// pets.splice(indexOx, 1);

// console.log(pets);



// 8.



// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];


// var indexDuck = pets.indexOf("duck");
// var indexFrog = pets.indexOf("frog");


// var reducedPets = pets.slice(indexDuck, indexFrog + 1);

// console.log(reducedPets);





// Chapter 17 - 20 (for Loops)



// 1.


// for (var i = 0; i < 10; i++) {

//     console.log(i)
   
// }



// 2.


// for (var i = 0; i <= 11; i++) {
 
//     console.log(i)
// }



// 3.



// for (var i = 0 ; i <= 4 ; i++){
    // console.log(i);
// }


// 4.



// for (var counterName = 0; counterName < 100; counterName++) {
//     console.log(counterName);
// }



// 5.


// for (var i = 3; i > 0; i--) {
//    console.log(i)
// }



// 6.


// var array = [1, 2, 3, 4, 5];
// var numElements = array.length;


// 7.


// var flag = true; 



// 8.


// for (var i = 0; i < pets.length; i++) {
// }

// 9.


// for (var i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert("Counter: " + i);
//         break; 
//     }
// }


// 10.


// var userNames = ["shehzad", "ali", "safdar", "almir"];


// var firstName = prompt("Enter first name");


// for (var i = 0; i < userNames.length; i++) {
 
//     if (firstName === userNames[i]) {
//         alert("Enter");
//         break; 
//     } else if (i === userNames.length - 1) {
//         alert("Please write correct user name");
//     }
// }


// 11.



// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// }

// if (!matchFound) {
//     alert("No match found");
// }


// 12.



// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//     for (var j = 0; j < secondArr.length; j++) {
//         console.log(firstArr[i] + secondArr[j]);
//     }
// }



// ARRAY AND LOOPS

// CHAPTER 17 - 20


// 1.



// var Array = [];

// 2.

// var matrix = [
//     [0,1, 2, 3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// {
//     console.log(matrix);
// }

// 3.

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }


// 4.

// var tableNumber = parseInt(prompt("Enter the table number:"));
// var tableLength = parseInt(prompt("Enter the table length:"));

// console.log("Multiplication table of " + tableNumber + ":");

// for (var i = 1; i <= tableLength; i++) {
//     console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
// }


// 5.


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Printing items of the fruits array:");

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// 6.



// console.log("Counting:");
// for (var i = 1; i <= 15; i++) {
//     console.log(i);
// }


// console.log("Reverse counting:");
// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }


// console.log("Even:");
// for (var i = 0; i <= 20; i += 2) {
//     console.log(i);
// }


// console.log("Odd:");
// for (var i = 1; i <= 19; i += 2) {
//     console.log(i);
// }


// console.log("Series:");
// for (var i = 2; i <= 20; i += 2) {
//     console.log(i + "k");
// }


// 7.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");

// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (userInput.toLowerCase() === A[i].toLowerCase()) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("Yes, the item is found in the list.");
// } else {
//     alert("No, the item is not found in the list.");
// }


// 8.


// var A = [24, 53, 78, 91, 12];

// var largest = A[0];


// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log("The largest number in the array is: " + largest);


// 9.


// var A = [24, 53, 78, 91, 12];


// var smallest = A[0];


// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number in the array is: " + smallest);


// 10.


// console.log("Multiples of 5 ranging from 1 to 100:");
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }



// ARRAY

// Assignment 19

// Array


// 1.


// var studentNames = [];

// 2.

// var studentNamesObject = {
//     names: []
//   };

// 3.

// var fruits  = ["banana", "strawberry", "peach", "watermelon"];

// 4.

// var numbers = [1, 2, 3, 4, 5];


// 5.

// var boolean = [true, false];


// 6.


// var mixed = ["chocolate", 42, true];

// 7.


// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//    document.write("<h1>QUALIFICATIONS<h1>", "SSC</br>", "HSC</br>", "BCS</br>", "BS</br>", "BCOM</br>", "MS</br>", "M. Phil.</br>", "PhD");


// 8.

//  var studentNames = ["Micheal" , "John" , "Tony"];

//  var studentScore = [320 , 230 , 480];


// var studentNames = ["Micheal", "John", "Tony"];


// var studentScores = [320, 230, 480];


// document.write("Score of "+studentNames[0] + " is " + studentScores[0] + ". Percentage : " + (studentScores[0] / 500 * 100) + "%</br>");
// document.write("Score of "+studentNames[1] + " is " + studentScores[1] + ". Percentage : " + (studentScores[1] / 500 * 100) + "%</br>");
// document.write("Score of "+studentNames[2] + " is " + studentScores[2] + ". Percentage : " + (studentScores[2] / 500 * 100) + "%</br>");



// 9.



// var colors = ["Red", "Green", "Blue"];


// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br>");


// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddAtBeginning);


// document.write("<b>After adding color at the beginning:</b> " + colors.join(", ") + "<br>");


// var colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddAtEnd);


// document.write("<b>After adding color at the end:</b> " + colors.join(", ") + "<br>");


// colors.unshift("Purple", "Yellow");


// document.write("<b>After adding two colors at the beginning:</b> " + colors.join(", ") + "<br>");


// colors.shift();


// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br>");


// colors.pop();


// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");


// var indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
// var colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAddAtIndex);


// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");


// var indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
// var deleteCount = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(indexToDelete, deleteCount);


// document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br>");


// 10.


// var studentScores = [85, 92, 78, 95, 88];


// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Displaying the sorted array
// console.log("Sorted student scores (ascending order):", studentScores);


// 11.


// var cities = ["karachi", "Lahore", "islamabad", "quetta", "Peshawar"];


// var selectedCities = cities.slice(2, 4);

// console.log("Selected cities:", selectedCities);


// 12.

// var arr = ["This ", " is ", " my ", " cat"];
// var singleString = arr.join("");
// console.log(singleString);


// 13.



// var devices = [];


// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("moniter");


// console.log(devices.shift());
// console.log(devices.shift());
// console.log(devices.shift());




// 14.



// var devices = [];


// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("moniter");


// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());


// 15.




// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// document.write("<select>");
// for (var i = 0; i < phones.length; i++) {
//     document.write("<option value='" + phones[i] + "'>" + phones[i] + "</option>");
// }
// document.write("</select>");



// QUESTION 14   16

// chapter 15

// array(1)


// 1.


// var emptyArray = [];


// 2.


// var string = ["Hello, World!"];

// 3.

// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

// 4.


// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var totalLength = alphabet.length;
// console.log("Total length of the array:", totalLength);


// 5.



// var myArray = ["First element"];


// myArray[1] = "Second element";


// alert(myArray[1]);


// chapter 16

// (Array II)


// 1.



// var myArray = ["First element"];


// myArray.push("Second element");


// alert(myArray[myArray.length - 1]);





// 2.



// var Alphabet = ["h", "i", "j", "k"];


// Alphabet.pop();


// console.log("Array after removing the last element:", Alphabet);



// 3.



// var Alphabet = ["h", "i", "j", "k"];


// Alphabet.push(10);


// console.log("Array after adding a number to the end:", Alphabet);


// chapter 16

// (Array III)



// 1.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();

// console.log(sizes);



// 2.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];


// sizes.unshift(1, 2, 3);


// console.log("Array after adding three number elements to the beginning:", sizes);


// 3.



// var myArray = ["First element"];


// myArray.unshift("Second element");


// alert(myArray[0]);


// 4.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];


// var regSizes = sizes.slice(0, 3);


// console.log("Regular Sizes:", regSizes);




// 5.


// var pets = ["dog", "cat", "crocodile", "panda", "elephant"];


// pets.splice(1, 0, "lion", "bear");


// pets.splice(2, 3);


// console.log("Updated pets array:", pets);



// 6.



// var pets = ["dog", "cat", "crocodile", "panda", "elephant"];


// var catIndex = pets.indexOf("horse");
// var oxIndex = pets.indexOf("zebra");


// pets.splice(catIndex, 1);
// pets.splice(oxIndex, 1);


// console.log("Updated pets array:", pets);


// 7.


// var pets =["dog", "cat", "crocodile", "panda", "elephant"];


// var reducedPets = pets.slice(3, 5);


// console.log("Reduced pets array:", reducedPets);


