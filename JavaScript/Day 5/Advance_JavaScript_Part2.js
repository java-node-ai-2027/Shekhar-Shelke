console.log("Hello world ")
console.log("This is Callback Examples.")
function getUser(callback){
    setTimeout(()=>{
        callback({id:101,name:"Shekhar"})
    },1000)
}


function getPost(UserId,callback){
    setTimeout(()=>{
        callback(["post 1","post 2"])
    },2000)
}

function getComment(Post,callback){
    setTimeout(()=>{
        callback(["comment 1","comment 2"])
    },2000)
}

getUser((user)=>{
    console.log(user.id)
    getPost(user.id,(posts)=>{
        console.log(posts)
        getComment(posts[0],(Comments)=>{
            console.log(Comments)
        })
    })
})

console.log("above example replace into promises way.")

function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({id:101,name:"Shekhar"})
        },1000)
    })
}

function getPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["Post 1","Post 2"])
        },2000)
    })
}
function getComment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["Comment 1","Commnet 2"])
        },2000)
    })
}

getUser()
.then((user)=>{
    console.log(user)
    return getPost(user.id)
}).then((post)=>{
    console.log(post)
    return getComment(post[0])
})
.then((comments) => {
    console.log(comments);
})
.catch((error) => {
    console.log(error);
});

// // consuming Promise example 
Promise.resolve(10).then((value)=>{
    return value*2;
}).then((value)=>{
    return value * 2;
}).then((v)=>{
    console.log(v)
})

// // Example of Creating Settled Promises

const cache = {
    user: "Shekhar"
};

async function loadUser() {
    const user = await getUser();
    console.log(user);
}

function getUser() {
    const cachedUser = cache.user;

    if (cachedUser) {
        return Promise.resolve(cachedUser);
    }

    return fetch("/api/user")
        .then(response => response.json());
}

loadUser();


function sum(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]

    }
    console.log(arguments)
    console.log(sum)
}
sum(10,20,30)

//arrow function doesn;t have their own arguments
let sum1=()=>{
 let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]

    }
    console.log(sum)

}
sum1(10,50,10)


// //Learn About the Object

const user={
    name:"Shekhar",
    age:22,
    city:"pune"
}
let proper="name";
console.log(user[proper])
for(let items in user){
    console.log(user[items])
}

user.isActive=true;
console.log(user)
delete user.isActive;
console.log(user)

const student={
    name:"Harshad",
    age:22,
    class:12,
    greet:function (){
        console.log(`Hello i am ${this.name} ${this.age}`)
    },
    address :{
        city:"Pune",
        state:"Maharashtra"
    }
}

student.greet()


function getLogin(callback){
    setTimeout(()=>{
        console.log("Login successfully...")
        callback();
    },2000)
    console.log("login end ")
}

function getUser(){
    setTimeout(()=>{
        console.log("User login data...")
        
    })
}

getLogin(()=>{
    getUser();
})


// running parallel promises 



// async function fetchApi(){
//     const start = performance.now();
//     const PhotoData=await fetch("https://jsonplaceholder.typicode.com/photos")
//     const UserData=await fetch("https://jsonplaceholder.typicode.com/users")
//     const PostsData=await fetch("https://jsonplaceholder.typicode.com/posts")

//     const end = performance.now();
//     console.log(`Execution time: ${end - start} ms`);

// }
// using promise all 
async function fetchApi() {
    const start = performance.now();
    const [user, products, notifications] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/photos"),
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
  ]);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);

}

fetchApi()









