import React, { useRef } from "react";

const UnControlComponentInput = () => {
    const inputRef = useRef(null);

    const handleToSubmit = (e) => {
        e.preventDefault();
        console.log("hello",inputRef.current.value);
    }

    return <form onSubmit={handleToSubmit}>
        <input
            type={"text"}
            ref={inputRef}
            name={"inputRef"}
        />
        <button type="submit">Click</button>
    </form>

};

export default UnControlComponentInput;