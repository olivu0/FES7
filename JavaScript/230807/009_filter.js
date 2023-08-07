// filter **
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((v) => v % 2 === 0);

// filter는 return값이 true인 것만 모아서 새로운 배열을 만든다.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr1.filter((v) => {
  return true;
});

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = arr2.filter((v) => {
  return false;
});

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr3.filter((v) => {
  return v > 5;
});

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = arr4.filter((v) => {
  return v % 2 !== 0;
});

// filter는 메서드 체이닝으로 많이 사용된다
