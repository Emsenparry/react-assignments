import { useState } from "react";

const Greeting = () => {
    const [name, setName] = useState("");

    return(
        <>
        <h1>Send en hilsen til: {name}</h1><br />
        <input type="text" onInput={e => setName(e.target.value)}></input>
        </>
    )
}
export default Greeting;

