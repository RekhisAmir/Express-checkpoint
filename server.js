const express = require ('express')
const app = express()



const timing = (req,res,next)=>{
    let time = new Date()
    let day= time.getDay();
    let hour = time.getHours();
    (day>1  && day<7  && hour>=9  && hour<=17 )?next():console.log('Out of work !')
}

app.use(timing)

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/public/Home.html")
})

app.get('/our services', (req,res)=>{
    res.sendFile(__dirname+"/public/Services.html")
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+"/public/Contact.html")
})

const PORT = 5000
app.listen(PORT, (err)=>{err? console.log(err):console.log(`Server is running on port ${PORT}`)})