console.log("Hello")
 let a=10;
function outer(){
   
   
    function inner(){

        return ++a;
    }
    return inner;
}

const obj=outer();
console.log(obj());
console.log(obj());
console.log(obj())

let name="Shekhar"

function changeName(value){
    value="Rahul"
    
}

// console.log(changeName(name))
// console.log(name)

const users={
    name:"mahesh"
}

function chnageUser(obj){
    obj.name="Rohan"
};

chnageUser(users)

console.log(users)
console.log(users.name)



function createBankAccount(){
    let balance=10000;

    return{
        getBalance(){
            return balance;
        },
        deposit(amount){
            balance=balance+amount
        },
        withdraw(amount){
            balance-=amount;
        }
    }
}

const acccount=createBankAccount();
console.log("Total amt : ",acccount.getBalance())
acccount.deposit(1200)
console.log("Total amt : ",acccount.getBalance())
acccount.withdraw(165)
console.log("Total amt : ",acccount.getBalance())


//making class with constuctor in js 
class user{
    constructor(str){
        console.log("Hello i am constuctor..")
    }
}

const objp=new user("SHekhar");

function parent(){
    let a=10;
    console.log("Parent variable a is : ",a)
    function child(){
        let a=20;
        console.log("child variable a is : ",a)

    }
    child();
}

parent();
