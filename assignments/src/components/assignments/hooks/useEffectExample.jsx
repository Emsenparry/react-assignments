//useEffect examples

import { useState, useEffect } from "react";

const Counter2 = () => {
    const [count, setCounter] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            setCounter(count + 1)
        }, 1000)
    }, [count]);

    return(
        <div>Antal renders: {count}</div>
    )
}



export { Counter2 };
