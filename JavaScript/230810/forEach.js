const studentList = [
  { id: 1, name: "원범", score: "great" },
  { id: 2, name: "김진", score: "so cute" },
  { id: 3, name: "혜원", score: "good good" },
  { id: 4, name: "재현", score: "too cool for school" },
];

// name의 값들을 콘솔에 출력해라
studentList.forEach(function (value) {
  console.log(value.name);
  // console.log(value['name']);
});

// 다음 배열에서 score의 값들만 모아 새로운 배열로 반환해봅시다!
// 이때 score 값에 하트💖를 추가합니다.

let scoreHeart = studentList.map((v, i) => "💖" + v.score + "💖");
