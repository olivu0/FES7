// https://school.programmers.co.kr/learn/courses/30/lessons/120807
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
let num1 = 3;
let num2 = 5;
let answer = num1 === num2 ? 1 : -1;

function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
// includes, indexOf, search, replace(paullab ceo leehojun 에서 ceo를 찾는다고 했을 때, ceo를 replace해서 문자열이 줄어들었거나 늘어났으면 그 문자가 포함되어 있는지 아닌지 알 수 있음)

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 4문제 / 7문제 합격
// maximum level 3

// https://school.programmers.co.kr/learn/courses/30/lessons/120819?language=javascript
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다.아이스 아메리카노는 한잔에 5, 500원입니다.머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

let money = "15,000";

let americano = parseInt(parseInt(money.replaceAll(",", "")) / 5500);
let change = parseInt(money.replaceAll(",", "")) % 5500;

let result = [americano, change];

function solution(money) {
  return [~~(money / 5500), money % 5500];
}

function solution(money) {
  let answer = [];
  answer.push(parseInt(money / 5000));
  answer.push(money % 5500);

  return answer;
}
