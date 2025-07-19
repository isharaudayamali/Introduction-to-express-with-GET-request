const express = require ('express'); 

const app = express();

const userRoute = require('./routers/userRouters');
const productRoute = require('./routers/productRouters ');

require('dotenv').config();

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(()=>console.log("MongoDB connection success"))
.catch(err => console.log("connection failed:", err.errmsg));

app.get('/hello',function(req,res){
    res.send("Welcome");
})

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(3000, function() {
    console.log("Server is running on 3000");
    
})

// app.get('/users', function(req, res){
//     res.send(users)
// });

// const port= 4005;

// app.listen(port, function(){
//     console.log(`Server is running ${port}`);
    
// })