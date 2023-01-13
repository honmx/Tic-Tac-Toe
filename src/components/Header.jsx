import React from "react"
import s from "../App.module.css"

const Header = (props) => {

  const winner = props.check(props.field);

  return (
    <div className={s.header}>
      {
        winner === "tie" ? <p>That's a tie</p> : null
      }
      {
        winner && winner !== "tie" && <p>The winner is { winner }</p>
      }
      {
        !winner && <p>Current player: { props.player }</p>
      }
    </div>
  )
};

export default Header;
