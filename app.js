const express = require('express')
const app = express()
let date = new Date()
var mode = "STOP"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.json({timestamp: Date.now(),currentValue: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}))

app.get('/getmode', (req,res)=>{
    let topic = "test/loop/exploit"
    return res.json({
        status:mode,
        topic: topic
    })
})

app.post('/setmode', (req,res)=>{
    let data = req.body
    mode = data.mode ? data.mode : mode
    return res.json({
        mode: mode
    })
})
    
app.listen(3000,function(){
    console.log("LISTENING ON PORT 7000");
})