const express = require ("express");
const { getAllMoviesController } = require("../controllers/movieController");


const router = express.Router();

router.get("/",(req,res) => {
    console.log("Inside router");
    getAllMoviesController(req,res);
});

module.exports = router;
