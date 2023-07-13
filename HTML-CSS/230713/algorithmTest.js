let age = 27;
age.toString();
Array(age.toString());

Array.from(age.toString()); //['2', '7']
age.toString().split(""); //['2', '7']

Array.from(age.toString())
  .map((v) => chr[v])
  .join("");

// join   : 배열 => 문자열
// spllit : 문자열 => 배열
age.toString().split("");

"254564".match(/[369]/g);
