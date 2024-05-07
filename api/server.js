const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const cards = require('./cards.json');

app.get('/cards', (req, res) => {
    res.json(cards);
});

app.get('/random-cards', (req, res) => {
    const numberOfCards = req.query.number || 1;
    const randomCards = [];
    const usedIndexes = [];
    for (let i = 0; i < numberOfCards; i++) {
        let randomIndex = Math.floor(Math.random() * cards.length);
        while (usedIndexes.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * cards.length);
        }
        usedIndexes.push(randomIndex);
        randomCards.push(cards[randomIndex]);
    }
    res.json(randomCards);
});

app.get('/todays-card', (req, res) => {
    // get a card at midnight and keep it for the day
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});