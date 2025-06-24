import {useState} from 'react';
import { CounterPresentador } from './CounterPresentador';

//LOGICA ACÁ
export const CounterContainer = () => {
    const [count, setCount ] = useState(0);
    const sumar = () => setCount(count + 1);
    return <CounterPresentador count={count} setCount={sumar}  />;
};