// Box.js
import React from 'react';
import Item from './Item'; // Import the Item component correctly

export default function Box({ data, onDeleteItem }) {
    const items = data.map((SingleData, key) => {
        return (
            <Item
                key={key}
                content={SingleData.item}
                time={SingleData.time}
                onDelete={() => onDeleteItem(key)} // Pass the delete handler and index
            />
        );
    });

    return (
        <div className='p-3'>
            {items} {/* Render the list of items */}
        </div>
    );
}
