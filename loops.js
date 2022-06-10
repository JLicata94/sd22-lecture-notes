//Loops

/*
*Allow us to go over a block of code a determined amount of cycles.Its important to that it is posasible for us to write code without declarind an endpoint.

* Loops allow us to repeat a process without rewritng a lot of code.
*/

/*
*executed a statement inside a code block provided that it is true.

* The condtion is evaluted before executing the statement.
*/
 
let randInt = 7000

while (randInt > 0) {
    //conditional checks if it true
    randInt = randInt - 1
    //we subtract one from randInt and reassigning the value of said subtraction from randInt
console.log(randInt)
}

// while (true) {
//     randInt = randInt - 1
//     console.log(randInt)
// }

//this is a n infinite loop
//its inifinte because the condition will never resolve to false.

// For Loops

/*
* We have to setup our loop in a way where we can:
*see where we are in a loop
*consider the condition we run it against
*note when we are done with that condtion
*/

//lets count to 10
//       start   stop     step
for(let i = 0; =< 100; i= i++){
console.log(i)
}


let longWord = "potato"

for(let i = 0; i < longWord.length; i++) {
    console.log(longWord[i], i)
}

//For in Looops
for (i in longWord) {
console.log(i)
}

//For Of Loop

for (i of longWord) {
    //console.log(i)
}

