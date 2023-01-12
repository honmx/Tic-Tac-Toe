import React, { useEffect, useState } from "react"
import s from "./App.module.css"
import Field from "./components/Field";
import Header from "./components/Header";
import History from "./components/History";

const App = (props) => {

  const [player, setPlayer] = useState("X");
  const [field, setField] = useState(Array(9).fill(""));
  const [history, setHistory] = useState([]);


  const checkForVictory = (field) => {
    const combinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]

    for (let combination of combinations) {
      if (field[combination[0] - 1] === field[combination[1] - 1]
        && field[combination[0] - 1] === field[combination[2] - 1]
        && field[combination[0] - 1] !== "") return player;
    }

    return null;

  }

  const handleCellClick = (id) => {

    if (checkForVictory(field)) return;

    const newField = [...field];
    newField[id] = player;

    setField(newField);
    setPlayer(player === "X" ? "O" : "X");
  }

  useEffect(() => {
    const newHistoryElem = { player, field }
    const newHistory = [...history, newHistoryElem]
    setHistory([...history, newHistoryElem]);
  }, [field]);

  const handleHistoryClick = (idx) => {
    setPlayer(history[idx].player)
    setField([...history[idx].field])
    setHistory(history.splice(0, idx));
  }

  return (
    <div className={s.container}>
      <Header player={player} field={field} check={checkForVictory} />
      <div className={s.flex}>
        <Field field={field} handleClick={handleCellClick} />
        <History onClick={handleHistoryClick} history={history} />
      </div>
    </div>
  )
};

export default App;
