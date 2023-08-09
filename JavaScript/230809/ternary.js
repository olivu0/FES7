// 문제 2 if문
// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요.
// 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.

let score = parseInt(prompt("당신의 점수는 몇점인가요?"));
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("강해져서 돌아와라!");
}

// 문제 2 삼항연산자 표현식 => 값을 받을 수 있는 변수 하나 정해줌 grade
let score2 = parseInt(prompt("당신의 점수는 몇점인가요?"));
let grade = score2 >= 90 ? console.log("A") : score2 >= 80 ? console.log("B") : score2 >= 70 ? console.log("C") : score2 >= 60 ? console.log("D") : console.log("강해져서 돌아와라!");

let grade2 = score2 >= 90 ? "A" : score2 >= 80 ? "B" : score2 >= 70 ? "C" : score2 >= 60 ? "D" : "강해져서 돌아와라!";

console.log(grade2);
