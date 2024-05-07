const express = require('express');
const cors = require('cors');
const cron = require('node-cron');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const cards = require('./cards.json');
let todaysCard = null;

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
    if (!todaysCard) {
        todaysCard = cards[Math.floor(Math.random() * cards.length)];
    }
    res.json(todaysCard);
});

cron.schedule('0 0 * * *', () => {
    todaysCard = null;
    console.log('Today\'s card has been reset');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});