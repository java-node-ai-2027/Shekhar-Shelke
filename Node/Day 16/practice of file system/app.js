import { Worker } from "worker_threads";

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
    console.log("Result:", result);
});

console.log("Main thread is still running");