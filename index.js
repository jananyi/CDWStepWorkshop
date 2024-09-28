const express = require('express');
const movieRouter = require("./routes/movieRoutes");

const app = express();

app.use("/movies",movieRouter);

app.listen(8080, () => {
    console.log("App listening on port 8080");
});

