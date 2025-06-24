export const CounterPresentador = (props) => {
    const {count, setCount } = props;
    return (
        <>
            {count}
            <button onClick={setCount}>Incrementar</button>
        </>
    );
}