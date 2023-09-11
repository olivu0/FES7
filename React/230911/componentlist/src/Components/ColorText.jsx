// function ColorText(props) {
//   // style 객체 형태로 전달
//   return (
//     <div>
//       <h2 style={{ color: props.color }}>색이 바뀌어요!</h2>
//     </div>
//   );
// }
function ColorText({ color }) {
  // style 객체 형태로 전달
  return (
    <div>
      <h2 style={{ color: color }}>색이 바뀌어요!</h2>
    </div>
  );
}

export default ColorText;
