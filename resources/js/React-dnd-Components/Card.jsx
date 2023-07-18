import React from 'react';

function Card(props) {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  const dragEnd = e => {
    const card = document.getElementById(e.target.id);
    card.style.display = 'block';

    const parentBoard = card.closest('.task-list');
    if (!parentBoard) {
      const originalBoard = document.getElementById(props.boardId);
      if (originalBoard) {
        originalBoard.appendChild(card);
      }
    }
  };

  return (
    <li
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
    </li>
  )
}

export default Card;