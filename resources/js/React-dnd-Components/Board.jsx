import React, { useState } from 'react';

function Board(props) {
  const [previousBoard, setPreviousBoard] = useState(null);

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    if (previousBoard && previousBoard !== e.target) {
      previousBoard.appendChild(card);
    } else {
      e.target.appendChild(card);
    }

    setPreviousBoard(null);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  const dragEnter = e => {
    setPreviousBoard(e.target);
  };

  return (
    <ul
      className={props.className}
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
    >
      {props.children}
    </ul>
  );
}

export default Board;