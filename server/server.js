const express = require('express');
const bodyParser = require('body-parser');

// import routers
const bookRouter = require('./routes/book_router')
const movieRouter = require('./routes/movie_router')

const app = express();
const PORT = process.env.PORT || 5000;

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/book', bookRouter); // will use the './routes/book_router.js' file to handle requests at /book
app.use('/movie', movieRouter);

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})