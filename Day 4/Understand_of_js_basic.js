

console.log("Hello world");

// Reserved keywords
// let,Number,if,else,switch,for,map etc.. 

// Practice on String and its properties 

let companyName="Thinkitive inc."
console.log(companyName)
console.log(companyName[0])
console.log(companyName[1])
console.log(companyName[2])
console.log("length of words : ",companyName.length)
console.log("access specific word using index: 2 -> ",companyName.charAt(2))

let name="shekhar";
let coname=name;
coname="rohan"
console.log(name,coname)
console.log(companyName.toUpperCase())
console.log(companyName.toLowerCase())

let text="a";
let text1="bc";
console.log(text.charCodeAt(0),text1.charCodeAt(1))
let studentName="Mahesh pandhare"
console.log(studentName.at(0),studentName.at(2),studentName.at(-13))
console.log(studentName.indexOf(" "))
console.log(studentName.indexOf("a"))
console.log(studentName.lastIndexOf("a"))
console.log(studentName.includes("p"))
console.log(studentName.startsWith("La"))
console.log(studentName.endsWith("re"))
console.log(studentName.slice(-2))
console.log(studentName.substring(12,-10))
console.log(studentName.replace("Mahesh","tejas"))
console.log(studentName.replaceAll("Mahesh","tejas"))
console.log(studentName.trim())

let sentence="Hey i 12am shekhar";
console.log(sentence.split(" "));
console.log(sentence.concat(" ",studentName))
let go="go"
console.log(go.concat(" ").repeat(10))
console.log(sentence.search(/Hey/))
console.log(sentence.match(/\d+/));
console.log(go.localeCompare("go"))


// Practice of Array and it's Methods

const arr=[1,2,3,4,5,6,7];
console.log(arr)
const arr1=new Array(10);
arr1[0]=20;
arr.forEach((item)=>{console.log(item)})
let copyArr=arr.map((item)=>item*2)
console.log(copyArr)
copyArr[1]="Hello";
console.log(copyArr)
console.log(arr1)
arr1.push(12)
// arr1.push(32)
arr1.pop();
arr1.pop();
console.log(arr1)
let fruits = ["Apple", "Orange"];
fruits.splice(1, 0,"Mango");
console.log(fruits);

let concatArr=arr.concat(copyArr);
console.log(concatArr);

console.log(concatArr.join("-"))
concatArr.reverse();
console.log(concatArr.join("-"))
concatArr.sort((a,b)=>a+b);
console.log(concatArr)

let number=[1,2,3,4,5,6,7];
let result=number.map((item)=>{
    return item*2;
})
let result1=number.filter((item)=>item>5)
console.log(result1)

let resultForReduce=number.reduce((sum,value)=>{
    return sum+value;
},0)

console.log(resultForReduce)

const users=[
    {
        id:1,
        name:"Shekhar",
        age:22,
        password:"1234",

    },
    {
        id:2,
        name:"Aditya",
        age:23,
        password:"Aditya@123",

    },
    {
        id:3,
        name:"Rohan",
        age:25,
        password:"Rohan@123",

    }
];

const userResult=users.map(user=>({
    id:user.id,
    name:user.name,
    age:user.age
}))

console.log(userResult)
console.log(5==="5")

let age1 = 20;

let resultage = age1 >= 18 ? "Adult" : "Minor";
console.log(resultage)


let username = null;

let displayuser = username ?? "Guest";
console.log(userResult.address?.city);
console.log(displayuser); 

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


for (let k = 1; k <= 10; k++) {
    if (k === 5) {
        break;
    }

    console.log(k);
}


for (let n = 1; n <= 5; n++) {
    if (n === 3) {
        continue;
    }

    console.log(n);
}