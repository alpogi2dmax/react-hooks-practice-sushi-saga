import React, { useState } from "react";

function MoreButton({currentSushi, onCurrentSushi}) {

  function handleClick() {
    onCurrentSushi(currentSushi+4)
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
