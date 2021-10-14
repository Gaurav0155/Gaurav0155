const express = require('express');
const path = require('path');
const app = express();
let ejs = require('ejs');

const cors = require('cors')
const BodyParser = require("body-parser").json()
const bodyParser = require("body-parser").urlencoded({extended:true})
const con = require('./src/config/conn')
app.use(cors())
app.use(BodyParser)
app.use(bodyParser)
app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'))
const userRoute = require('./src/routes/userRoute');
 const categoryRoute =require('./src/routes/categoryRoute')
app.use('/admin',userRoute)
app.use('/admin',categoryRoute);

app.get('*', function(req, res) {
    res.render('error.ejs');
 });
app.listen(4000,(err)=>{
    if(err) throw err; 
    console.log(`server connected on 4000`);
})
