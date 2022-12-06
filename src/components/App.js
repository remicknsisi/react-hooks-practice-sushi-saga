import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([])
  const [sushiToDisplay, setSushiToDisplay] = useState([])
  const [needMoreSushi, setNeedMoreSushi] = useState(false)
  const [numberOfPlates, setNumberOfPlates] = useState([])
  const [budget, setBudget] = useState(100)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(sushi => {
      console.log('fetch')
      setSushiData(sushi)
      setSushiToDisplay(
        sushi.slice(startIndex, startIndex + 4))
    })
  }, [needMoreSushi])

  function handleMoreSushi(){
    setNeedMoreSushi(!needMoreSushi)
    setStartIndex((startIndex) => startIndex + 4)
  }

  function handleEatSushi(price){
    if(price > budget){
      alert('Not enough money!')
    } else {
    setBudget(budget - price)
    setNumberOfPlates([...numberOfPlates + 1])}
  }

  return (
    <div className="app">
      <SushiContainer onEatSushi={handleEatSushi} sushi={sushiToDisplay} onMoreSushi={handleMoreSushi}/>
      <Table budget={budget} plates={numberOfPlates}/>
    </div>
  );
}

export default App;
