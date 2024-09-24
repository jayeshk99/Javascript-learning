const btn = document.getElementById("debounceButton");
const btnText = document.getElementById("btnCount");
const funcText = document.getElementById("funcCount");

function abc(...args) {
  funcText.innerHTML = parseInt(funcText.innerHTML) + 1;
  console.log("args from func", args);
}
btn.addEventListener("click", () => {
  btnText.innerHTML = parseInt(btnText.innerHTML) + 1;
  console.log("button clicked");
  countDebounce("arg1", "arg2");
});

const myDebounce = (cb, delay) => {
  console.log("my debounce", cb, delay);
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const countDebounce = myDebounce(abc, 300);

// ------------- THROTTLE ---------------

const tBtn = document.getElementById("throttleButton");
const tBtnText = document.getElementById("tBtnCount");
const tFuncText = document.getElementById("tFuncCount");

function bcd(...args) {
  tFuncText.innerHTML = parseInt(tFuncText.innerHTML) + 1;
  console.log("args from Tfunc", args);
}
tBtn.addEventListener("click", () => {
  tBtnText.innerHTML = parseInt(tBtnText.innerHTML) + 1;
  console.log("button clicked");
  countThrottle("arg1", "arg2");
});

const myThrottle = (cb, delay) => {
  let timer;
  return function (...args) {
    if (!timer) {
      cb(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
const countThrottle = myThrottle(bcd, 600);
