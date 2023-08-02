// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName); // licat
console.log(firstName ?? lastName ?? nickName); // licat

let a = null;
let b = 10;
let c = null;
console.log(a ?? b ?? c); // 10

let height = 0; // undefined
console.log(height ?? 100); // 0이 null 인가요? 아니니까 0을 출력
// nullish 입장에서는 0도 value 입니다
console.log(height || 100); // 0을 만났을 때 뒤를 봐야 하나요? 100

let height2;
console.log(height2 ?? 100); // 100
console.log(height2 || 100); // 100

let height3 = "";
console.log(height3 ?? "world"); // ''이 null인가요? 아니니까 ''를 출력합니다. nullish 입장에서는 ''도 value입니다.
console.log(height3 || "hello"); // ''을 만났을 때, 뒤를 봐야 하나요? world

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined, false, NaN, '', etc...
// ?? : null, undefined

// falsy하다 : 0, null, undefined, false, NaN, '', etc...
// nullish하다 : null, undefined

// nullish 문제
// 1번
let username; // undefined 선언후 값을 아무것도 할당하지 않으면 undefined
let nickname; // undefined
console.log(username || nickname || "guest"); // guest

// 2번
let username1 = "";
let nickname1 = "";
console.log(username1 || nickname1 || "guest"); // guest

// 3번
// ?? : undefined냐 null이냐만 판단
let username2 = "";
let nickname2 = "";
console.log(username2 ?? nickname2 ?? "guest"); // 아무것도 출력되지 않는다

// 4번
let username3;
let nickname3;
console.log(username3 ?? nickname3 ?? "guest"); // guest
