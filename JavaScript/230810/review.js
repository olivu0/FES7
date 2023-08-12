const avengers = ["spiderman", "ironman", "hulk", "thor"];
// 세번째 요소 삭제
avengers.splice(3, 1); // return ['thor']
avengers; // ['spiderman', 'ironman', 'hulk']
avengers.splice(2, 0, "blackwidow");
avengers; // ['spiderman', 'ironman', 'blackwidow', 'thor']
avengers.splice(1, 1, "hulk"); // 제거되는 'ironman' return
avengers; // ['spiderman', 'hulk', 'blackwidow', 'thor']

// 잘라서 새로운 배열 반환 => 원본 배열 훼손하지 않음
avengers.slice(0, 2); // ['spiderman', 'hulk']
avengers; // ['spiderman', 'hulk', 'blackwidow', 'thor']

const arr = ["나", "가", "사", "바"];
arr.sort(); // ['가', '나', '사', '바'];

// compare 함수 작동 하지 않음 => a - b 문자 작동 안함
const arr2 = ["나", "가", "사", "바"];
arr.sort(function (a, b) {
  return a - b;
}); // ["나", "가", "사", "바"]
