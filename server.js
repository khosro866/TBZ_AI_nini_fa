const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/api/greeting', (req, res) => {
    res.json({ message: "Hello from TBZ AI!" });
});

app.listen(port, () => {
    console.log(`TBZ AI server running at http://localhost:${port}`);
});