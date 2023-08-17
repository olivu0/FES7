//   디스트럭쳐링        객체 리터럴
//   value: 변수       변수: value
// let { one: myNum } = { one: 1 };
// console.log(myNum); // 1

// let { one: one } = { one: 1 };
// console.log(one); // 1

// let { one } = { one: 1 };

// 콜론을 통해 변수 추가 생성
let { one, two, three, four } = { one: 1 };
console.log(one); // 1
console.log(two); // undefined
console.log(three); // undefined
console.log(four); // undefined

/**
let food1, food2, food3;

const categories = {food1 : '과일', food2 : '채소', food3 : '육류'};

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;
*/

// const { food1: food1, food2: food2, food3: food3 } = { food1: "과일", food2: "채소", food3: "육류" };
/*
// 키의 이름과 동일하게 해야함
const { food1, food2, food3 } = { food1: "과일", food2: "채소", food3: "육류" };
food1; // 과일
food2; // 채소
food3; // 육류
*/

const obj = { food1: "과일", food2: "채소", food3: "육류" };
function objReturn() {
  return obj;
}
const { food1, food2, food3 } = objReturn;

// 배열의 디스트럭쳐링
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const [d, e, f, g, h, i] = arr;
console.log(d); // 1
console.log(e); // 1
console.log(f); // 1
console.log(g); // undefined
console.log(h); // undefined
console.log(i); // undefined

// 함수의 디스트럭쳐링
// 1) 인자로 배열을 줌
function myFunc([a, b]) {
  console.log(a); // 1
  console.log(b); // 2
}
const arr1 = [1, 2];
myFunc(arr1);

// 2) 인자로 객체를 줌
function myFunc({ a, b }) {
  console.log(a); // 1
  console.log(b); // 2
}
const obj1 = { a: 1, b: 2 };
myFunc(obj1);
