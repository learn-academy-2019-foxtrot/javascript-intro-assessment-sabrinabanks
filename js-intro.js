// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

console.log(mantra.includes("B"));

// 1b. Write the code that determines if there is an 'x' in mantra.

console.log(mantra.includes("x"));

// 1c. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes("v"));

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.



// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var lengthcheck = (pet1,pet2) => {
    if (pet1.length > pet2.length) {
         return pet1
        
    } else if (pet1.length < pet2.length) {
         return pet2
        
    } else {
        return "they are equal" 
    }
}
console.log(lengthcheck(myDog,myCat));

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var hooArray = (pet1,pet2) => {
    var newArray = [pet1,pet2] 
    return newArray
}

console.log(hooArray(myDog,myCat));



// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"




// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

// var arr =  ["l","e","a","r","n","i","n","g"," ","i","s"," ","f","u","n"]

const logletter = (string) ={
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    }
}


// 3b. Write the code that logs each letter of the message using map.

// var arr = ["l","e","a","r","n","i","n","g"," ","i","s"," ","f","u","n"]


const logLetter = (array) => {
    let newarray = array.split("")
    return newarray.map((v,i), { 
        console.log (array[i])
    })
}


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.



// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().




// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

var byeVowel = (string) => {
    var empty = ""
    for(let i=0; i<string.length; i++){
      if(string[i] !== "a","e","i","o","u") {
          empty += string[i]
      } 
        console.log(testString[i])
    }
}

// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.






// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

const onlyCat = (array) => {
    let newArr = array.filter((v,i) =>
    if (v.animal === "cat"){
    return v
}
console.log(newArr)
}

onlyCats(toonimals)

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"


const otherName = (array) => {
    let newArr = array.filter((v,i)) => {
        if(v.animal !== "cats"){
    return v.name
    }
    
}
console.log(newArr))
}
otherName(toonimals)


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
