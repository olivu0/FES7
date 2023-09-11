import Hello from "./Components/Hello";
import HelloProps from "./Components/HelloProps";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

// export default로 뺀 test, export로 뺀 test2
// import test, { test2 } from "./Components/test";

// 컴포넌트들 모듈별로 다 따로 만들어줌 => Components폴더 안에 컴포넌트 들어있음
// HelloProps 컴포넌트 생성
// Hello 컴포넌트 생성
// Time 컴포넌트 생성

// 컴포넌트로 분리후 App()이 간결해졌다
// App()도 하나의 컴포넌트다
function App() {
  // test();
  // test2();
  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps name="boo" age={27} someFunc={() => "awesome!!"} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3]} someObj={{ one: 1 }} />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />

      <ColorText color="skyblue" />
      <ColorText color="pink" />
      <ColorText color="gold" />
    </div>
  );
}

export default App;

// Hook:
