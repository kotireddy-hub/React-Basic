import React from "react";

const ConditionRendering = (props) =>{
    console.log(props.logined,":: ====");
    const { logined = false } = props;
    return logined ? <div>Registation</div> : <div>login</div>;
}

export default ConditionRendering;