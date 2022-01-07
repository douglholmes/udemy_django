var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is the name of your pet?");
alert("Thank you so much for the information.")

//name check
if (firstName[0] == lastName[0]) {
    //age
    if (age >= 20) {
        if (age <=30) {
            //age
            if (height >= 170) {
                //pet name
                if (petName[petName.length -1] == "y") {
                    console.log("Welcome Comrade! You've passed the Spy Test!")
                }
                else {
                    console.log("Sorry, nothing to see here.")
                }
            }
            else {
                console.log("Sorry, nothing to see here.")
            }
        }
        else {
            console.log("Sorry, nothing to see here.")
        }
    }
    else {
        console.log("Sorry, nothing to see here.")
    }
}
else {
    console.log("Sorry, nothing to see here.")
}

//age check
// if (age >= 20) {
//     if (age <=30) {
//         console.log("spy age")
//     }
//     else {
//     console.log("Sorry, nothing to see here.")
//     }
// }
// else {
//     console.log("Sorry, nothing to see here.")
// }

//height check
// if (height >= 170) {
//     console.log("spy height")
// }
// else {
//     console.log("Sorry, nothing to see here.")
// }

//pet name ends in the letter why
// if (petName[petName.length -1] == "y") {
//     console.log("spy pet")
// }
// else {
//     console.log("Sorry, nothing to see here.")
// }



// console.log("Sorry, nothing to see here.");
// console.log("Welcome Comrade! You've passed the Spy Test!")

// doug no
// holmes no
// 20 no
// 169 no
// luna no