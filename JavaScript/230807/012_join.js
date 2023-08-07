// join ***
let arr1 = ["hello", "world", "hojun"];
arr1.join("!"); // hello!world!hojun

let arr2 = ["010", "1034", "1100"];
arr2.join("-"); // 010-1034-1100

let arr3 = ["hello", "world", "hojun"];
arr3.join(" "); // hello world hojun

let arr4 = ["안녕하세요", "제 이름은 이부영입니다.", "저는 서울에 살아요"];
arr4.join("\n");

let arr5 = ["안녕하세요", "제 이름은 이부영입니다.", "저는 서울에 살아요"];
arr5.join("<br>");
console.log(arr.join("<br>")); //innerHTML로 하면 개행된다.

// reverse
[10, 20, 30].reverse(); // [30, 20, 10]
