import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return(
        <>
        <p>Du har trykket på knappen {counter} gange</p>
        <button type="button" onClick={() => setCounter(counter => counter + 1)}>Click me</button>
        </>
    )
}

export default Counter;