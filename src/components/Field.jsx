import React from "react"
import Cell from "./Cell";
import s from "../App.module.css"
import { commonStyles, styles } from "../styles/styles";

const Field = (props) => {
  
  const index = props.indexOfCombination;

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
      {
        index !== null &&
        <div style={{...commonStyles, ...styles[index]}}/>
      }
    </div>
  )
};

export default Field;
