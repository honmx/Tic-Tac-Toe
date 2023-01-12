import React from "react"
import Cell from "./Cell";
import s from "../App.module.css"

const Field = (props) => {

  return (
    <div className={s.field}>
      {
        props.field.map((cell, idx) => {
          return <Cell key={idx}
                       cell={cell}
                       id={idx}
                       handleClick={props.handleClick} />
        })
      }
    </div>
  )
};

export default Field;
