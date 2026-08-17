// console.log(" Asynchronous Opreations");
// async function getUser(){
//     const response= await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//         console.log("Half task is completed..."),
//         simple()
      
//     );
//     console.log(response)
//     const user=await response.json();

//     console.log(user);
//     console.log("END")
// }
// function simple(){
//     console.log("Hello I am Calling....")
// }

// getUser();
// console.log("Program continue....")


//create a promise example 
// let getlogin=(()=>{
//    return new Promise((res,rej)=>{
//     const success=true;

//     if(success){
//         res("User sucessfully login")
//     }else{
//         rej("Invalid user...!")
//     }
//    });
// })

// getlogin().then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// })  



// console.log("Pattren of asynchronus opretions: ")

// console.log("Pattren #1 Callback : ")
// function greet(name,callback){
//     console.log("Exxcution is started...")

//     setTimeout(()=>{
//         console.log("Hello",name);
//          callback();
//     },2000)
//     console.log("Heyy")
   
// }

// function finished(){
//     console.log("Execution is Finish...");
// }
// function secgreet(){
//     setTimeout(()=>{
//        console.log("processing....") 
//        finished()
//     },2000)
// }



// greet("Shekhar",finished);
// secgreet();
// console.log("End..")


// console.log("Pattren #2 Promises & it is cover promises topic : ")
// let success=false
// function PlaceOrder(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({orderId:101,product:"laptop"})
//         },2000)
//     });
// }

// function makePayment(order){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("payment is succesfully : ",order.orderId);
//             if(success){
//                rej("Order is Full wait same time....",makePayment) 
                
//             }else{
//                     res({
//                 orderId:order.orderId,
//                 paymentId:1002
//             })
//             }
            
//         },2000)
//     });
// }

// function shipOrder(payment){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Order ship")
//             resolve({
//                 ...payment,
//                 status:"Shipped"
//             })
//         },2000)
//     })
// }

// PlaceOrder().then((order)=>{
//     console.log("Order Placed:",order);
//     return makePayment(order)
// }).then((payment)=>{
//     console.log("Payment : ",payment)
//     return shipOrder(payment)
// }).then((result)=>{
//     setTimeout(()=>{

//     console.log("Final result : ",result)
//     },2000)
// }).catch((err,callback)=>{
//     console.log(err)    
// })

    // console.log("Pattren #3 Async & Await is cover Async and await topic : ")

    // function getData(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve("Data received..");
    //         },2000)
    //     })
    // }

    // async function fatchData(){
    //     let result= await getData();
    //     console.log(result);

    // }

    // fatchData();

    
// Named Functions to Rescue*

// setTimeout(()=>{
//     console.log("this is Anonymous function ")
//     console.log("Hello")
// },2000)

// function sayHello(){
//     console.log("Hello")
// }

// setTimeout(sayHello,1000)
// setTimeout(sayHello,3000)









