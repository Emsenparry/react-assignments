import { useEffect, useState } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer => (timer + 1));
        }, 1000);
    });


    return(
        <p>countdown: {timer}</p>
    )
}

export default Timer;