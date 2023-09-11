import React, { useState } from "react";

//useState()

function CounterFun() {
    const [count, setCount] = useState(0);

    const handleToAdd = () => {
        setCount(count + 1); // 0 + 1 // 1 // 1 + 1 // 2 // 2+ 1 //3 
    }

    const handleToSub = () => {
        setCount(count - 1); // 0 + 1 // 1 // 3 -1 // 2 
    }


    return <div>
        <button onClick={handleToAdd}>+</button>
        <p>{count}</p>
        <button onClick={handleToSub}>-</button>
    </div>
};

export default CounterFun;