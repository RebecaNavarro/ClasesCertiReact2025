import { useState } from "react";

export const CounterRenderSonTwo=({render})=>{
    const [count, setCount] = useState(0);

    const decrement = () => 
        setCount(count - 1);

    return <>{render(count,decrement)}</> 
}