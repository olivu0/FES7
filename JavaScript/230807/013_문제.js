// 1. 짝수의 합
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

// 2. 머쓱이보다 키 큰 사람
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

function solution(array, height) {
  return array.filter((v) => v > height).length;
}

let result = 0;
[149, 180, 192, 170].forEach((v) => {
  v > 167 ? result++ : null;
});

// 3. 모음 제거
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let moeum = ["a", "e", "i", "o", "u"];
  return my_string
    .split("")
    .filter((v) => !moeum.includes(v)) // 모음이 아닌 것 === !
    .join("");
}

// join에서의 주의사항
[010, 5044, 2903].join(""); // '850442903'
// 010은 8진법으로 8이 나온다.
// 0으로 시작하면 앞에 0이 사라짐
// 0 다음에 숫자가 나오기 시작하면 진법으로 인식한다.
// 2진법 0b100 === 4 (b: binary)
// 8진법 0o100 === 64 (o: octa)
// 16진법 0x100 === 256 (x: hexa)
["010", "5044", "2903"].join(""); // '01050442903'

// 4.
// 1부터 100까지의 숫자 중 3의 배수만 더한 값을 출력해주세요
// 앞에서는 forEach사용, map, filter, reduce 사용
Array(100)
  .fill(0)
  .map((_, i) => i + 1)
  .filter((v) => v % 3 === 0)
  .reduce((a, c) => a + c, 0);

// 5.
// 1부터 100까지의 숫자 중 1이라는 숫자가 들어간 숫자는 모두 더해주세요
// arr.toString() 숫자 -> 문자
// arr.includes(), str.includes 둘다 가능
Array(100)
  .fill(0)
  .map((v, i) => i + 1)
  .filter((v) => v.toString().includes("1"))
  .reduce((a, c) => a + c, 0);

// 오늘 정리(암기 파일 따로)
