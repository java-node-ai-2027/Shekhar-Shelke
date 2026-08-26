function microTaskQueued() {
  console.log('microTaskQueued');
}

function promiseResolved() {
  console.log('promiseResolved');
}

function nextTickExecuted() {
  console.log('nextTickExecuted');
}

function promiseRejected() {
  console.log('promiseRejected');
}

Promise.resolve().then(promiseResolved);

process.nextTick(nextTickExecuted);
  
queueMicrotask(microTaskQueued);

Promise.reject().catch(promiseRejected);