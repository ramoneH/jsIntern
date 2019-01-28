// Ramone Hamlett   // deGrader.js
// January 28, 2019 // JSIntern



// Generated Random numbers from 0 top 100 for a test Grade.
var grade = Math.floor(Math.random() * (+100 - +0));
// Created an array for all the tests we wanted to represent
var testTypes = ["standard" , "pop-quiz", "final", "pre-test" , "post-test"]; 
//created a function to take in the test and the grade and return true if they pass.
function didPass(grade , testTypes ){
    // Using a switch & case to iterate over each test with the grade provided
    switch(testTypes){
        case "standard" : 
            grade = Math.floor(Math.random() * (+100 - +0));
            if(grade >= 89 && grade <= 100){
                return true
            }
        break;
        case "pop-quiz" : 
            grade = Math.floor(Math.random() * (+100 - +0));
            if(grade >= 60 && grade <= 100){
                return true
            }
        break;
        case "final" : 
            grade = Math.floor(Math.random() * (+100 - +0));
            if(grade >= 90 && grade <= 100){
                return true
            }
        break;
        case "pre-test" : 
            grade = Math.floor(Math.random() * (+100 - +0));
            if(grade >= 50 && grade <= 100){
                return true
            }
        break;
        case "post-test" : 
            grade = Math.floor(Math.random() * (+100 - +0));
            console.log("your score is :   " +  grade );
            if(grade >= 75 && grade <= 100){
                return true
            }
        break;
        default : 
        return false;
 
    }
}

//created function to take the array of tes 
function degrade(){
    for( i = 0 ; i < testTypes.length ; i++ ){
        var tests = testTypes[i];
        var score = Math.floor(Math.random() * (+100 - +0));
        if(didPass(score, tests)){
            console.log("your score is :   " + score );
            console.log("the test you took was :     " + tests)
        }
    }
}
console.log(grade);
degrade();