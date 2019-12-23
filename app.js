const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
	res.send('batahi server');
});
app.listen(port, ()=> console.log(`app listerning at ${port}`));
