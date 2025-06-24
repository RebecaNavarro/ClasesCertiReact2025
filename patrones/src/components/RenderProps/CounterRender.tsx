export const CounterRender = () => {

    return (
        <>
            <CounterRenderSonOne render={
                //este es el hijo
                //El hijo decide qué hacer con los datos que le pasen
                (count, increment) => {
                    return (
                        <>
                        <div>
                            Soy el hijo, haz click en el boton
                        </div>
                        <div>
                            Hiciste click {count} veces
                        </div>
                        <button onClick={increment}> Incrementar </button>
                    </>
                    )
                } 
            }/>

            <CounterRenderSonTwo render={
                //este es el hijo
                //El hijo decide qué hacer con los datos que le pasen
                (count, decrement) => {
                    return (
                        <>
                        <div>
                            Soy el hijo, haz click en el boton
                        </div>
                        <div>
                            Hiciste click {count} veces
                        </div>
                        <button onClick={decrement}> Decrementar </button>
                    </>
                    )
                } 
            }/>
        </>
    );
};

import { CounterRenderSonTwo } from "./CounterRenderDecrement";
//Se puede poner en formularios

import { CounterRenderSonOne } from "./CounterRenderProps";