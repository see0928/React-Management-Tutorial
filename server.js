const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id':1,
            'image':'https://placeimag.com/65/65/1',
            'name':'유경동',
            'birthday':'961221'         
        },
        {
            'id':2,
            'image':'https://placeimag.com/65/65/2',
            'name':'은희자',
            'birthday':'621017'  
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));