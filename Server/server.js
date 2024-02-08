const express = require('express');
const app = express();

app.use('/',(req,res)=>{
    res.json({'msg' : "heelo dev"})
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log('server runnig on 4000')
})