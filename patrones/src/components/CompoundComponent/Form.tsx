export const Form = ({ children }) => {
    return <>
        <form
            style={
                {
                    border: '1px solid #ccc',
                    minWidth: '400px',
                    maxWidth: '800px',
                    minHeight: '100px',
                    borderRadius: '8px',
                    padding: '10px',
                    margin: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }
            }>
            {children}
        </form>
    </>
};

const Title = ({ children }) => {
    return <>
        <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '5px',
            marginBottom: '5px',
        }}>
            {children}
        </div>
    </>
}

const Input = ({ children }) => {
    return <>
        <input style={{
            fontSize: '14px',
            margin: '5px',
            maxWidth: '300px',
            border: '1px solid #eee',
        }} type="text" />
        {children}
    </>
}

const Button = ({ children }) => {
    return <>
        <button style={{
            fontSize: '14px',
            marginTop: '5px',
            backgroundColor: 'pink',
            border: '1px solid #eee',
        }}>
            {children}
        </button>
    </>
}
//Componente es solo una función que devuelve un JSX

Form.Title = Title;
Form.Input = Input;
Form.Button = Button;







