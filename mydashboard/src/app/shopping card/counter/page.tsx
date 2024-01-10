"use client";
import { useState } from "react";

interface  Props{
    value?: number;
}

function CartCounter({value = 0}: Props){
    const [Counter, setCounter] = useState(value);

    return (
        <div>
            <span className="text-9xl">{Counter}</span>
            <div className="flex">
                <button
                    onClick={() => setCounter(Counter + 1)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    +1
                </button>
                <button
                    onClick={() => setCounter(Counter - 1)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    -1
                </button>
            </div>
        </div>
    );
}

export default CartCounter;