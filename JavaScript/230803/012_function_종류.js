// 함수의 종류
// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics
// 1. 함수 선언문
function sum(x, y) {
  return x + y;
}

// 2. 함수 표현식
let sumXY = function (x, y) {
  return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));

// 3. 화살표 함수
// 3.1 return문만 있는 경우
function sum(x, y) {
  return x + y;
}

let sum = (x, y) => x + y;

// 3.2 함수의 기능 + return이 있는 경우
function sum(x, y) {
  let z = x + y;
  console.log(z);
  return z;
}
let sum = (x, y) => {
  let z = x + y;
  console.log(z);
  return z;
};

// 3.3 인자가 하나인 경우
function pow(x) {
  return x * x;
}
// x : parameter
let pow = (x) => x * x;

// 4. 즉시 실행 함수
(function () {
  console.log("즉시 실행");
});
// 즉시 실행함수는 대부분 main 함수로 만들어서 사용하는 경우가 많습니다.
function main() {
  // 10만줄
}
main();

// 즉시 실행 함수로 얻을 수 있는 이점
// 즉시 실행함수를 사용하면 main을 다시 사용할 수 없게 할 수 있다.
// 또한 전역변수 등을 사용하지 않게 할 수 있다.

// 5. 재귀함수
// 반복문으로 만들 수 있으면 재귀로 표현이 가능하고,
// 재귀로 표현이 가능하면 반복문으로 표현이 가능하더
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// factorial(5) = 5 * factorial(4); // == 5 * 24
// factorial(4) = 4 * factorial(3); // == 4 * 6
// factorial(3) = 3 * factorial(2); // == 3 * 2
// factorial(2) = 2 * factorial(1); // == 2 * 1
// factorial(1) = 1

// 6. 지역변수 전역변수
let a = 10; // 전역변수
function test() {
  console.log(a);
}
test(); // 10

let b = 10;
function one() {
  let b = 100; // 지역 변수
  function two() {
    function three() {
      console.log(b);
    }
    three();
  }
  two();
}
one(); // 100

// 자신의 공간에 해당 변수가 없으면 상위 공간에서 찾습니다.
// 못찾으면 error 입니다
// 찾으면 읽을 수 있습니다. 수정은 불가 합니다
// 수정할 수 있진 않습니다.

let x = 10;
function test() {
  let y = x + 100; // x를 단순히 읽어왔을 뿐, 실행 된다.
  return y; // 110
}

let xxx = 10;
function test() {
  xxx = xxx + 100;
  return y; // 110
}

const xx = 10;
function test() {
  xx = xx + 100;
  return xx; // error
}

// 지역변수끼리는 서로 간섭을 하지 못합니다.
function one() {
  let x = 10;
}
// 서로 영향을 끼치지 않는다
function two() {
  let x = 100;
  console.log(x);
}

one();
two();

// 다시 설명!----------------------------------------

let d = 10;
function test() {
  let d = 100;
  return d;
}
test(); //100
console.log(d); // 10

// ----------------------------------------
let e = 10;
function test2() {
  let e = 100;
  function test2() {
    e = 10000;
  }
  test2();
  console.log(e); // 10000
}
test2(); // 10000
console.log(e); // 10

// ----------------------------------------
function test1() {
  let x = 10;
  let a = 10;
}
function test2() {
  let x = 100;
  console.log(a);
}
test1();
test2(); // 10

// ----------------------------------------
function test1() {
  let x = 100;
}
function test2() {
  // 이렇게 하면 window에 등록이 된다
  // let이나 const, var 키워드를 꼭 써주자
  x = 100;
}
test1();
test2();
console.log(x); // 100 원래 나오면 안된다
console.log(window.x);

// ----------------------------------------
let batttery = 100;
function memo() {
  batttery -= 1;
  return batttery;
}
function photo() {
  batttery -= 1;
  return batttery;
}

// ----------------------------------------
// 순수함수
function add(a, b, c) {
  return a + b + c;
} // 항상 같은 값 나옴

// 순수함수 아님. c에 따라 값이 달라짐
let c = 10;
function add(a, b) {
  return a + b + c;
}
