const age=-22;
console.log(age);

// this is function declration 
validateAge(age)
function validateAge(age){
    if(age<0){
        console.log("Please Enter Valid age")
    }
    else if(age>18 && age<65){
        console.log("You are eligible for sky diving...");
    }else{
        console.log("You are not eligible for sky diving...")
    }
}



// this is function expression 
let marks=38;
const checkResult=(marks)=>{
    if(marks<40){
        console.log("you are fail");
    }else if (marks>=40 && marks <60){
        console.log("you are pass with B+ Grade")
    }else if(marks >=60 && marks<80){
        console.log("you are pass with A Garde")
    }else if(marks>=80 && marks<100){
        console.log("You are pass with A+ Grade")
    }
}

checkResult(marks);
