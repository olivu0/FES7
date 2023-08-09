let x = 3;
let y = 7;
if (x === y) {
  document.write("if문으로 실행되었습니다");
} else {
  document.write("else문으로 실행되었습니다");
}

// 문제 1
// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요.
// 나이가 18세 이상이면 "안녕하세요!"를 출력하고, 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 출력하며, 10세 미만이면 “부럽다…” 를 출력합니다.

let age = parseInt(prompt("숫자 하나를 입력해 주세요!"));
if (age >= 18) {
  console.log("안녕하세요!");
} else if (age >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else {
  console.log("부럽다,,");
}

// 전역공간(어디서든 접근할 수 있는 공간) > 콘솔창에서 바로바로 접근이 가능
// 지역공간(function 내부, {} 내부에서만 존재함)
// var는 함수안에서만 지역변수가 됨

let item = true ? console.log("true") : console.log("false"); // true
// console.log('true')의 return 값이 undefined 이다.
console.log(item); // undefined

let item1 = true ? 100 : 200;
item1; //100
let item2 = false ? 100 : 200;
item2; // 200

// if문 only 실행 (문법 구문-statement)
// 삼항연산자 실행 + 값 반환(expression)

let price = 5000;
const text = `hello ${price > 6000 ? "비싸요!" : price < 3000 ? "엄청싸요!" : "적당해요!"}`;
