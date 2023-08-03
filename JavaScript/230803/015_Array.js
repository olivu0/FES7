// array의 여러가지 형태
let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arr3[0]; // [1, 2, 3]
arr3[1]; // [4, 5, 6]
arr3[2]; // [7, 8, 9]
arr3[1][2]; // 6

let arr4 = ["leebooyoung", 27, 160]; // 이렇게 여러개의 타입이 혼합되어 쓰시는 것을 권하지 않습니다
arr4[0]; // 'leebooyoung'
arr4[0][3]; // 'b'

// 2. array 길이 출력
let arr5 = [1, 2, 3];
arr5.length; // 3
arr1.length = 100;
arr1; // [1, 2, 3, empty x 97]
arr1[10] = null;
arr1; // [1, 2, 3, empty x 7, null, empty x 89]

let arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arr6.length; // 3
arr6.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr6.flat().length; // 9

let arr7 = [
  [[10, 20], [10, [10, 20]], 3],
  [[10, 20], [10, [10, 20]], 6],
  [[10, 20], [10, [10, 20]], 9],
];
arr7.flat(); // 겉의 array 빠짐
arr7.flat().length; // 9
arr7.flat().flat();
arr7.flat().flat().length; // 15
arr7.flat().flat().flat(); // 그냥 한 배열이 됨
arr7.flat().flat().flat().length; // 18

arr7.flat(3); // flat() 3번 한 것과 동일
arr7.flat(Infinity); // 배열 하나 됨
