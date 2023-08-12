let value = [100, 200, 50, 400, 900];
function maximum(value) {
  let max = 0;
  for (let i = 0; i < value.length; i++) {
    if (max < value[i]) {
      max = value[i];
    }
  }
  return max;
}
console.log(maximum(value));

let max2 = Math.max.apply(null, value);
console.log(max2);

// 문제 1
// 전달받은 객체의 키와 벨류값을 모두 출력하는 for문을 만들어보세요
const person = {
  name: "재현",
  age: 20,
  gender: "male",
};

for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

const props = Object.keys(person); // props는 배열형태

for (let i = 0; i < props.length; i++) {
  console.log(`key: ${props[i]}, value: ${person[props[i]]} `);
}

// do-while문
let input;

do {
  input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");
