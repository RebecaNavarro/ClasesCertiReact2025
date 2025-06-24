export const Card = ({children}) => {
    return <>
        <div 
            style= {
            {
                border: '1px solid #ccc',
                minWidth: '400px',
                maxWidth: '800px',
                minHeight: '200px',
                borderRadius: '8px',
                padding: '10px',
            }
        }>
            {children}
        </div>
    </>
};

//como la herencia
const Title = ({children}) => {
    return <>
    <div style= {{
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '5px',
        marginBottom: '5px',
    }}>
        {children}
    </div>
    </>
}

const Content = ({children}) => {
    return <>
    <div style= {{
        fontSize: '12px',
        margin: '5px',
        minHeight: '150px',
    }}>
        {children}
    </div>
    </>
}

const Footer = ({children}) => {
    return <>
    <div style= {{
        fontSize: '14px',
        marginTop: '5px',
        borderTop: '1px solid #eee',
    }}>
        {children}
    </div>
    </>
}
//Componente es solo una función que devuelve un JSX

Card.Title = Title;
Card.Content = Content;
Card.Footer = Footer;








