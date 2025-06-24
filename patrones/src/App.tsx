import { useEffect, useState } from 'react';
import './App.css'
import { Form } from './components/CompoundComponent/Form';
import { Snackbar, type SnackbarCloseReason } from '@mui/material';
// import { CounterContainer } from './components/containerPatron/CounterContainer';
// import { Carrer } from './components/HOC/Carrer';
// import { CounterRender } from './components/RenderProps/CounterRender';
// import { Card } from './components/CompoundComponent/Card';


function App() {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5010/events');
    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessage(newMessage);
      setOpen(true);
    }
    return () => {
      eventSource.close();
      console.log('EventSource closed');
      setOpen(false);
    }
    //para que cuando no esté en esta pantalla se cierre
  }, []);

  // const ProfileWithCareer=
  return (
    <>
      {/* <CounterContainer/>
     <CounterRender/> */}
      {/* <Card>
        <Card.Title>Compound Component</Card.Title>
        <Card.Content>This is the content of the compound component.</Card.Content>
        <Card.Footer>This is the footer of the compound component.</Card.Footer>
     </Card> */}
      {/* <Form >
        <Form.Title>Form Component</Form.Title>
        <Form.Input>This is the content of the form component.</Form.Input>
        <Form.Button>Submit</Form.Button>
      </Form> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
}

//titulo, formulario y boton

export default App
