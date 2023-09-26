const express =require('express')
const app=express()
const cors =require('cors')
app.use(cors())

app.get('/data',(req,res)=>{
    let userDetails=[
        {
            fristName:'josatyasai',
            plase:'G.vemavaram'
        },
        {
            fristName:'sivaram',
            plase:'G.vemavaram'  
        },
        {
            fristName:'vinay',
            plase:'G.vemavaram'
        }
    ]
    res.json({status : 'ok',data : userDetails})
})
app.post('/postData',(req,res)=>{
    res.json({status : "ok" ,data : 'data received successfully'})
})
app.put('/updata/:id',(req,res)=>{
    res.json({status : "ok" ,data : 'data updata successfully'})
})
app.post('/delete/:id',(req,res)=>{
    res.json({status : "ok" ,data : 'Delete successfully'})
})
app.listen(9000,(err)=>{
    if(!err){
        console.log('App is listening');
    }
})
