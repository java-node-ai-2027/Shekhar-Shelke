const { error } = require("node:console")

try{
    let username=undefined
const name1="shekhar"
// name1()
console.log(name2)


}catch(error){
    console.log(error.name)
    console.log(error.message)
    // console.log(error.stack)
}

// try{
//     let a=10;
//     if(a<18){
//         throw new error("age is not eligible")
//     }
// }catch{

// }

function divide(a,b){
    
    if(a<18){
        throw new TypeError("age is not eligible")
    }
    return a+b;
}
try{
console.log(divide(12,9))
}catch(error){
    console.log(error.message)
}finally{
    console.log("finally i am execute..")
}
console.log("end program")

