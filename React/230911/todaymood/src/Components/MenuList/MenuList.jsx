import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";

// 자신이 쓸 것은 아니지만 자식에게 전달하기 위해 props를 전달하는 것: props drilling
function MenuList(props) {
  // menus를 MenuListItem을 전달해야함
  const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];
  return (
    <ul className="container-list">
      {menus.map((moodEl, index) => {
        return <MenuListItem key={index} mood={moodEl} setCurrentMood={props.setCurrentMood} />;
      })}
    </ul>
  );
}

export default MenuList;
