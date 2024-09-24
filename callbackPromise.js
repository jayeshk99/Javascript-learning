// ---------------------- CallBack Hell  -------------------
function task1(callback) {
  setTimeout(() => {
    console.log("task 1 completed");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("task 2 completed");
    callback();
  });
}

function task3(callback) {
  setTimeout(() => {
    console.log("task 3 completed");
    callback();
  }, 1000);
}

// task1(task2(task3(() => console.log("all task completed"))));

//
task1(() => {
  task2(() => {
    task3(() => console.log("all task completed"));
  });
});

function doTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("task 1 completed");
      resolve(2);
    }, 500);
  });
}

function doTask2(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a", a);
      console.log("b", b);
      console.log("task 2 completed");
      resolve(3);
    }, 500);
  });
}

function doTask3(c) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c", c);
      console.log("task 3 completed");
      resolve();
    }, 500);
  });
}
doTask()
  .then(function (a) {
    return doTask2(a, "b");
  })
  .then(function (c) {
    doTask3(c);
  });
// returning the promise so that the returned value is availble in the further chain

// ---------- Promise.all ------------------]
console.log("------------ PROMISE.ALL --------------------");
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p1");
  }, 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("p2");
    reject("error p2");
  }, 2000);
});

// const rejectP2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve("p2");
//     reject("error REJECTp2");
//   }, 2000);
// });

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p3");
  }, 5000);
});

async function promiseAll() {
  try {
    const pres = await Promise.all([p1, p2, p3]);

    /*
      comment the reject line in p2 promise & uncomment the resovle line to check the result in succesfull case
    */
    console.log("pres:", pres);
  } catch (error) {
    console.log("error: in all", error);
  }
}
promiseAll();

async function allSettled() {
  try {
    const pres = await Promise.allSettled([p1, p2, p3]);
    console.log("presettled:", pres);
  } catch (error) {
    console.log("error in all settleds", error);
  }
}
allSettled();

async function race() {
  try {
    const prace = await Promise.race([p1, p2, p3]);
    console.log("race ---", prace);
  } catch (error) {
    console.log("error in race", error);
  }
}
race();
// promise.race will return the promise which settles first, if promise rejected first, then it will reject the promise
