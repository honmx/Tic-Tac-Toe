import React from "react"
import s from "../App.module.css"

const Cell = (props) => {

  const handleClick = () => {
    if (props.cell === "") props.handleClick(props.id);
    return;
  }

  return (
    <button className={s.cell} 
            onClick={handleClick}>
      { props.cell }
    </button>
  )
};

export default Cell;
