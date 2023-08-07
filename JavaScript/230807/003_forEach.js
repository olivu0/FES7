// forEach(콜백함수)
let arr = [10, 20, 30, 40, 50];
arr.forEach((value, index, array) => {
  console.log(value, index, array);
});

// 문제1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성한다.
let arr1 = [10, 20, 30, 40, 50];
let sum1 = 0;
arr1.forEach((v) => {
  sum1 += v;
});
console.log(sum1);

// 문제2. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성해라
let arr2 = [10, "20", 30, "40", 50];
let sum2 = 0;
arr2.forEach((v) => {
  sum2 += parseInt(v);
});
console.log(sum2);

// 문제3. forEach를 사용해서 짝수 인덱스의 값을 모두 더해라
// 풀이1. if문
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum3 = 0;
arr.forEach((v, i) => {
  if (i % 2 === 0) {
    sum3 += v;
  }
});
console.log(sum3);

// 풀이2 : 삼항연산자
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum4 = 0;
arr.forEach((v, i) => {
  i % 2 === 0 ? (sum4 += v) : null;
});
console.log(sum4);

// 문제3 : 1부터 100까지의 숫자를 다 더해주세요
//Array(100).fill(0)보다 map을 더 많이 사용한다
Array(100)
  .fill(0)
  .forEach((v, i) => {
    console.log(i + 1);
  });

let sum5 = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    sum5 += i + 1;
  });
sum5; // 5050, 수학 수식으로 계산되는 코드는 이렇게 순회를 돌면서 풀지 않아도 됨.

// let n = 100;
// (n * (n + 1)) / 2;

// 문제 4
// https://school.programmers.co.kr/learn/courses/30/lessons/120835
// 진료 순서 정하기
// 한글 풀이
// userInput = [3, 76, 24]라면 정렬된 후의 값은 [76, 24, 3]이 됩니다. 그렇다면 정렬된 후의 값에 3이 위치한 인덱스는 2가 됩니다. 76이 위치한 인덱스는 0이 됩니다. 24가 위치한 인덱스는 1이 됩니다.
// 그렇다면 userInput에 이 인덱스를 하나씩 지정합니다. 그러면 userInput은 [2, 0, 1]이 됩니다.
// 결과값을 보니 0번째는 없습니다. 따라서 여기에 1씩 더해줍니다. [3, 1, 2]가 됩니다.
// let userInput = [3, 76, 24];
// let sortValue = userInput.sort((a, b) => b - a); // 76, 24, 3

[10, 20, 30, 40].indexOf(30); // 2

let userInput = [3, 76, 24];
let sortValue = [...userInput].sort((a, b) => b - a); // 76, 24, 3
userInput.forEach((v, i) => {
  userInput[i] = sortValue.indexOf(v) + 1;
});

// 문제5. 1부터 100까지의 숫자 중 3의 배수만 더해주세요
let sum = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    v = i + 1;
    v % 3 === 0 ? (sum += v) : null;
  });

Array(101)
  .fill(0)
  .forEach((v, i) => {
    if (i % 3 === 0) {
      sum += i;
    }
  });

// 문제6. 아래와 같이 출력되게 해주세요
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']

let input = ["hojun", "dongjun", "dongwook", "donggeun"];
let output = [];
input.forEach((v) => {
  output.push(`${v} is good`);
});

// 문제7. 010-5044-2903 번호가 있을때, 아래와 같이 출력되게 해주세요
"010-5044-2903".split("-"); // ['010', '5044', '2903']
"010-5044-2903".split("-").forEach((v, i) => {
  console.log(v);
});

"010-5044-2903".split("-").forEach((v, i) => {
  console.log(v.replace(v.slice(-2), "xx"));
});

// 44를 replace 해야하는데 replace가 처음부터 먹혀서 앞의 두개가 바뀜
"010-4444-2903".split("-").forEach((v, i) => {
  console.log(v.replace(v.slice(-2), "xx"));
});

"hello world hello".replace("hello", "hojun");

"010-4444-2903".split("-").forEach((v, i) => {
  if (v.length === 4) {
    console.log(v[0] + v[1] + "xx");
  } else {
    console.log("0xx");
  }
});

"010-4444-2903".split("-").forEach((v, i) => {
  v.length === 4 ? console.log(v[0] + v[1] + "xx") : console.log("0xx");
});

"010-4444-2903".split("-").forEach((v, i) => {
  v.length === 4 ? console.log(v.slice(0, 2) + "xx") : console.log("0xx");
});

// 주의 사항
// forEach는 return을 사용할 수 없다
[1, 2, 3]
  .forEach((v) => {
    console.log(v);
    return; // 반환값 or 종료 // return 했는데 멈추지 않음
  })

  [(1, 2, 3)].forEach((v) => {
    return; // 뒤에 코드를 무시하는 코드로는 사용할 수는 있음
    console.log(v);
  })

  [
    // forEach는 break, continue를 사용할 수 없다.
    (1, 2, 3)
  ].forEach((v) => {
    console.log(v);
    // continue; // error
  })

  [(1, 2, 3)].forEach((v) => {
    console.log(v);
    // break; // error
  });

// ElemetnNodeList는 forEach를 사용할 수 없습니다.
// NodeList와 배열은 다르다
// 기억해야 할 문구 : forEach라고 다 같은 forEach가 아니다!
// html파일
// <div>1</div>
// <div>2</div>
// <div>3</div>
document.querySelectorAll("div").forEach((v) => {
  console.log(v);
});
