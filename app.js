const express=require('express')
const app =express()
 
app.use((req,res)=>{
    res.send('<h1>helloworld<h1>')
})







app.listen(3000,()=>console.log("server is run"))