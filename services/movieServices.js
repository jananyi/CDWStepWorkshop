const { readFromFile } = require("../utils/fileSystemUtils.js");
const getAllMovies = (req,res) => {
    console.log('inside services');
    const movies  = readFromFile("data/movies.json");
    console.log("movies",movies);
    return movies;
};

module.exports = { getAllMovies };