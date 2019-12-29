const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
	res.send('batahi server');
});

app.get('/error', (req,res)=> {
	res.status(418).set('X-Test-Header', 'FSFE').send('error Page');
})
app.listen(port, ()=> console.log(`app listerning at ${port}`));
