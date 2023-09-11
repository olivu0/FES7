import React, { useState } from "react";
// export defalut React; 표현이 다름
// export useState;

function Resume(props) {
  // 잘못된 예시
  // 그냥 변수여서 렌더링할 생각 안함 -> 따로 렌더링할 것을 리액트에게 얘기해주어야함
  // let like = 0;

  // like 값이 업데이트 될때마다 렌더링을 해줘야된다 -> 이렇게 해주면 안된다
  // function clickLike() {
  //   like += 1;
  //   console.log(like);
  // }

  // state 변수, state 변수의 상태를 바꿔줄 수 있는 함수
  const [like, setLike] = useState("");
  // console.log("useState:", useState(0));
  // 'useState: [0, 함수]'

  function clickLike() {
    // setLike를 실행시켰을 때, like의 값이 변경된다.
    // 화면에 렌더링되도록 하려면 useState를 써야한다
    // setLike(like + 1);
    // console.log(like);

    // click시, Like 나오고 다시 click하면 사라지는 것
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }

  return (
    <div style={{ border: "solid 1px black", width: "500px" }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미: {props.hobby}</h2>
      <h2>좋아하는 음식: {props.food}</h2>
      <h2>
        좋아하는 색: <span style={{ color: props.color }}>{props.color}</span>
      </h2>
      <button onClick={clickLike}>like</button>
      <span>{like}</span>
    </div>
  );
}

export default Resume;
