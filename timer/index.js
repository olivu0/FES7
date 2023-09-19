const hour = document.querySelector("#hour");
const min = document.querySelector("#minute");
const sec = document.querySelector("#second");

/*
const countTimer = () => {
  if (sec != 0) {
    sec--;
  } else {
    if (min != 0) {
      min--;
      sec = 59;
    } else {
      //타이머 종료
    }
  }
};
*/

const timer = setInterval(() => {
  if (sec === 0 && min === 0 && hour == 0) {
    alert("타이머 종료!");
    clearInterval(timer);
  } else {
    sec--;
    if (sec === 0) {
      min--;
      sec = 59;
    }
    if (min === 0) {
      if (hour > 0) {
        hour--;
        min = 59;
      }
    }
  }
}, 1000);
