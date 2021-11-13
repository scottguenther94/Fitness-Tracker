const router = require("express").Router();
const path= require("path");


router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
    console.log('home page sent')
});

router.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
    console.log('stats page sent')
});

router.get("/exercise", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
    console.log('exercise page sent')
})

module.exports = router;