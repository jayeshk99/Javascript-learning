let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolved');
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 rejected');
  }, 500);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 resolved');
  }, 800);
});
Promise.all([p1, p2])
  .then((res) => console.log(' all res', res))
  .catch((err) => console.log('all error', err));

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log('allSettled res', res))
  .catch((err) => console.log('allSettled error', err));

Promise.race([p1, p2, p3])
  .then((res) => console.log('race res', res))
  .catch((err) => console.log('race error', err));

const debounce = (cb, delay) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(arguments);
    }, delay);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return function () {
    if (!timer) {
      cb(arguments);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
