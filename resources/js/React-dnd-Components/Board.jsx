import React, { useState } from 'react';
import axios from "axios";

function Board(props) {
    const [previousBoard, setPreviousBoard] = useState(null);
    const [draggedCardId, setDraggedCardId] = useState(null); // Додайте стан для збереження ідентифікатора перетягуваної карти

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        console.log("Board cardId: " + card_id);
        const card = document.getElementById(card_id);

        const newColumnId = props.columnId;
        console.log("Board ColumnId: " + newColumnId);
        card.style.display = 'block';

        if (previousBoard && previousBoard !== e.target) {
            previousBoard.appendChild(card);
        } else {
            e.target.appendChild(card);
        }

        setPreviousBoard(null);

        // Використовуйте стан draggedCardId для передачі ідентифікатора у запиті
        axios
            .post(`/update-card-column/${card_id}`, { columnId: newColumnId })
            .then((response) => {
                console.log('Column updated successfully!');
               // window.location.href = '/current-desk';
            })
            .catch((error) => {
                console.error('Failed to update column:', error);
            });
    };

    const dragStart = (e, cardId) => {
        setDraggedCardId(cardId); // Зберегти ідентифікатор картки при початку перетягування
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
            data-column-id={props.columnId}
        >
            {props.children.map(child => React.cloneElement(child, {
                dragStart: dragStart // Передайте функцію dragStart як пропс дочірнім елементам
            }))}
        </ul>
    );
}

export default Board;
