// src/server.ts
import express from 'express';
import cors from 'cors';
import returnOrders from './data/returnOrders'

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/getAllOrders', (req, res) => {
  res.json(returnOrders);
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Return Orders API is running. Use /getAllOrders to get all return orders.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});