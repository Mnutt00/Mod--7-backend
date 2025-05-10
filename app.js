const express = require("express");
const Song = require("./models/song");

var cors = require('cors');

const app = express();
app.use(cors());


app.use(express.json());

const router = express.Router();

//grab all the song in a database
router.get("/songs", async(req,res) =>{
    try{
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
    }
})

router.get("/songs/:id", async(req,res) =>{
    try{
        const song = await Song.findById(req.params.id)
        res.json(song)
    }
    catch{
        res.status(400).send(err)
    }
})

router.post("/songs", async(req,res) =>{
    try{
        const song = await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    }
    catch(err){
        res.status(400).send(err)
    }})


router.put("/songs/:id", async(req,res) =>{
    try{
        const song = req.body
        await Song.updateOne({_id:req.params.id}, song)
        console.log(song)
        res.sendStatus(204)

    }
    catch(err){
        res.status(400).send(err)
    }
})

router.delete("/songs/:id", async(req,res) =>{
    try{
    const song = await Song.findById(req.params.id)
    Song.deleteOne({_id:req.params.id})
}
    catch(err) {
        res.status(400).send(err)

}
})
    
app.use("/api", router);

app.listen(3000);