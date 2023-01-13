import React from "react"
import s from "../App.module.css"

const Header = (props) => {

  return (
    <div className={s.header}>
      {
        props.winner === "tie" ? <p>That's a tie</p> : null
      }
      {
        props.winner && props.winner !== "tie" && <p>The winner is { props.winner }</p>
      }
      {
        !props.winner && <p>Current player: { props.player }</p>
      }
    </div>
  )
};

export default Header;
