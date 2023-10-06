import React, { useState } from "react";

const ConditionRendering = (props) => {
    //console.log(props.logined,":: ====");

    // const { logined = false } = props;
    const [logined, setLogined] = useState(true);
    const handleToClick = () => {
        setLogined(!logined)
    }

    return <div>
        {
            logined ? "ON" : "OFF"
        }
        <button onClick={() => handleToClick()}>Click</button>
    </div>;
}

export default ConditionRendering;