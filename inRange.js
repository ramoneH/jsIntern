// Ramone Hamlett   // inRange.js
// January 28, 2019 // JSIntern

// Created function to check if the two numbers were in range
// How you like me now .

function inRange(num1,num2){
    // If these two numbers aren't greater than 50 - 99
    // dont proceed
    if(num1 >= 50 && num1 <= 99 ){
        // output something saying it is 
        console.log(num1 + "  is in Range")
        if(num2 >= 50 && num2 <= 99){
        // output something saying it is
            console.log(num2 + "  is in Range")
        }
    }
}
// Running the Application || Function. 
inRange(60, 62);
