// error 안나는 무결한 코드
// data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

let data = ["a", "z", "b", "e"];
data.sort(); // ['a', 'b', 'e', 'z']

// 사전식 정렬이어서 아래와 같은 값은 정렬되지 않는다
let data1 = [1, 11, 2, 111, 22];
data1.sort(); // [1, 11, 111, 2, 22]

// 지금 이해하라는 코드는 아니고 실무 DB로 가지고 있으라고 준 코드
data.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
data.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

// 자주 사용하는 코드
let data2 = [1, 11, 2, 111, 22];
data.sort((a, b) => a - b); // 오름차순
data.sort((a, b) => b - a); // 내림차순

// (a, b) => (a - b) 콜백함수
// a - b < 0 => a < b
// a - b > 0 => a > b 자리바꿈
// a - b = 0 => 그대로

// 원리
let test = [13, 9, 10, 2];
test.sort((a, b) => {
  console.log(a, b);
});
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지는 않다
// 9 13
// 10 9
// 2 10

let test1 = [13, 9, 10, 2];
test1.sort((a, b) => {
  console.log(a, b);
  console.log(a - b);
});

let test2 = [13, 9, 19, 2];
test2.sort((a, b) => {
  return a - b;
});
