// this가 가리키는 것: 전역 window
// 전역공간에서 호출된 this
function a() {
  console.log(this);
}
a(); // Window 객체
// window.console.log => window 생략함

function b() {
  console.log("hello world");
}
// 아래 둘은 같음
b(); // 'hello world'
window.b(); // 'hello world'

// this가 가리키는 것: myObj 객체
// 객체 안에 있는 메소드에서 this 호출
const myObj = {
  val2: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1(); // {val2: 100, func1: ƒ}

// this는 호출되는 곳에 따라 가리키는 것이 달라진다
// this는 함수를 호출하는 객체를 가리킴

// 왜 window를 가리킬까?
// test는 전역공간에서 실행됨
let test = myObj.func1;
test(); // Window 객체
