var a = 10;
let b = 10;
function abc() {
  var a = 20;
  let b = 20;
}
{
  var a = 30;
  let b = 30;
}
abc();
console.log(a);

// ----------------------------  CLOSURE   -----------------------------
function x() {
  var a = 7;
  function y() {
    console.log("a", a);
  }
  return y;
}

var z = x();
console.log("z", z);
z();

// ----------

function x1() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log("i", i);
    }, i * 1000);
  }

  console.log("Namaste Javascript");
}
