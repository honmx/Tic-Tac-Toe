import React from "react"
// import s from "./Header.module.css"

const Header = (props) => {

  const victory = props.check(props.field);

  return (
    <div>
      {
        victory && <p>The winner is { props.player === "X" ? "O" : "X" }</p>
      }
      {
        !victory && <p>Current player: { props.player }</p>
      }
    </div>
  )
};

export default Header;
