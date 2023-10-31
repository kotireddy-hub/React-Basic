import React, { useState } from "react";
import UseEffectFun from "./UseEffectFun";

const UseStateFun = () => {

    const [state, setState] = useState(0);

    return <div>
        <h1>{state}</h1>
        <button onClick={() => setState(0)}>Reset</button>
        <button onClick={() => setState(prv => prv - 1)}>-</button>
        <button onClick={() => setState(prv => prv + 1)}>+</button>
        <UseEffectFun />
    </div>

};

export default UseStateFun;