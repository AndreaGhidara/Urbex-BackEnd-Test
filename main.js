const express = require('express');
const app = express();
app.use(express.static('public'));

const { urbexLocation } = require('./urbexLocation');
const urbex = require('./routes/urbex');

app.use('api/urbex', urbex);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// const auth = require ('./middleware/auth');
// const middleWareTest = require('./middleware/middlewareTest');

// app.use(middleWareTest);


// app.get('/about', middleWareTest, (req,res) => {
//     res.send('about')
// })


// app.get('/contatti', (req, res) => {
//     res.send('<h1>Contatti</h1>')
// });


// app.get('/area', auth, (req,res) => {
//     res.send("area")
// })


app.all('*', (req, res) => {
    res.sendFile('404.html', { root: __dirname + "/public" })
});

app.listen(3000);




// Murales
// Scritte
// Strutture

// Luoghi

// Citta
//
// 
