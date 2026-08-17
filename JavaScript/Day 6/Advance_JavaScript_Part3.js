// // console.log(BigInt(Number.MAX_SAFE_INTEGER)+5n)
// // console.log(Number.MIN_SAFE_INTEGER)


// console.log("We are learn About the Map")

// const student=new Map();
// console.log(student)

// student.set("name","Shekhar")
// student.set("age",22)
// student.set("age",12) // update the value 
// console.log(student.get("age"))
// // it check key is exist or not 
// console.log(student.has("name1"))
// student.set("city","Pune")
// console.log(student.delete("name"))
// console.log(student)
// student.clear();

// console.log(student)

// let a=10;
// let b=a;
// a=20;
// b=11;
// console.log("a=",a,"b=",b)

let student={
    name:"",
    age:10
}

console.log(Object.keys(student).length)
let num=Object.keys(student).length
//infinity execution
// for (let i=0;i<Object.keys(student).length;i++){
//     student[i]=i;
//     console.log(student)
// }
console.log(student)
student.city="Pune";
console.log(student)
const copyobj={
    label:"empty"
}
const obj={
    name:"Apple",
    colour:"red",
    city:"kashmir",
    price:230,
    true:"IsLoggIn",
    101:412,
    "hello":"ssgg",
    copyobj:"labelData"
        
}
console.log(obj)
delete obj.price
console.log(obj)
console.log(Object.keys(obj));
let fruit=new Map();

fruit.set("Apple","red");
fruit.set("banana","Yellow")
fruit.set("cheery","red")
console.log(fruit)
console.log(fruit.size)
console.log(fruit.has("banana1"))
console.log(fruit.delete("cheery"))
console.log(fruit)


const obj2={
    name:"Shekhar",
    hello:22,
    address:{
        city:"Pune"
    }
}

let {name,hello}=obj2;
console.log(name,hello)
//copy object
// let copyobj2={...obj2} // make it shallow copy nested object still pointing to each other
let copyobj2=structuredClone(obj2) // make this deep clone
obj2.address.city="kerla";
console.log(obj2)
console.log(copyobj2)

// let map=new Map(
//     ["name","Shelke"],
//     ["age",22]
// )

// let a = 10;

// {
//     let a = 20;
//     let b = 30;

//     console.log(a);
// }

// console.log(a);


var a = 10;

function test() {
    var a = 20;

    if (true) {
        let a = 30;
        var b = 40;

        console.log(a);
        console.log(b);
    }

    console.log(a);
    console.log(b);
}

test();

console.log(a);
// console.log(b);

function test(){
    console.log("hello ")
    
}

let result=test();

console.log(typeof result)

const user={
    name:"Shekhar"
}

console.log(user.adreess?.city)

const map2=new Map([
    ["name","Shekhar"],
    ["age",25],
    ["city","pune"]]
)

for(let [key,value] of map2.entries()){
    console.log(key,value)
}

function fetapi(){
    return new Promise((resolve,reject)=>{
         fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((responce)=>{
            if(!responce.ok){
                reject("APi is filed....")
                return;
            }
                resolve(responce.json())
            
        }).then((user)=>{
            resolve(user)
        })
        .catch(()=>{
            reject(error)
        })
    })
}

fetapi().then((usersData)=>{
    for(let key in usersData){
        console.log(key,usersData[key])
    }
    
}).catch((error)=>{
    console.log(error)
})
