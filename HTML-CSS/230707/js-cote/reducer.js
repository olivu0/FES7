const number = [1, 2, 3, 4, 5];

function reducer(accumulator, currentValue, currentIndex) {
  const result = accumulator + currentValue;
  console.log(
    "accumulator = ",
    accumulator,
    ", currentValue = ",
    currentValue,
    ", currentIndex = ",
    currentIndex,
    ", result = ",
    result
  );
  return result;
}

// initialValue가 없을 경우
number.reduce(reducer);

// 동작
// accumulator = 1, currentValue = 2, currentIndex = 1, result = 3
// accumulator = 3, currentValue = 3, currentIndex = 2, result = 6
// accumulator = 6, currentValue = 4, currentIndex = 3, result = 10
// accumulator = 10, currentValue = 5, currentIndex = 4, result = 15

// initialValue가 있을 경우
number.reduce(reducer, 0);

// 동작
// accumulator = 0, currentValue = 1, currentIndex = 0, result = 1
// accumulator = 1, currentValue = 2, currentIndex = 1, result = 3
// accumulator = 3, currentValue = 3, currentIndex = 2, result = 6
// accumulator = 6, currentValue = 4, currentIndex = 3, result = 10
// accumulator = 10, currentValue = 5, currentIndex = 4, result = 15

const onetwothree = [1, 2, 3];
let result2 = onetwothree.map((v) => {
  if (v % 2) {
    return "odd";
  }
  return "even";
});

let result3 = onetwothree.reduce((acc, cur) => {
  acc.push(cur % 2 ? "홀수" : "짝수");
  return acc;
}, []);

let result4 = onetwothree.reduce((acc, cur) => {
  if (cur % 2) {
    acc.push(cur);
  }
  return acc;
}, []);
