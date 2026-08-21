async function fetchUsers() {
  console.log("1. Function started");

  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  console.log("2. Response received");

  const users = await response.json();

  console.log("3. Users received");

  console.log(users);
}

console.log("A");

fetchUsers();

console.log("B");

const start = performance.now();

let a = 10;

function test() {
  //   console.log(a);
  let a = 20;
  console.log(a);
}
test();
console.log(a);
const end = performance.now();

console.log(end - start);

let date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());

let date1 = new Date("2026-08-13");
// console.log(date1.getHours())
console.log(date1.toDateString());
console.log(date1.toISOString());

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}
function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}
function step4(callback) {
  setTimeout(() => {
    console.log("Step 4 completed");
    callback();
  }, 1000);
}

function step5() {
  setTimeout(() => {
    console.log("Step 5 completed");
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        step5();
      });
    });
  });
});

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

function step4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 4 completed");
      resolve();
    }, 1000);
  });
}

function step5() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 5 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => step4())
  .then(() => step5())
  .then(() => {
    console.log("All step is completed");
  })
  .catch((error) => {
    console.log(error);
  });

async function runSteps() {
  try {
    await step1();
    await step2();
    await step3();
    await step4();
    await step5();

    console.log("All steps completed");
  } catch (error) {
    console.log("Error:", error);
  }
}

runSteps();

function test2() {
  setTimeout(() => {
    return Promise.resolve("execute the function test 2");
    console.log("Hello");
  }, 2000);
}

async function sampleFun() {
  console.log("start the sample function ");
  const result = await test2();
  console.log("result");
}

console.log("Start");
sampleFun();
console.log("End");

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve("Data from Step 1");
    }, 1000);

    console.log("end fun 1");
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      console.log(data);

      resolve("Data from Step 2");
    }, 1000);
    console.log("end fun 2");
  });
}

console.log("Start");

step1()
  .then((data) => {
    console.log("Promise 1 completed");

    return step2(data);
  })
  .then((data) => {
    console.log("Promise 2 completed");
    console.log(data);
  });

console.log("End");

async function test() {
  console.log("1");

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  console.log("2");
}

test();

console.log("3");

function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Shekhar");
    }, 2000);
    console.log("getdata fun..");
  });
}

async function setted() {
  console.log("Start settalment ");
  let data = await getdata();

  console.log("data process", data);
}

setted();

function cool() {
  console.log("start");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Shekhar");
    }, 1000);
    console.log("Hello");
  });
}

cool().then((data) => {
  console.log(data);
});

let num = 126.329;
console.log(num.toFixed(3));
// console.log(num.toPrecision(3))
console.log(num.toLocaleString());

// let a=0.1+0.2;
// let b=0.3

// console.log(Math.abs(a-b)<Number.EPSILON)

function login(callback) {
  setTimeout(() => {
    console.log("login successfully....");
    callback({ id: 1, name: "shekhar" });
    console.log("Hello");
  }, 2000);
}
function getUser(user, callback) {
  setTimeout(() => {
    console.log("user info : ", user.name);
    callback(user.id);
  }, 2000);
}
function getPost(id, callback) {
  setTimeout(() => {
    console.log(id, "load post ");
    callback(id);
  }, 2000);
}

function comments(id) {
  setTimeout(() => {
    console.log(id, "Comment loaded");
  }, 2000);
}

login((user) => {
  getUser(user, (id) => {
    getPost(id, (id) => {
      comments(id);
    });
  });
});

async function fetchAPI() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await responce.json();

  return data;
}

async function getData() {
  const data = await fetchAPI();
  console.log(data);
}

getData();

function fetchApi() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json(),
  );
}

fetchApi()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

console.log("A");
const promise = new Promise((resolve) => {
  console.log("B");
  resolve("DONE");
});

console.log("C");

promise.then((data) => console.log(data));

//fetch multiple

async function fetchAllAPI() {
  const start = performance.now();
  // const [users,posts,todos]=await Promise.all([
  //     fetch("https://jsonplaceholder.typicode.com/users/1"),
  //     fetch("https://jsonplaceholder.typicode.com/posts/1"),
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  // ])

  const users = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const end = performance.now();
  console.log(end - start);
}

fetchAllAPI();
