// 별표 ****

// 1. 비교 연산을 했을 때
let x = 3;
let y = 5;
console.log(x > y);

// 2. 논리 연산을 했을 때, 각 비교값이 true나 false인 경우
// (true나 false가 아닌 경우 단락회로 평가가 일어남)
let x2 = true;
let y2 = false;
console.log(x2 && y2); // false

// 3. true나 false로 평가되는 것들: false, 0, undefined, null, '', NaN
if (value) {
  // value가 true일 때 실행
  // 그럼 어떤 value가 true 일까?
}

Boolean("hello"); // true

if (Boolean("hello")) {
  console.log("실행됨"); // 실행
}

if ("hello") {
  console.log("실행됨"); // 실행
}

Boolean(""); // false
Boolean(" "); // true

Boolean(0); // false
Boolean(-1); // true, 0을 제외한 숫자 모두 true
Boolean(100); // true, 0을 제외한 숫자 모두 true

Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
// Boolean보다 !!많이 사용한다, true false인지 구분할 때

// 4. javascript에서 나를 힘들게하는 true, false
x = [1, 2, 3];
x.pop();
x.pop();
x.pop();

Boolean([1, 2, 3]); // true
Boolean([]); // true;

Boolean({ one: 1 }); // true
Boolean({}); // true

null == undefined; // true
null === undefined; // false

null > undefined; // false, 다른 비교도 false
null < 100; // true
null > 100; // false
null == 0; // false
undefined < 100; // false 숫자와 비교는 다 false
