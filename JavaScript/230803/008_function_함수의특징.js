function add(a, b) {
  let answer = a + b;
  // return undefined; 생략되어 있음
}
add(10, 20); // undefined

function add(a, b) {
  let answer = a + b;
}

let result1 = add(10, 20); // undefined

///////////////

function add(a, b) {
  let answer = a + b;
  return;
}

let result2 = add(10, 20); // undefined

///////////////

function add(a, b) {
  let answer = a + b;
  return undefined;
}

let result3 = add(10, 20);

/////////////////////
function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return; // return되면 함수는 종료됨. 밑의 것 나오지 않음
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  // 이렇게 에러가 나는 코드가 있어도 javascript 엔진이 보지 않는 공간에서는 에러를 출력하지 않습니다
  console.logi("hello");
  console.loghojun("hello");
  console.logjun("hello");
}

// 잊으셔도 됩니다!
// 어려운데 심지어 중요하지도 않아요!
// 단락평가에서도 마찬가지 입니다
function errorCode() {
  console.logbooyoung("error"); // 실제 error 나는 코드
}
let value = true;
// error 코드를 실행시키지 않았다.
let result = true || errorCode(); // true

// ------------------------------------------------------------------------
// return (반환보다는 종료의 느낌으로 쓰는 코드)
function test() {
  if (true) {
    if (false) {
      // 위에 true로도 바꿔봐~
      console.log("1");
      return;
    }
  }
  console.log("2");
  return;
}

// ------------------------------------------------------------------------

// 함수의 이름은 결국 변수이다!
console.log("hello"); // 'hello'는 argument
// leeboo라는 변수가 console.log를 가리키고 있는 것
let leeboo = console.log;
leeboo("hello");

// test도 메모리 공간 어디인가에 저장되어 있음
// 즉, test가 ()~ 를 가리키고 있는 것
function test() {
  // ()~ : 메모리 공간 어디인가에 저장되어 있음
  console.log("hello");
}
a = test; // a는 test를 가리키는 것 아니고 ()~를 가리키고 있는 것임
test();
let booyoung = test;
booyoung();

// ------------------------------------------------------------------------

// 함수의 이름은 결국 변수이기 때문에 argument로 전달할 수 있을까?
// 또는 return 값으로 전달할 수 있을까?
// 답은 네! 입니다

function add(a, b) {
  return a + b;
}

let x = 10;
let y = 20;
console.log(add(x, y));

// 1. 함수를 argument로 전달
// 아래와 같이 ***argument로 전달된 함수***를 '콜백함수'라고 부른다
// 내가 널 나중에 불러줄께(나중에 호출해줄게) === 콜백함수
function add(x, y) {
  // 콜백함수
  return x + y;
}

// add를 받을 parameter z를 만듬
function addAndMultiply(x, y, z) {
  let sum = z(x, y) * z(x, y);
  return sum;
}

addAndMultiply(1, 2, add); // argument로 전달된 함수 === 콜백함수

// 2. 함수를 리턴값으로 전달(스코프와 클로저를 배우고 나서 다시 다룰 예정입니다)
function one(x) {
  function two(y) {
    return x + y;
  }
  return two;
}

let result4 = one(10); // x
// function one(10) {
//   function two(y) {
//     return 10 + y;
//   }
//   return two;
// }

// result 함수 (return된 것)
//   function two(y) {
//     return 10 + y;
//   }

result4(100); // y에 100이 들어가는 것
// 110

// two, result 모두 이것을 가리키고 있음
function result4(y) {
  return 10 + y;
}

result4(100); // 이 단계에서 x 에 대한 권한 없음
