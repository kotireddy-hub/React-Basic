import React from "react";

function FunctionalCounter() {

    const [counter, setCounter] = React.useState(0);
    /* useEffect  -> [])
    
    React.useEffect(()=>({}),[])
    */

    React.useEffect(() => {
        
        const clearIntevl = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
        return () => {
            if (counter === 10) {
                setCounter(0)
                clearInterval(clearIntevl)
            }
        }
    }, [counter])

    return <div>
        {counter}
    </div>
};

export default FunctionalCounter;