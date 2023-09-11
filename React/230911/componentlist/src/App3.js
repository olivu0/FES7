import React, { useState } from "react";

export default function App3() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginInput = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  };

  const handlePasswordInput = (event) => {
    console.log(event.target.value);
    setPw(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    if (id === "") {
      alert("아이디 입력 안했다");
    }
    if (pw === "") {
      alert("비번 입력 안했다");
    }
    console.log(`id: ${id}, pw: ${pw}`);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
