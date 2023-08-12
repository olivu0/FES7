const numbers = [1, 4, 3, 2, 5, 6];

numbers.sort(function (a, b) {
  return a - b;
});

const avengers = ["spiderman", "ironman", "hulk", "thor"];
avengers.sort();

// avengers.sort(function (a, b) {
//   // return a - b;
//   console.log(a, b);
//   if (a < b) {  // a - b < 0
//     return -1;
//   } else if (a > b) { // a - b > 0
//     return 1;
//   } else {
//     return 0;
//   }
// });

// student 배열 각각의 원소는 객체이다.
const student = [
  { id: 1, product: "연필", stock: 10 },
  { id: 2, product: "지우개", stock: 33 },
  { id: 3, product: "체육복", stock: 2 },
  { id: 4, product: "만연필", stock: 5 },
  { id: 5, product: "책받침", stock: 100 },
];

// 정렬 안됨
// student.sort();

student.sort(function (a, b) {
  if (a.product < b.product) {
    return -1;
  } else if (a.product > b.product) {
    return 1;
  } else {
    return 0;
  }
});
