import express from 'express';
// console.log(typeof express);
const app = express();
// console.log(app);

// console.log(process);
// console.log(process.env);
// console.log(process.env.PORT);



app.get("/api/users", (req, res) => {
    res.send({message:'get data from database'});
});


app.post("/api/users", (req, res) => {
    res.send({message:'Insert data from database'});
  });


app.put("/api/users", (req, res) => {
    res.send({message:'Update data from database'});
});

app.delete("/api/users", (req, res) => {
    res.send({message:'Delete data from database'});
});


app.listen(process.env.PORT , ()=>{
    console.log('listening on port '+process.env.PORT);
});





