function test(a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}

test(10, 20); // 모자르면 undefined로 채워짐
test(10, 20, 30, 40); // 넘기면 제대로 작동함

// default value
function test(a = 10, b = 20, c = 30) {
  console.log(a, b, c);
  return a + b + c;
}

test(100, 200); // 330
test(); // 60

// 혼란의 도가니탕,,,
// 기억하기
test((a = 100), (b = 200)); // 330
test((b = 100), (c = 200)); // why 330?
// javascript는 값을 순서대로 넣는다 ****************************************

// 이것을 해결하기 위해 RORO 기법이 등장한다.
// RORO: 객체로 받고 객체로 반환한다(Receive an Object, return an object)

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
  // scene: 스토리신, 플레이신, 엔딩신
  // x, y: mob의 위치
  // texture: mob의 이름
  // animKey: mob의 에니메이션
  // initHp: mob의 체력
  // dropRate: mob이 아이템을 떨어뜨리는 확률
}

// 위의 문제와 아래 문제를 해결하기 위해 RORO 사용가능

// 호출할 때, 이게 뭐가 뭔지 모를 수 있음
mob("플레이신", 100, 200, "슬라임", "슬라임_애니", 100, 0.1);
// mon('플레이신', ... 뭐가 들어가야하지,,?)
// RORO 기법으로 해결

function player({ scene, x, y, texture, animKey, initHp, dropRate }) {
  return;
}

// 아래와 같이 작성되기 때문에 2번째 문제 해결, 순서도 상관 없음
player({
  scene: "플레이신",
  x: "100",
  y: "200",
  texture: "슬라임",
  animKey: "슬라임_애니",
  initHp: 100,
  dropRate: 0.1,
});

// 아래와 같이 작성되기 때문에 1번째 문제 해결
player({
  scene: "플레이신",
  y: 200,
  initHp: 100,
});

// 기본값 설정하는 방법
function player({ scene = "플레이신", x = 0, y = 0, texture, animKey, initHp, dropRate = 0.1 }) {
  console.log(scene, x, y, initHp);
}
player({
  initHp: 100,
});
