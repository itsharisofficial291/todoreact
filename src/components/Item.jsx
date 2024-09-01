// Item.js
import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

export default function Item({ content, time, onDelete }) {
    const [done, setDone] = useState(false); // useState for toggling the done state

    return (
        <div
            className='w-full border-b p-3 flex justify-between'
            onClick={() => setDone(!done)} // Toggle done state on click
        >
            <div className="right">
                <span className="p-2 pr-10 text-[10px]">{time}</span>
                <span className={`${done ? 'line-through' : ''} select-none`}>{content}</span>
            </div>
            <div
                className="left text-[blue] font-bold cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent the click from toggling the done state
                    onDelete(); // Call the delete function passed via props
                }}
            >
                <BsTrash />
            </div>
        </div>
    );
}
