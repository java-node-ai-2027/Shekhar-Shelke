async function fetchapi(){
    //  const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
     const data = await res.json();
     return data;

}
const data =await fetchapi()
console.log(data)


function counter() {
    let count = 0;

     function inner() {
        count++;
        console.log(count);
    };
    return inner;
}

const increment = counter();

increment();
increment(); 
increment();


function createBackAccount(initalBalance){
    let balance=initalBalance;

    return {
        deposite(amount){
            balance+=amount;
        },
        withdraw(amount){
            balance-=amount
        },
        checkbalance(){
            return balance;
        }
    }
}

const shekhar=createBackAccount(10000);
shekhar.deposite(230)
shekhar.withdraw(132)
console.log(shekhar.checkbalance())
shekhar.deposite(2020)
console.log(shekhar.checkbalance())

const arr=[1,2,3];
const arr1=arr;
arr[0]=2
arr1[2]=5
console.log(arr,arr1)

const exarr=[...arr]
exarr[0]=4
exarr[2]=3
exarr[3]=5

console.log(exarr)