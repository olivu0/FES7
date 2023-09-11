import { useState } from "react";
import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";

function App() {
  // 자식에서 부모의 상태값을 변경하기 위해 useState 사용 -> 상태 끌어올리기
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1>오늘의 기분을 선택해주세요 🤪</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood} />
        <DisplayMood mood={currentMood} />
      </div>
    </div>
  );
}
export default App;
