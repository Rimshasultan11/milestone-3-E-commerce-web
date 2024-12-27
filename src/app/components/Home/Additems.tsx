"use client"
import React from 'react'
import { useState } from 'react'
const Additems = () => {
    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handledeccrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <div className='flex text-lg gap-4 w-[150px] h-[50px] rounded-full border-2 justify-center items-center'>
                <button onClick={handledeccrement}>-</button>
                <h3>{count}</h3>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default Additems
