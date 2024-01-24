const exp=require('express')
const path=require('path')

const app=exp()

app.use(function(req,res,next){
    console.log('hello')
    next()
})
app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'sample.html'))
    
})

app.post('/signup',(req, res) => {
        
        res.send("account created")

    })
app.get('/about',(req,res)=>res.send('about'))



app.listen(3000,()=>{
    console.log(__dirname)
    console.log('server started')
})