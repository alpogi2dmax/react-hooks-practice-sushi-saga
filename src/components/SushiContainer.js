import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, money, onSushiPrice}) {

  console.log(money)

  const [currentSushi, setCurrentSushi] = useState(0)

  function handleCurrentSushi(newSushiCount) {
    setCurrentSushi(newSushiCount)
  }

  return (
    <div className="belt">
      {sushis.slice(currentSushi, currentSushi+4).map(sushi => (
        <Sushi key={sushi.id} sushi={sushi} money={money} onSushiPrice={onSushiPrice}/>
      ))}
      <MoreButton currentSushi={currentSushi} onCurrentSushi={handleCurrentSushi}/>
    </div>
  );
}

export default SushiContainer;
