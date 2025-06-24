import { useState } from "react";

export const CounterRenderSonOne=({render})=>{
    const [count, setCount] = useState(0);

    //viene el metodo para editar
    const increment = () => 
        setCount(count + 1);
    
    //Manda el render 
    return <>{render(count,increment)}</> 
}