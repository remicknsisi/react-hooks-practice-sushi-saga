import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ isEaten, sushi, onMoreSushi, onEatSushi, setIsEaten }) {
  return (
    <div className="belt">
      {sushi.map(piece => {
        return (
          <Sushi setIsEaten={setIsEaten} key={piece.id} onEatSushi={onEatSushi} isEaten={isEaten} image={piece.img_url} name={piece.name} price={piece.price}/>
        )
      })}
      <MoreButton onMoreSushi={onMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
