import React, { useState } from "react";

function Sushi({ image, name, price, onEatSushi }) {
  const [isEaten, setIsEaten] = useState(false)

  function handleEat(){
    setIsEaten(!isEaten)
    onEatSushi(price)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
