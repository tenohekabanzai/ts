const express = require("express")
const axios = require("axios")
const cors = require("cors")
const Redis = require('redis')

const redisClient = Redis.createClient();

redisClient.connect().catch(err => {
    console.error('Failed to connect to Redis:', err);
});

const DEFAULT_EXP = 3600

const app = express();
app.use(cors());

app.get('/photos', async(req,res)=>{

    const albumId = req.query.albumId;
    console.log(albumId);
    const resp = await redisClient.get(albumId == undefined ? "photos" :`photos/${albumId}`);
   
    if(resp){
     console.log("Cache hit")
     const jsonized = await JSON.parse(resp);
     return res.json(jsonized);
    }
    
    console.log("Cache Miss")
    const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`,
        {params:{albumId}}
    )

    await redisClient.set(albumId == undefined ? "photos" :`photos/${albumId}`, JSON.stringify(data), {
        EX: DEFAULT_EXP 
    });

    res.json(data);
})

app.get('/photos/:id',async(req,res)=>{
    
    const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    )
    
    res.json(data)
})

app.listen(3002,()=>console.log("App running at 3002"));