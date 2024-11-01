import React, { useState } from "react";

function Sushi({sushi, money, onSushiPrice}) {


  const { id, name, img_url, price, createdAt } = sushi

  const [ eaten, setEaten ] = useState(false)
  const [ newPrice, setNewPrice ] = useState(price)

  function handleEatClick() {
    if (money - price > 0) {
      console.log(money)
      onSushiPrice(newPrice)
      setEaten(true)
      setNewPrice(0)
    }
  }

  return (

    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
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
