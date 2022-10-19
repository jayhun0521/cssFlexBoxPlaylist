// alert('here is my new alert');



// var myName = "Jason";
// document.write(myName);

// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);

//  var myAge = 40;

//  if (myAge > 30){
//     document.write("Warning, midlife crisis ahead");
//  }else if (myAge > 20){
//     document.write("You're in your prime!");
//  }else if (myAge > 10){
//     document.write("You're a child");
//  }else {
//     document.write("You're a baby");
//  }


//  var personAge = 27;
//  if (personAge < 18 || personAge > 30 || personAge === 27){
//     document.write("Go Home!")
//  } else { 
//     document.write("YEAT!!!");
//  }



// var personAge = 5;

// while (personAge < 10){
//   console.log("You are less than 10!");
//   personAge++; 
// } 
// document.write("You are over 10!");



// for (personAge = 5; personAge < 10; personAge++){
//     console.log("You are less than 10");
// }
// document.write("Now you are over 10");

// var links = document.getElementsByTagName('a');

// for (i = 1; i <= links.length; i++){
//     console.log('this is link number' + i);
// }
// document.write("All links have been looped");


// for (i = 0; i < 10; i++){
//     if(i === 5 || i === 3){
//         continue;
//     }
    
//     console.log(i);

//     if(i === 7){
//         console.log("The loop is broken")
//         break;
//     }
// }


// var links = document.getElementsByTagName('a')

// for (i = 0; i < links.length; i++){
//     links[i].className = "link" + i;
// }

// function averageNum (a, b){
//     var average = (a+b) / 2; //local variable
//     console.log(average);
//     return average;
// }
// var avgResult = averageNum(6, 10); //order of arguments does matter //global variable
// console.log('the average is ' + avgResult);


// var globalVar = 5; //global scope
 
// function someFunction(){
//     var localVar = 10; //local scope
// }


// function averageNum(a,b){
//     var average = (a+b) / 2;//local
//     console.log(average);
//     return average;
// }
 
 
// var avgResult = averageNum(10,20); //global

// function logResult(){
//     console.log("the average is " + avgResult + " inside logResult");
// }
// logResult();

// var a = 10;
// var b = '15';

// console.log(a+b);
// console.log(typeof (a + b));


// console.log(Math.round (12.5));
// console.log(Math.floor (12.7));
// console.log(Math.ceil (12.2));
// console.log(Math.max (8, 9, 12, 15, 18));
// console.log(Math.PI);

// var a = "titanic";
// var b = 5;

// console.log(a * b);
// console.log(typeof(a * b));

// var a = 37;
// var b = 5;

// console.log(a * b);

// if(!isNaN(a)){
//     console.log('meaning of life is ' + (a + b));
// } else{
//     console.log("this is not a number");
// }


// var newString = "This is a 'new' string";

// var secondString = 'Now I\'m a "crazy missing" string';


// // console.log(newString.length);
// // console.log(secondString.length);

// // console.log(newString.toUpperCase());
// // console.log(secondString.toUpperCase());

// // console.log(newString.toLowerCase());
// // // console.log(secondString.toLowerCase());

// // console.log(newString.indexOf('string'));
// // console.log(secondString.indexOf('string'));

// if(secondString.indexOf("missing") === -1){
//     console.log("this word is not found")
// }else {
//     console.log("the word missing starts at position " + secondString.indexOf("missing"))
// }


// var stringOne = "abc";
// var stringTwo = "Def";

// console.log(stringOne < stringTwo);


var str = "hello, world";

var str2 = str.slice(2, 9)
var str3 = str.slice(2);

var words = "fun, happy, awesome, excited, funny, smart"

var wordsArray = words.split(',');
