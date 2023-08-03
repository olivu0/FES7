// 문제1: 더하기 빼기 곱하기 나누기 함수 만들기
function add(x, y) {
  return x + y;
}

add(1, 2);

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

// 문제2: '10,000,000,000'와 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어주세요
// 잘했어용 :)
function stringtoNum(str) {
  return parseInt(str.replaceAll(",", ""));
  // let answer = parseInt(str.replaceAll(",", ""));
  // return answer;
}

// 문제3: 입력된 문자열을 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요
// input: world
// ouput: ['w', 'o', 'r', 'l', 'd']
// split: 문자열을 배열로 변환
function printAndsplit(str) {
  console.log(str);
  return str.split(""); // return === 출력값
}

// 문제4: 두 개의 숫자가 입력되면 2개의 숫자를 더하고 더한 두 개의 숫자를 곱하는 함수를 만들어주세요
// input: 1, 2
// output: (1+2) * (1+2) = 9

// 4.1 풀이
function addMul(a, b) {
  let add = a + b;
  return add * add;
}

// 4.2 풀이
function add(a, b) {
  return a + b;
}
function addMul(a, b) {
  let sum = add(a, b) * add(a, b);
  return sum;
}

// 4.3 풀이
// add함수 밖에서 읽지 못함. 안에서만 재사용함 => 메모리 효율 극대화
function addMul(a, b) {
  // 메모리 효율을 위해 함수를 내부에서 만들어서 사용
  function add(a, b) {
    return a + b;
  }
  let sum = add(a, b) * add(a, b);
  return sum;
}

// 문제5: x**2 + 4x -12를 구해주는 함수를 만들어주세요
// input: 3
// output: 9 + 12 - 12 = 9
function equation(x) {
  return x ** 2 + 4 * x - 12;
}

// 문제6:
