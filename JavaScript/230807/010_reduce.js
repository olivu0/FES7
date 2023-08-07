// reduce
// a: accumulator(누적값)
// c: currentValue(가산값)

// 파라미터 이름은 자유롭게 지정할 수 있다.
// forEach, map, filter, reduce 등의 메서드 모두 마찬가지 이빈다.
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0); // 암기코드
[10, 20, 30, 40, 50].reduce((a, c) => a + c); // 제대로 작동 안할 수도 있다.
[].reduce((a, c) => a + c); // error
[10, 20, 30, 40, 50].reduce((a, c) => {
  console.log(a, c);
  return a + c;
});
