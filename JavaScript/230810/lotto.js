// 1부터 45 중복없이 6개
// 배열에 6개의 숫자를 담는데 중복이 있으면 안된다
// 로또 함수 만들기

// 1. 1부터 45까지 있는 배열을 하나 만든다
// 2. arr 배열 안에서 6개의 숫자를 랜덤으로 뽑는다
// 3. index 6개 뽑음.
// 3. arr[index] <- 45개의 index 중 6개 뽑음

// 0 <= Math.floor(Math.random() * 45) < 45
// let index = Math.floor(Math.random() * 45);
// arr[index];

// 방법1
let arr = Array(45)
  .fill(0)
  .map((v, i) => i + 1);

let lotto = [];
for (let i = 0; i < 6; i++) {
  let index = Math.floor(Math.random() * arr.length);
  let lottoNum = arr[index];
  lotto.push(lottoNum);
  arr.splice(index, 1);
}
console.log(lotto);

// 방법 2
function lotto생성() {
  let arr6 = [];
  while (arr6.length !== 6) {
    let arr45 = parseInt(Math.random() * 44 + 1);
    if (arr6.includes(arr45)) {
      continue;
    } else {
      arr6.push(arr45);
    }
  }
  return arr6;
}

// 방법 3
function lottoGenerator() {
  const lottoArr = [];
  // 6이 되는 순간 while 문 멈춤
  while (lottoArr.length < 6) {
    // 1에서 45.999
    const result = parseInt(Math.random() * 45 + 1);
    if (!lottoArr.includes(result)) {
      lottoArr.push(result);
    }
  }
  return lottoArr;
}
