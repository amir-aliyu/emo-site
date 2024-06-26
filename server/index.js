const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware 
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Handle production
if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public'));

    // handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html')); // refers to any route at all
}

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 8000; //localhost 8000

app.listen(port, () => console.log(`Server started on port ${port}`));
