import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

// index 최상위 모듈

const colaGenerator = new ColaGenerator();
// 최상위 await 해줌
await colaGenerator.setup();
// setup()함수가 실행될때까지 vendeingMachine이 기다려주지 않음

const vendingMachineFunc = new VendingMachineFunc();
vendingMachineFunc.setup();
