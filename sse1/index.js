const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5010;

app.use(cors());
app.use(express.json());

let clients = [];

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.flushHeaders();

    //funcion que manda un mensaje
    // const sendMessage = () => {
    //     const data = {date: new Date().toISOString()};
    //     res.write(`data: ${JSON.stringify(data)}\n\n`);
    // };

    //const intervalId = setInterval(message, 2000);


    clients.push(res);

    res.on('close', () => { 
        clearInterval(intervalId);
        res.end();
    });

});

app.post('/sendMessage', (req,res)=>{

    const {message} = req.body;
    
    clients.forEach((client) => {
        client.write(`data: ${JSON.stringify(message)}\n\n`);
    })
    res.status(200).json({
        sent:true, 
        message
    });

});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});