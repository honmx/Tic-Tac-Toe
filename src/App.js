import React, { useEffect, useState } from "react"
import s from "./App.module.css"
import Field from "./components/Field";
import Header from "./components/Header";
import History from "./components/History";

const App = (props) => {

  const [player, setPlayer] = useState("X");
  const [field, setField] = useState(Array(9).fill(""));
  const [history, setHistory] = useState([]);


  const checkForVictory = () => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];

      if (field[a] === field[b] && field[b] === field[c] && field[a] !== "") 
        return player === "X" ? {winner: "O", index: i} : {winner: "X", index: i};
    }

    if (!field.includes("")) return {winner: "tie", index: null};

    return null;
  }

  const handleCellClick = (id) => {

    if (checkForVictory()) return;

    const newField = [...field];
    newField[id] = player;

    setField(newField);
    setPlayer(player === "X" ? "O" : "X");
  }

  useEffect(() => {
    const newHistoryElem = { player, field }
    setHistory([...history, newHistoryElem]);
  }, [field]);

  const handleHistoryClick = (idx) => {
    setPlayer(history[idx].player)
    setField([...history[idx].field])
    setHistory(history.splice(0, idx));
  }

  const victoryData = checkForVictory();

  return (
    <div className={s.container}>
      <div className={s.bg}></div>
      <div className={`${s.bg} ${s.bg2}`}></div>
      <div className={`${s.bg} ${s.bg3}`}></div>
      <div className={`${s.bg} ${s.bg4}`}></div>
      <div className={s.game}>
        <Header player={player} field={field} winner={victoryData !== null ? victoryData.winner : null} />
        <div className={s.flex}>
          <Field field={field} indexOfCombination={victoryData !== null ? victoryData.index : null} handleClick={handleCellClick} />
          <History onClick={handleHistoryClick} history={history} />
        </div>
      </div>
    </div>
  )
};

export default App;
