// 면접에서 map을 물어본다면?
// map은 단순히 연산하는 것보다 특정한 데이터를 뽑아내는 용도로 많이 사용한다.

// 이러한 데이터 형태를 json이라고 한다.
let data = [
  // 이거 하나하나가 v가 되는 것
  {
    _id: "64d072367a17c0be080da71b",
    index: 0,
    guid: "29a059c2-a8f9-4912-af3c-8a26da9f9d8b",
    age: 40,
    name: "Gabriela Farrell",
    gender: "female",
  },
  {
    _id: "64d072366a8282802f94cce0",
    index: 1,
    guid: "3ae0c4cb-94b2-4bb3-993b-84ca4809ce15",
    age: 29,
    name: "Molina Webster",
    gender: "male",
  },
  {
    _id: "64d0723688c5598adb0de72d",
    index: 2,
    guid: "dff6a126-450a-4707-9203-33b764b11c65",
    age: 29,
    name: "Ruiz Henderson",
    gender: "male",
  },
  {
    _id: "64d072361ebc88a17a314aee",
    index: 3,
    guid: "30e4c4cc-0541-490d-9fbd-895d54bf904f",
    age: 31,
    name: "Bender Sampson",
    gender: "male",
  },
];

data[0];
data[0]["name"];
data[0]["age"];
(data[0]["age"] + data[1]["age"] + data[2]["age"] + data[3]["age"]) / 4;

data.map((v) => v["age"]); // 나이만 뽑아냄 [40, 29, 29, 31]
data.map((v) => v["name"]); // ['Gabriela Farrell', 'Molina Webster', 'Ruiz Henderson', 'Bender Sampson']
data.map((v) => [v["name"], v["age"]]); // [name, age]추출
// 이게 도데체 어떻게 돌아가는 것일까?
data.map((v) => {
  return v["age"];
});
// [1, 2, 3, 4].map(v => v * 2);
// v값 하나하나는 1 2 3 4를 의미한다

//여기서 v는 1개의 object이다.
// 마치 아래와 같습니다.
let v = {
  _id: "64d072367a17c0be080da71b",
  index: 0,
  guid: "29a059c2-a8f9-4912-af3c-8a26da9f9d8b",
  age: 40,
  name: "Gabriela Farrell",
  gender: "female",
};
v["age"];
