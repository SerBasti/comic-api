// src/index.ts
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Node.js and Yarn!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
