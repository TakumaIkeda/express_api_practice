require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const app = express();
const indexController = require('./controllers/indexController')

app.get('/',indexController.index);
app.get('/create',indexController.create);
app.get('/get',indexController.get);
app.get('/delete',indexController.delete);

app.listen(port,()=>{
    console.log('app listening at http://localhost:' + port );
});