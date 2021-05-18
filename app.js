  /************Quest 1. **********/
  
  // var firstName = prompt("Enter Your First Name: ");
  // var lastName = prompt("Enter your Last Name: ");
  
  // alert("Welcome! "+firstName.concat(" "+lastName))
 
  /************Quest. 2 **********/
 
//  var inp = prompt("Enter your favourite Mobile Phone Model") 
//  document.write("My favourite phone is " + inp + "<br>" + "Length sof string is: " + inp.length)    

  /************Quest. 3 **********/
  
//   var word = "Pakistani";
//   document.write("String: "+word); 
//   document.write("<br>Index of 'n': "+word.indexOf("n")); 

/************Quest. 4 **********/

//   var word = "Hello World!" ;
//   document.write("String: "+word);
//   document.write("<br>Last Index of 'l': "+word.lastIndexOf("l")); 


  /************Quest. 5 **********/
  
//   var word = "Pakistani";
//   document.write("String: "+word); 
//   document.write("<br>Chrater at index '3': "+word.charAt(3)); 
  
  
  /************Quest. 7 **********/
  
//   var word = "Hyderabad";
//   document.write("String: "+word); 
//   document.write("<br>replaced Word: "+word.replace("Hyder","Islam")); 

//**************Quest. 8 *********/

// var sentence = "Ibrahim and Asad are best friends, They play cricket and Football";
// document.write("Sentence: " + sentence.replace(/and/g,"&"));

/**********Quest. 9 ********/

// var num1 = "475"
// var num2 = 475
// document.write("value 1: "+ num1 + "<br>")
// document.write("Type: "+ typeof(num1) + "<br>")
// document.write("value 2: "+ num2 + "<br>")
// document.write("Type: "+ typeof(num2))

/***********Quest. 10/11/12 **********/

// var word = prompt("Input text to convert case")
// document.write(word.toUpperCase());

// var word = prompt("Input text to convert case")
// document.write(word.toLowerCase());

// var word = prompt("Input text to convert case");
// var firstChar = word.slice(0,1);
// var restOfWord = word.slice(1,word.length);
// document.write(firstChar.toUpperCase() + restOfWord);


// var num = 368.97329498;
// document.write(Math.round(num))
// document.write(Math.ceil(num))
// document.write(Math.floor(num))

/***********Quest. 13  **************/

// var inp = prompt("Enter user name");
// for(var i = 0; i < inp.length; i++){
//     if(inp.charCodeAt(i) === 33 || inp.charCodeAt(i) === 64 || inp.charCodeAt(i) === 46 || inp.charCodeAt(i) === 44){
//         alert("Please enter a valid user name");
//         break
//     }
// }

// var inp = prompt("Enter user name");
// for(var i = 0; i < inp.length; i++){
//     if((inp.charCodeAt(i) >= 33 && inp.charCodeAt(i) <= 47) || inp.charCodeAt(i) >= 58 && inp.charCodeAt(i) <= 64){
//         alert("Please enter a valid user name");
//         break
//     }
// }


/**********Quest. 14 ********/

// var items = ["cookies", "pastries", "snacks", "bread", "cake"];
// var userInp = prompt("what do you want");
// var inpItem = userInp.toLowerCase()
// var flag = false;
// for(var i = 0; i < items.length ; i++){
//     if(inpItem === items[i]){
//         flag = true;
//         alert(userInp + " is available at index " + i)
//     }
// }
// if(!flag){
//     alert("Sorry " + userInp + " is not available")
// }

/************Quest. 15 **********/

var userName = prompt("Enter User Name")

var userPassword = prompt("Enter Password")
if(userPassword.charCodeAt(0) > 47 && userPassword.charCodeAt(0) < 58 ){
    alert("Password requirement does not match try again")
    console.log("should not start with a number")
}
else if(userPassword.length < 6){
    alert("Password requirement does not match try again")
    console.log("Length must be 6")
}

/***********Quest. 16/17  ***********/

var name = "University of Karachi";
var nameArr = name.split(" ");
for(var i = 0; i < nameArr.length; i++){
    for(var j = 0; j < nameArr[i].length; j++){
        document.write(nameArr[i][j] + "<br>");

    }
}

var inp = prompt("Enter string");
alert("Last character of "+ inp + " is " +inp.charAt(inp.length-1));


/**********Quest. 18 *******/

var text = "The quick brown fox jumps over the lazy dog, The Cat, The Fish, the mice, and the con";
var count = 0;
for(var i = 0; i < text.length; i++){
    if(text.slice(i,i+3).toLowerCase() === "the"){
        count++;
    }
}
document.write(count);