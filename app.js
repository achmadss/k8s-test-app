import express from 'express';
import { hostname as _hostname } from 'os';

const app = express();
const port = 3000;

// App endpoint
app.get('/', (req, res) => {
    const hostname = _hostname(); // Pod name
    const worker = process.env.WORKER || 'Unknown Worker'; // Node hostname passed as an environment variable
    let output = `Hello! I'm from ${worker} on pod ${hostname}`
    console.log(output)
    res.send(`<h1>${output}</h1>`);
});

// Start the server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
