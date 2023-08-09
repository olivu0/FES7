new Date(); // Wed Aug 09 2023 14:28:03 GMT+0900 (한국 표준시)
const time = new Date(); // undefined
time; // Wed Aug 09 2023 14:28:03 GMT+0900 (한국 표준시)

typeof time; //object
time.getDate(); // 9
time.getFullYear(); // 2023
time.getDay(); // 3 (수요일)

const obj = { one: 1, two: 2 };
Object.keys(obj); // ['one', 'two']
obj.hasOwnProperty("two"); // true

// expression: 표현식
// statement: 문

switch (new Date().getDay()) {
  case 1:
    document.write("월요일입니다.");
    break;
  case 2:
    document.write("화요일입니다.");
    break;
  case 3:
    document.write("수요일입니다.");
    break;
  case 4:
    document.write("목요일입니다.");
    break;
  case 5:
    document.write("금요일입니다.");
    break;
  default:
    document.write("금금요일입니다. 주말이 뭐죠?");
    break;
}

let price = 0;
let menu = "카페라떼"; // 메뉴를 바꿔보세요!

switch (menu) {
  case "아메리카노":
    price = 4000;
  case "카페라떼":
    price = 5000;
  case "바닐라라떼":
    price = 6000;
  case "콜드브루":
    price = 5500;
  case "딸기라떼":
    price = 7000;
  case "레몬에이드":
    price = 6500;
  case "에스프레소":
    price = 3500;
  case "루이보스":
    price = 4500;
  default:
    console.log("메뉴를 정확히 입력하세요.");
}

price; // 4500

// 문제 2 switch문
// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요.
// 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.

let score = parseInt(prompt("당신의 점수는 몇점인가요?"));

switch (true) {
  case score >= 90: // true or false
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  default:
    console.log("강해져서 돌아와라!");
}
