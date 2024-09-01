// Input.js
import React, { useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Input(props) {
    const inputBox = useRef(); // Using useRef to access input value

    return (
        <div className='p-3 flex justify-around gap-2'>
            <input
                type="text"
                placeholder='Please enter data'
                className='p-3 w-full border border-gray-100 focus:outline-none w-[90%]'
                ref={inputBox}
            />
            <div
                className="cursor-pointer text-3xl font-bold bg-[blue] w-[50px] h-[50px] rounded-full text-white flex justify-center items-center"
                onClick={() => {
                    props.handle(inputBox.current.value); // Call the handler function with input value
                    inputBox.current.value = ""; // Clear the input box after adding
                }}
            >
                <AiOutlinePlus />
            </div>
        </div>
    );
}
