const express = require ('express'); 

const app = express();

const userRoute = require('./routers/userRouters');

app.get('/hello',function(req,res){
    res.send("Welcome");
})

app.use(express.json());
app.use('/', userRoute);

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