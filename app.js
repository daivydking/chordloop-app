const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything inside the "public" folder (our chord player page)
app.use(express.static(path.join(__dirname, 'public')));

// Health check, handy for testing the container
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Chordloop running on port ${PORT}`);
});
