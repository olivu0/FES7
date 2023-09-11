import React from "react";
import "./MenuListItem.css";

const MenuListItem = (props) => {
  console.log(props); // menuList에서 전달한 mood, setCurrentMood

  const onItemClick = () => {
    props.setCurrentMood(props.mood);
  };

  return (
    <li>
      <button onClick={onItemClick} className="btn-item">
        기분이 : {props.mood}
      </button>
    </li>
  );
};

export default MenuListItem;
