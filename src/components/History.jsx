import React from "react"
import s from "../App.module.css"

const History = (props) => {

  const handleClick = (idx) => () => props.onClick(idx);

  return (
    <div>
      {
        props.history.map((move, idx) => {
          return <button className={s.btn} onClick={handleClick(idx)} key={idx}>{ idx === 0 ? "Go to game start" : `Go to move #${idx}` }</button>
        })
      }
    </div>
  )
};

export default History;
