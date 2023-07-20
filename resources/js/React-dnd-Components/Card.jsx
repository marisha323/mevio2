import React from 'react';
import axios from 'axios';

function Card(props) {
    const dragStart = (e) => {
        const target = e.target;
        console.log("TARGET : " + props.id);
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    };

    const dragOver = (e) => {
        e.stopPropagation();
    };

    const dragEnd = (e) => {
        console.log("dragEnd!!!!!!!!");
        const cardId = props.cardId;
        console.log("cardId : " + cardId);
        const newColumnId = props.columnId;
        console.log("newColumnId : " + newColumnId);
        const card = document.getElementById(e.target.id);

        card.style.display = 'block';

        const parentBoard = card.closest('.task-list');
        if (!parentBoard) {
            const originalBoard = document.getElementById(props.boardId);
            if (originalBoard) {
                originalBoard.appendChild(card);
            }
        }

        // Change in db
        axios
            .post(`/update-card-column/${cardId}`, { columnId: newColumnId })
            .then((response) => {
                console.log('Column updated successfully!');
                window.location.href = '/current-desk';
            })
            .catch((error) => {
                console.error('Failed to update column:', error);
            });
    };

    return (
        <li
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
            data-card-id={props.cardId} //  data-card-id
            data-column-id={props.columnId} //  data-column-id
        >
            {props.children}
        </li>
    );
}

export default Card;
